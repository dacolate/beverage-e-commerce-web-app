import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import SessionProvider from "./SessionProvider";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await validateRequest();

  // if (!session.user) redirect("/login");

  return (
    <SessionProvider value={session}>
      <div className="bg-red-600 w-full"></div>
      {children}
    </SessionProvider>
  );
}
