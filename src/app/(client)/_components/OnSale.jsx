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

const OnSale = () => {
  return (
    <div className="w-full  sm:px-[32px]  pl-[10px] ">
      <div className="text-[15px]  sm:text-[20px] font-[700] pt-[20px] pb-[20px] ">
        <h1>On Sale</h1>
      </div>

      <div className="pb-[20px]">
        <Carousel className="overflow-hidden">
          <CarouselContent className="w-[227px] pl-2 h-[332px]">
            {ProductsData.map((item, i) => (
              <CarouselItem className=" " key={i}>
                <Link href={`/products/${item.id}`}>
                  <img
                    src={item.img_d}
                    className="h-[80%] w-full items-center justify-center object-cover"
                  />
                  <p className="text-[11px]  font-[700] pt-[5px] text-center">
                    {item.name}
                  </p>
                  <p className=" italic text-[10px]  font-[600] text-center text-[#454545]">
                    {item.price} {item.currency}
                  </p>
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

export default OnSale;
