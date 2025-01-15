import BottomMenu from "@/components/BottomMenu";
import { CartSheet } from "@/components/CartSheet";
import { FeaturedProductsScrollArea } from "@/components/featured-products-scrollarea";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ShoppingCart } from "lucide-react";
import Image from "next/image";

const products = [
  {
    id: "product-1",
    name: "Top grenadine",
    description: "6 per pallet",
    price: 2600,
    imageUrl: "https://i.postimg.cc/d33x8MJS/top-grenadine.jpg",
  },
  {
    id: "product-2",
    name: "Top pamplemousse",
    description: "6 per pallet",
    price: 2600,
    imageUrl: "https://i.postimg.cc/B6MzLZfK/top-pamplemousse.jpg",
  },
  {
    id: "product-3",
    name: "Top ananas",
    description: "6 per pallet",
    price: 2600,
    imageUrl: "https://i.postimg.cc/D0NY6CZf/top-ananas.jpg",
  },
  {
    id: "product-4",
    name: "Top orange",
    description: "6 per pallet",
    price: 2600,
    imageUrl: "https://i.postimg.cc/D0NY6CZf/top-orange.jpg",
  },
];

const totalPrice = products.reduce(
  (total, product) => total + product.price,
  0
);

export default function Home() {
  return (
    <main className="flex flex-col h-full w-full">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Product</h2>
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

      {/* Bottom Fixed Div */}
      <BottomMenu />

      <Footer />
    </main>
  );
}
