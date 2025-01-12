import Image from 'next/image'
import { Button } from "@/components/ui/button"

export function FeaturedProduct() {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Featured Product</h2>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <Image 
            src="/placeholder.svg?height=300&width=300" 
            alt="Featured Product" 
            width={300} 
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-6">
          <h3 className="text-xl font-semibold mb-2">Amazing Gadget</h3>
          <p className="text-gray-600 mb-4">This incredible gadget will revolutionize your life with its amazing features and sleek design.</p>
          <div className="text-2xl font-bold text-yellow-600 mb-4">$99.99</div>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}

