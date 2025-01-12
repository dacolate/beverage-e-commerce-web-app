import { FeaturedProductsScrollArea } from "@/components/featured-products-scrollarea";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

const products = [
  {
    name: "Top grenadine",
    description: "6 per pallet",
    price: 26000,
    imageUrl: "https://i.postimg.cc/d33x8MJS/top-grenadine.jpg",
    conditioned: true,
  },
  {
    name: "Top pamplemousse",
    description: "6 per pallet",
    price: 2600,
    imageUrl: "https://i.postimg.cc/B6MzLZfK/top-pamplemousse.jpg",
  },
  {
    name: "Top ananas",
    description: "6 per pallet",
    price: 2600,
    imageUrl: "https://i.postimg.cc/D0NY6CZf/top-ananas.jpg",
  },
  {
    name: "Top orange",
    description: "6 per pallet",
    price: 2600,
    imageUrl: "https://i.postimg.cc/zD2Mqfjm/top-orange.jpg",
  },
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

export default function Home() {
  return (
    <main className="flex flex-col h-full w-full ">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
          <FeaturedProductsScrollArea />
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-6">Popular Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </section>
      </main>
      <Footer />

      {/* <Button className="sm:hidden fixed bottom-0 h-12 w-full shadow-lg rounded-sm bg-gray-900 hover:bg-gray-950 text-white">
        New command
      </Button> */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t p-4 flex justify-between items-center">
        <div className="text-lg font-bold">Total: 0 F</div>
        <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900">
          <ShoppingCart className="mr-2 h-4 w-4" /> My order
        </Button>
      </div>
    </main>
  );
}
