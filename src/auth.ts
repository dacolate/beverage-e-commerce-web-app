/* Most of this code is based on https://lucia-auth.com/tutorials/username-and-password/nextjs-app */


import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import prisma from "./lib/prisma";
import { Lucia, Session, User } from "lucia";
import { cache } from "react";
import { cookies } from "next/headers";

const adapter = new PrismaAdapter(prisma.session, prisma.user);

export const lucia = new Lucia(adapter, {
    sessionCookie: {
        expires: false,
        attributes: {
            secure: process.env .NODE_ENV === "production",
        },
    },
getUserAttributes (databaseUserAttributes) {
    return {
    id: databaseUserAttributes.id,
    name: databaseUserAttributes.name,
    phone: databaseUserAttributes.phone,
    role: databaseUserAttributes.role,
    isFavorite: databaseUserAttributes.isFavorite,
    };
},
});


declare module "lucia" {
    interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: DatabaseUserAttributes;
    }
}

interface DatabaseUserAttributes {
    id: string;
    name: string;
    phone: string;
    role: string ;
    isFavorite: boolean;
}

export const validateRequest = cache(
	async (): Promise<{ user: User; session: Session } | { user: null; session: null }> => {
		const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
		if (!sessionId) {
			return {
				user: null,
				session: null
			};
		}

		const result = await lucia.validateSession(sessionId);
		// next.js throws when you attempt to set cookie when rendering page
		try {
			if (result.session && result.session.fresh) {
				const sessionCookie = lucia.createSessionCookie(result.session.id);
				cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
			}
			if (!result.session) {
				const sessionCookie = lucia.createBlankSessionCookie();
				cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
			}
		} catch {}
		return result;
	}
);