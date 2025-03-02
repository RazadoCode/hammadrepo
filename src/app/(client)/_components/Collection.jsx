"use client"

import React from "react";
import { CollectionImages } from "../data/data";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";
import { useSnapshot } from "valtio";
import { state } from "../../../../store/store";
import { urlFor } from "@/sanity/lib/image";

const Collection = () => {

  const {categories}=useSnapshot(state)

  return (
    <div className="w-full   ">
      <div className="text-[15px] sm:px-[32px] px-[16px] sm:text-[20px] cursor-pointer font-[700] pt-[20px] pb-[20px] ">
        <h1>Collections</h1>
      </div>

      <div className="hidden sm:flex items-center justify-center gap-5 pb-[30px] pt-[20px] ">
        {categories.map((item, i) => (
          <Link href={`/productList/${item?._id}`} key={i}>
            <div className="flex flex-col sm:w-[172px] sm:h-[172px]">
              <img src={urlFor(item?.image)} className="w-full rounded-full h-full" />
              <p className="flex text-center items-center justify-center cursor-pointer pt-[6px] font-[700]">
                {item?.name}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="sm:hidden block pt-[20px] pb-[20px] ">
        <Carousel className="overflow-hidden">
          <CarouselContent className="w-[200px] h-[200px]">
          {categories.map((item, i) => (
              <CarouselItem key={i} className="">
                <Link href={`/productList/${item?._id}`}>
                  <div className="flex-col flex justify-center text-center w-[172px] rounded-full">
                    <img
                      src={urlFor(item?.image)}
                      className="w-full rounded-full h-[172px] cursor-pointer"
                    />
                    <p className="font-[700] pt-[6px] cursor-pointer">{item?.name}</p>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Collection;
