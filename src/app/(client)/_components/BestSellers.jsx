"use client"

import React from "react";
import { ProductsData } from "../data/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { useSnapshot } from "valtio";
import { state } from "../../../../store/store";
import { urlFor } from "@/sanity/lib/image";

const BestSellers = () => {


  const {bestSellingProducts, sale} = useSnapshot(state)
  

  return (
    <div className="w-full  sm:px-[32px] pl-[10px] ">
      <div className="text-[15px]  sm:text-[20px] cursor-pointer font-[700] pt-[20px] pb-[20px] ">
        <h1>Best Sellers</h1>
      </div>


      <div className="pb-[20px]">
        <Carousel className="overflow-hidden">
          <CarouselContent className="w-[227px] pl-2 h-[332px]">
            {bestSellingProducts?.map((item, i) => (
              <CarouselItem className=" " key={i}>
                <Link href={`/products/${item?._id}`}>
                  <img
                    src={urlFor(item?.images[0])}
                    className="h-[80%] w-full items-center cursor-pointer justify-center object-cover"
                  />
                  <p className="text-[11px] font-[700] cursor-pointer pt-[5px] text-center">
                    {item?.name}
                  </p>

                  {item?.onSale ? <p className=" italic text-[10px] font-[600] cursor-pointer text-center text-[#454545]">
                      {item?.price * ((100-sale?.percentageOff)/100)} PKR
                    </p> : <p className=" italic text-[10px] font-[600] cursor-pointer text-center text-[#454545]">
                    {item?.price} PKR
                  </p>
                  }
                  
                  {item?.onSale && (<p className=" italic text-[10px] font-[600] cursor-pointer text-center text-[red] line-through">
                    {item?.price} PKR

                  </p>
                )}
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-[60px] hidden  sm:flex items-center" />
          <CarouselNext className="mr-[60px] hidden  sm:flex items-center" />
        </Carousel>
      </div>
    </div>
  );
};

export default BestSellers;
