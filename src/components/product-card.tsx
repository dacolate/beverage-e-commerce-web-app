"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect, useState } from "react";
import { useCart } from "@/app/(main)/contexts/CartContext";
import { Minus, Plus, ShoppingCart, X, XIcon } from "lucide-react";
import { Input } from "./ui/input";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  conditioned?: boolean;
}

export function ProductCard({
  id,
  name,
  description,
  price,
  imageUrl,
  conditioned,
}: ProductCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (isExpanded) {
      addToCart({ id, name, price, quantity });
      setIsExpanded(false);
      setQuantity(1);
    } else {
      setIsExpanded(true);
    }
  };

  const handleQuantityChange = (value: number) => {
    setQuantity(Math.max(1, Math.min(99, value)));
  };

  return (
    <Card
      className={`transition-all duration-1000 ${isExpanded ? "scale-105 shadow-lg" : ""} h-full relative shadow-md rounded-lg border`}
    >
      <CardContent className="p-2 pb-0">
        <div className={`flex ${isExpanded ? "gap-2" : " "}`}>
          <div className="w-full">
            <Image
              src={imageUrl}
              alt={name}
              width={100}
              height={100}
              className="w-full h-24 object-cover mb-2 rounded bg-gray-200"
            />
            <h3 className="text-sm font-semibold text-white/70 mb-1 truncate">
              {name}
            </h3>
            <p className="text-xs text-gray-600 mb-2 line-clamp-2">
              {description}
            </p>
            <div className="p-2 flex flex-col justify-between items-center gap-2 font-bold text-yellow-600">
              {price} F
              <div className="flex justify-center w-full items-center gap-4">
                <span className="text-xs font-bold ">
                  {conditioned ? (
                    <span className="text-orange-500 font-medium flex items-center gap-1 text-xs">
                      <i className="fa fa-exclamation-circle"></i> Conditioned
                    </span>
                  ) : (
                    <span className="text-green-500 font-medium flex items-center gap-1 text-xs">
                      <i className="fa fa-check-circle"></i> Available
                    </span>
                  )}
                </span>
              </div>
              {/* <Button
                size="sm"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-xs w-full py-2 rounded"
                onClick={handleAddToCart}
              >
                {isExpanded ? `Add ${quantity} to Cart` : "Add to Cart"}
              </Button> */}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-2 flex flex-col">
        {isExpanded && (
          <div className="flex flex-col gap-1">
            <span className="text-gray-600 text-base">Up to 3</span>
            <div className="flex items-center justify-between w-full mb-2">
              <Button
                size="icon"
                variant="outline"
                onClick={() => handleQuantityChange(quantity - 1)}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <Input
                type="number"
                value={quantity}
                onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
                className="w-16 text-center"
                min="1"
                max="99"
              />
              <Button
                size="icon"
                variant="outline"
                onClick={() => handleQuantityChange(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
        <div className="flex gap-1 items-center">
          {isExpanded && (
            <Button
              className="h-[35px] bg-red-600 hover:bg-red-800"
              onClick={() => {
                setIsExpanded(false);
              }}
            >
              <XIcon className="h-4 w-4" />
            </Button>
          )}
          <Button
            size="sm"
            className="h-[35px] bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-xs w-full py-2 rounded"
            onClick={handleAddToCart}
          >
            {isExpanded ? `Add ${quantity} to Cart` : "Add to Cart"}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
