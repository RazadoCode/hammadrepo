"use client";
import Link from "next/link";
import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const Header = () => {
  const BannerImages = [
    {
      src1: "/images/bannerimages/banner1_desk.png",
      src2: "/images/bannerimages/banner1_mobile.png",
    },
    {
      src1: "/images/bannerimages/banner1_desk.png",
      src2: "/images/bannerimages/banner1_mobile.png",
    },
  ];

  const NavLinks = [
    { name: "KURTA", href: "/kurta" },
    { name: "UNSTICHED", href: "/unstiched" },
    { name: "READY-TO-WEAR", href: "/ready-to-wear" },
    { name: "SALE", href: "/sale" },
    { name: "ABOUT", href: "/about" },
  ];

  return (
    <div className="w-full h-full  ">
      <div className=" bg-[#F5F5F5] text-[11px] font-[400] sm:flex gap-7 h-[35px] items-center justify-center hidden    ">
        {NavLinks.map((item, i) => (
          <ul key={i}>
            <Link href={item.href}>{item.name}</Link>
          </ul>
        ))}
      </div>

      <Carousel
        className="overflow-hidden"
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {BannerImages.map((item, i) => (
            <CarouselItem key={i}>
              <div className="w-full h-full">
                <img
                  src={item.src2}
                  className="sm:hidden block object-cover  w-full h-full  "
                />
                <img
                  src={item.src1}
                  className="hidden sm:block object-cover w-full h-full "
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-[60px] hidden  sm:flex items-center" />
        <CarouselNext className="mr-[60px] hidden sm:flex items-center" />
      </Carousel>
    </div>
  );
};

export default Header;
