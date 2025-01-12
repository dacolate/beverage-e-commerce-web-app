import Link from "next/link";
import { ShoppingCart, User, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-gray-900 text-white w-full p-4 pb-2 pr-1 flex items-center">
      <Link href="/" className="text-2xl font-bold mb-4 md:mb-0">
        B
      </Link>
      <div className="flex-grow mx-4 mb-4 md:mb-0">
        <div className="relative flex items-center">
          <Input
            type="search"
            placeholder="Search products..."
            className="w-full pr-10 bg-white text-gray-900"
          />
          <Button
            size="icon"
            className="absolute right-0 bg-yellow-400 hover:bg-yellow-500 text-gray-900"
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <Button variant="ghost" asChild>
        <Link href="/account" className="flex items-center mb-4 md:mb-0">
          <User className="h-5 w-5 mr-1" />
          <span className="hidden md:inline">Account</span>
        </Link>
      </Button>
      <Button variant="ghost" asChild>
        <Link href="/cart" className="flex items-center mb-4 md:mb-0">
          <ShoppingCart className="h-5 w-5 mr-1" />
          <span className="hidden md:inline">Cart</span>
        </Link>
      </Button>
    </header>
  );
}
