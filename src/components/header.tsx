import Link from "next/link";
import { User, Search, ShoppingCart, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-gray-900 text-white w-full p-4 flex items-center justify-between">
      {/* Logo */}
      <Link
        href="/"
        className="text-[40px] font-bold flex-shrink-0 hover:text-yellow-400 transition-all duration-300 ease-in-out"
      >
        B
      </Link>

      {/* Search Bar */}
      <div className="flex mx-2 w-[700px]">
        <div className="relative flex items-center w-full">
          <Input
            type="search"
            placeholder="Search producs..."
            className="w-full px-4 py-2 pr-12 rounded-md bg-gray-800 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all duration-300"
          />
          <Button
            size="icon"
            className="absolute right-0 bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-md p-2 transition-all duration-300"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Account Button */}
      <div className="flex items-center">
        <Button variant="ghost" asChild>
          <Link
            href="/account"
            className="flex items-center hover:text-yellow-400 transition-all duration-300"
          >
            <User className="h-5 w-5 mr-1" />
            <span className="hidden md:inline">Account</span>
          </Link>
        </Button>
      </div>
    </header>
  );
}
