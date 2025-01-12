import Link from 'next/link'
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Get to Know Us</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-yellow-400">About Us</Link></li>
              <li><Link href="#" className="hover:text-yellow-400">Careers</Link></li>
              <li><Link href="#" className="hover:text-yellow-400">Press Releases</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Make Money with Us</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-yellow-400">Sell on AmazonClone</Link></li>
              <li><Link href="#" className="hover:text-yellow-400">Become an Affiliate</Link></li>
              <li><Link href="#" className="hover:text-yellow-400">Advertise Your Products</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Payment Products</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-yellow-400">AmazonClone Rewards Visa</Link></li>
              <li><Link href="#" className="hover:text-yellow-400">AmazonClone.com Store Card</Link></li>
              <li><Link href="#" className="hover:text-yellow-400">AmazonClone Business Card</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Let Us Help You</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-yellow-400">Your Account</Link></li>
              <li><Link href="#" className="hover:text-yellow-400">Your Orders</Link></li>
              <li><Link href="#" className="hover:text-yellow-400">Shipping Rates & Policies</Link></li>
              <li><Link href="#" className="hover:text-yellow-400">Returns & Replacements</Link></li>
              <li><Link href="#" className="hover:text-yellow-400">Help</Link></li>
            </ul>
          </div>
        </div>
        <Separator className="my-8 bg-gray-700" />
        <div className="text-center">
          <p>&copy; 2023 AmazonClone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

