"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCart } from "@/app/(main)/contexts/CartContext";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const CartItem = ({ item, onRemove }: { item: any; onRemove: () => void }) => (
  <div className="flex justify-between items-center py-2">
    <div className="flex flex-col">
      <span className="text-sm font-medium">{item.name}</span>
      <span className="text-gray-500 text-xs">
        {item.quantity} × {item.price} F ={item.quantity * item.price} F
      </span>
    </div>
    <Button
      variant="ghost"
      size="sm"
      aria-label={`Remove ${item.name} from cart`}
      onClick={onRemove}
    >
      Remove
    </Button>
  </div>
);

export function CartSheet() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, getCartTotal, removeFromCart } = useCart();

  const handleRemoveItem = (id: string) => removeFromCart(id);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="relative text-yellow-400 hover:text-yellow-500 border-yellow-400 font-semibold px-4 py-2 rounded-md"
        >
          <span>My order</span>
          <ShoppingCart className="h-5 w-5 ml-2" />
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cart.length}
            </span>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>My Order</SheetTitle>
          <SheetDescription>
            {cart.length > 0
              ? "Review your items below."
              : "Your cart is empty."}
          </SheetDescription>
        </SheetHeader>

        <div className="mt-4">
          {cart.length === 0 ? (
            <div className="text-center text-gray-500">Your cart is empty!</div>
          ) : (
            <div className="space-y-4">
              {cart.map((item, index) => (
                <CartItem
                  key={index}
                  item={item}
                  onRemove={() => handleRemoveItem(item.id)}
                />
              ))}
              <div className="mt-6 text-right font-bold">
                Total: {getCartTotal()} F
              </div>
              <Button
                asChild
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-white mt-4"
              >
                <Link href="/checkout">Checkout</Link>
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
