"use server";

import { lucia } from "@/auth";
import prisma from "@/lib/prisma";
// import streamServerClient from "@/lib/stream";
import { signUpSchema, SignUpValues } from "@/lib/validation";
import { hash } from "@node-rs/argon2";
import { generateIdFromEntropySize } from "lucia";
import { isRedirectError } from "next/dist/client/components/redirect";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { string } from "zod";

export async function signUp(
  credentials: SignUpValues,
): Promise<{ error: string }> {
  try {
    // Just recheck the data on top of the front-end validation (done with "zod" )
    const { name, phone, password } = signUpSchema.parse(credentials);

    // Hashed according to Lucia's docs !
    const passwordHash = await hash(password, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    });
    /*LUCIA DOCS: https://lucia-auth.com/reference/main/generateIdFromEntropySize */ 

    const userId = generateIdFromEntropySize(10);

    // Check if username already exists (not case sensitive at all)
    const existingUsername = await prisma.user.findFirst({
      where: {
        name: {
          equals: name,
          mode: "insensitive",
        },
      },
    });
    // If it exists return an error message
    if (existingUsername) {
      return {
        error: "Username already taken",
      };
    }

    // Same for mail 
    const existingEmail = await prisma.user.findFirst({
      where: {
        phone: {
          equals: phone,
          mode: "insensitive",
        },
      },
    });

    if (existingEmail) {
      return {
        error: "Email already taken",
      };
    }

    await prisma.$transaction(async (tx) => {
      await tx.user.create({
        data: {
          id:userId,
          name:name,
          phone: phone,
          password: passwordHash,
          role: "USER"
        },
      });
      /* await streamServerClient.upsertUser({
        id: userId,
        username,
        name: username,
      }); */
    });

    
    const session = await lucia.createSession(String(userId), {}); // Second parameter empty coz Lucia docs said so!!!!
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes,
    );

    return redirect("/");
  } catch (error) {
    // Necessary coz sometimes the redirect can somehow throw an error so this line is used to avoid that. 
    if (isRedirectError(error)) throw error;
    console.error(error);
    return {
      error: "Something went wrong. Please try again.",
    };
  }
}