"use client"
import Image from "next/image"
import Logo from "../../../../public/images/logo.png"
import Cart from "../../../../public/images/cart.png"
import Link from "next/link";
import { NavLinks } from "../data/data";
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const Navbar = () => {
  const headerText = "Enjoy Free Delivery Above 5000PKR Order"

  return (
    <div className="w-full shadow-md bg-white">
      <div className="bg-black flex items-center justify-center text-[11px] text-white font-[700] h-[35px]">
        <p>{headerText}</p>
      </div>

      <div className="flex h-[75px] justify-between items-center px-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-8 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>
              <Link href="/">
            <Image
              className="w-[80px] sm:w-[120px] h-[60px] object-cover"
              src={Logo || "/placeholder.svg"}
              alt="Logo"
              width={120}
              height={60}
            />
          </Link>
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-4 mt-8">
            {/* className="text-gray-700 hover:text-gray-900" */}
             {
              NavLinks.map((item,i) => (
                  <Link href={item.href} key={i} className="text-gray-700 hover:text-gray-900">
                    {item.name}
                  </Link>
              ))
             }
            </nav>
          </SheetContent>
        </Sheet>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <Image
              className="w-[80px] sm:w-[120px] h-[60px] object-cover"
              src={Logo || "/placeholder.svg"}
              alt="Logo"
              width={120}
              height={60}
            />
          </Link>
        </div>

        <nav className="hidden space-x-4 absolute left-4">
          <Link href="/" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link href="/products" className="text-gray-700 hover:text-gray-900">
            Products
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">
            Contact
          </Link>
        </nav>

        <Button variant="ghost" size="icon" className="ml-auto">
          <Image src={Cart || "/placeholder.svg"} alt="Cart" width={24} height={24} />
          <span className="sr-only">Open cart</span>
        </Button>
      </div>
    </div>
  )
}

export default Navbar





