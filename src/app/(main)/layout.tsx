import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import SessionProvider from "./SessionProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import UserButton from "@/components/UserButton";
import { headers } from "next/headers";


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
