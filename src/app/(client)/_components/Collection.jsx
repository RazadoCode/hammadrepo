import React from "react";
import { CollectionImages } from "../data/data";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";

const Collection = () => {
  return (
    <div className="w-full   ">
      <div className="text-[15px] sm:px-[32px] px-[16px] sm:text-[20px] font-[700] pt-[20px] pb-[20px] ">
        <h1>Collections</h1>
      </div>

      <div className="hidden sm:flex items-center justify-center gap-5 pb-[30px] pt-[20px] ">
        {CollectionImages.map((item, i) => (
          <Link href={`/productList/${item.href}`} key={i}>
            <div className="flex flex-col sm:w-[172px] sm:h-[172px]">
              <img src={item.src} className="w-full rounded-full h-full" />
              <p className="flex text-center items-center justify-center pt-[6px] font-[700]">
                {item.name}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="sm:hidden block pt-[20px] pb-[20px] ">
        <Carousel className="overflow-hidden">
          <CarouselContent className="w-[200px] h-[200px]">
            {CollectionImages.map((item, i) => (
              <CarouselItem key={i} className="">
                <Link href={`/productList/${item.href}`}>
                  <div className="flex-col flex justify-center text-center w-[172px] rounded-full">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full rounded-full h-[172px]"
                    />
                    <p className="font-[700] pt-[6px]">{item.name}</p>
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
