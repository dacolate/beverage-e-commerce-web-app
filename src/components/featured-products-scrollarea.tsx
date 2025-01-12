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

const featuredProducts = [
  {
    name: "33 Export",
    description: "12 by crate",
    price: 7800,
    imageUrl: "https://i.postimg.cc/FKvCTk9S/33-export.jpg",
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
    <ScrollArea className="w-full whitespace-nowrap rounded-md">
      <div className="flex w-full gap-2">
        {featuredProducts.map((product) => (
          <Card className="h-full w-36" key={product.name}>
            <CardContent className="p-2">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={100}
                height={100}
                className="w-full h-24 object-cover mb-2 rounded"
              />
              <h3 className="text-sm font-semibold mb-1 truncate">
                {product.name}
              </h3>
            </CardContent>
            <CardFooter className="p-2 flex justify-between items-center">
              <span className="text-sm font-bold text-yellow-600">
                {product.price} F
              </span>
              <Button
                size="sm"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-xs"
              >
                Buy
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <ScrollBar orientation="horizontal" className="hidden" />
    </ScrollArea>
  );
}
