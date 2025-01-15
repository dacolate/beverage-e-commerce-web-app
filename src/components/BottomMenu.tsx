"use client";

import { useCart } from "@/app/(main)/contexts/CartContext";
import { CartSheet } from "./CartSheet";

export default function BottomMenu() {
  const cart = useCart();
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white border-t border-gray-700 p-4 flex items-center justify-between space-x-4 shadow-lg">
      <div className="text-lg font-bold">
        Total: <span className="text-yellow-500">{cart.getCartTotal()} F</span>
      </div>
      <CartSheet />
    </div>
  );
}
