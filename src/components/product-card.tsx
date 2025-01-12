import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export function ProductCard({
  name,
  description,
  price,
  imageUrl,
}: ProductCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-2">
        <Image
          src={imageUrl}
          alt={name}
          width={100}
          height={100}
          className="w-full h-24 object-cover mb-2 rounded"
        />
        <h3 className="text-sm font-semibold mb-1 truncate">{name}</h3>
        <p className="text-xs text-gray-600 mb-2 line-clamp-2">{description}</p>
      </CardContent>
      <CardFooter className="p-2 flex justify-between items-center">
        <span className="text-sm font-bold text-yellow-600">{price} F</span>
        <Button
          size="sm"
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-xs"
        >
          Buy
        </Button>
      </CardFooter>
    </Card>
  );
}
