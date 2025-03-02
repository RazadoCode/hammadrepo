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
import { NavLinks } from "../data/data";
import { BannerImages } from "../data/data";
import Autoplay from "embla-carousel-autoplay";
import { useSnapshot } from "valtio";
import { state } from "../../../../store/store";
import { urlFor } from "@/sanity/lib/image";

const Header = () => {

  const {banners, categories}=useSnapshot(state)



  return (
    <div className="w-full h-full  ">
      <div className=" bg-[#F5F5F5] text-[11px] font-[400] sm:flex gap-7 h-[35px] items-center justify-center hidden    ">
        {categories?.map((item, i) => (
          <ul className="uppercase" key={i}>
            <Link href={"/productList/"+item?._id}>{item?.name}</Link>
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
          {banners?.map((item, i) => (
            <CarouselItem key={i}>
              <div className="w-full h-full">
                <img
                  src={urlFor(item?.imageMobile)}
                  className="sm:hidden block object-cover  w-full h-full  "
                />
                <img
                  src={urlFor(item?.imageDesktop)}
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
