import Image from "next/image";
import Logo from "../../../public/images/logo.png";
import Cart from "../../../public/images/cart.png";
import Burger from "../../../public/images/burger.png";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  const headerText = "Enjoy Free Delivery Above 5000PKR Order";

  const NavLinks = [
    { name: "KURTA", href: "/kurta" },
    { name: "UNSTICHED", href: "/unstiched" },
    { name: "READY-TO-WEAR", href: "/ready-to-wear" },
    { name: "SALE", href: "/sale" },
    { name: "ABOUT", href: "/about" },
  ];

  return (
    <div className="w-full   ">
      <div className="bg-black flex items-center justify-center text-[11px] text-white font-[700] h-[35px]">
        <p>{headerText}</p>
      </div>

      <div className=" flex h-[75px] justify-between items-center px-[10px] ">
        <div className="">
          <Image className="block sm:hidden" src={Burger} alt="DropDown" />
        </div>
        <div>
          <Image
            className="w-[80px] sm:w-[120px] h-[60px] object-cover"
            src={Logo}
            alt="Logo"
          />
        </div>
        <div>
          <Image src={Cart} alt="Cart" />
        </div>
      </div>

       
    </div>
  );
};

export default Navbar;
