import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import "@fortawesome/fontawesome-free/css/all.min.css";

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  conditioned?: boolean;
}

export function ProductCard({
  name,
  description,
  price,
  imageUrl,
  conditioned,
}: ProductCardProps) {
  return (
    <Card className="h-full relative">
      <CardContent className="p-2 pb-0">
        <Image
          src={imageUrl}
          alt={name}
          width={100}
          height={100}
          className="w-full h-24 object-cover mb-2 rounded bg-gray-900"
        />
        {/* {conditioned && (
          <div className="absolute top-2 left-2 bg-red-300 text-black text-xs font-medium px-2 py-1 rounded shadow-md">
            Conditioned
          </div>
        )} */}

        <h3 className="text-sm font-semibold mb-1 truncate">{name}</h3>
        <p className="text-xs text-gray-600 mb-2 line-clamp-2">{description}</p>
      </CardContent>
      <CardFooter className=" p-2 flex flex-col justify-between items-center gap-1 ">
        {conditioned ? (
          <span className="text-red-400 font-medium flex items-center gap-1 text-xs">
            <i className="fa fa-exclamation-circle"></i> Conditioned
          </span>
        ) : (
          <span className=" font-medium flex items-center gap-1 text-xs">
            <i className="fa fa-check-circle text-white"></i> Available
          </span>
        )}
        <div className="flex justify-between w-full items-center gap-6 ">
          <span className="text-xs font-bold text-yellow-600">{price} F</span>
          <span className="text-xs text-gray-500">Buy up to 3</span>
        </div>
        <Button
          size="sm"
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-xs w-full "
        >
          Buy
        </Button>
      </CardFooter>
    </Card>
  );
}
