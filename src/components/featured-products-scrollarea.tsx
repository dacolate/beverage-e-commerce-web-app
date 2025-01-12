import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { ProductCard } from "./product-card";

export const featuredProducts = [
  {
    name: "33 Export",
    description: "12 by crate",
    price: 7800,
    imageUrl: "https://i.postimg.cc/FKvCTk9S/33-export.jpg",
    conditioned: true,
  },
  // {
  //   name: "Castel",
  //   description: "12 by crate",
  //   price: 7800,
  //   imageUrl: "https://i.postimg.cc/635jXs45/castel.jpg",
  // },
  {
    name: "Booster Cola",
    description: "12 by crate",
    price: 7800,
    imageUrl: "https://i.postimg.cc/fT6r0gpB/booster-cola.jpg",
  },
  {
    name: "Chill",
    description: "12 by crate",
    price: 7800,
    imageUrl: "https://i.postimg.cc/tC1cJHSs/chill.jpg",
  },
  {
    name: "Isenbeck",
    description: "12 by crate",
    price: 7800,
    imageUrl: "https://i.postimg.cc/XvgHmNJz/isenbeck.jpg",
  },
  // {
  //   name: "Mutzig",
  //   description: "12 by crate",
  //   price: 7800,
  //   imageUrl: "https://i.postimg.cc/mgC63yGR/mutzig.jpg",
  // },
];

export function FeaturedProductsScrollArea() {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md overflow-hidden">
      <div className="flex w-full gap-4 items-stretch">
        {featuredProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      <ScrollBar orientation="horizontal" className="hidden" />
    </ScrollArea>
  );
}
