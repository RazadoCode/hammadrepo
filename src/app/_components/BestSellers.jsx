import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import OnSale from "./OnSale";

const BestSellers = () => {
  const BestSellers = [
    {
      name: "Unstitched Bronze Embroidered Khaddar 3 Piece",
      price: 15000,
      id: 1,
      currency: "PKR",
      category: "khaddar",
      sale: false,
      img_m: "/images/Rectangle_m.png",
      img_d: "/images/Rectangle_d.png",
    },
    {
      name: "Unstitched Bronze Embroidered Khaddar 3 Piece",
      price: 16000,
      id: 2,
      currency: "PKR",
      category: "khaddar",
      sale: false,
      img_m: "/images/Rectangle_m.png",
      img_d: "/images/Rectangle_d.png",
    },
    {
      name: "Unstitched Bronze Embroidered Khaddar 3 Piece",
      price: 19000,
      id: 3,
      currency: "PKR",
      category: "khaddar",
      sale: false,
      img_m: "/images/Rectangle_m.png",
      img_d: "/images/Rectangle_d.png",
    },
    {
      name: "Unstitched Bronze Embroidered Khaddar 3 Piece",
      price: 17000,
      currency: "PKR",
      id: 4,
      category: "khaddar",
      sale: false,
      img_m: "/images/Rectangle_m.png",
      img_d: "/images/Rectangle_d.png",
    },
    {
      name: "Unstitched Bronze Embroidered Khaddar 3 Piece",
      price: 17000,
      currency: "PKR",
      id: 5,
      category: "khaddar",
      sale: false,
      img_m: "/images/Rectangle_m.png",
      img_d: "/images/Rectangle_d.png",
    },
    {
      name: "Unstitched Bronze Embroidered Khaddar 3 Piece",
      price: 17000,
      currency: "PKR",
      id: 6,
      category: "khaddar",
      sale: false,
      img_m: "/images/Rectangle_m.png",
      img_d: "/images/Rectangle_d.png",
    },
    {
      name: "Unstitched Bronze Embroidered Khaddar 3 Piece",
      price: 17000,
      currency: "PKR",
      id: 7,
      category: "khaddar",
      sale: false,
      img_m: "/images/Rectangle_m.png",
      img_d: "/images/Rectangle_d.png",
    },
    {
      name: "Unstitched Bronze Embroidered Khaddar 3 Piece",
      price: 17000,
      currency: "PKR",
      id: 8,
      category: "khaddar",
      sale: false,
      img_m: "/images/Rectangle_m.png",
      img_d: "/images/Rectangle_d.png",
    },
    {
      name: "Unstitched Bronze Embroidered Khaddar 3 Piece",
      price: 17000,
      currency: "PKR",
      id: 9,
      category: "khaddar",
      sale: false,
      img_m: "/images/Rectangle_m.png",
      img_d: "/images/Rectangle_d.png",
    },
    {
      name: "Unstitched Bronze Embroidered Khaddar 3 Piece",
      price: 17000,
      currency: "PKR",
      id: 10,
      category: "khaddar",
      sale: false,
      img_m: "/images/Rectangle_m.png",
      img_d: "/images/Rectangle_d.png",
    },
  ];

  return (
    <div className="w-full  sm:px-[32px] pl-[16px] ">
      <div className="text-[15px]  sm:text-[20px] font-[700] pt-[20px] pb-[20px] ">
        <h1>Best Sellers</h1>
      </div>

      <div className="pb-[20px]">
          <Carousel>
            <CarouselContent className="w-[227px] pl-2 h-[332px]">
              {
                BestSellers.map((item,i) => (
                    <CarouselItem className=" " key={i}>
                      <Link href={`/products/${item.id}`}>
                      <img src={item.img_d} className="h-[80%] w-full items-center justify-center object-cover"/>
                      <p className="text-[11px] font-[700] pt-[5px] text-center">{item.name}</p>
                  <p className=" italic text-[10px] font-[600] text-center text-[#454545]">
                    {item.price} {item.currency}
                  </p>
                      </Link>
                    </CarouselItem>
                ))
              }
            </CarouselContent>
            <CarouselPrevious className="ml-[60px] hidden  sm:flex items-center" />
          <CarouselNext className="mr-[60px] hidden  sm:flex items-center" />
          </Carousel>
      </div>


    </div>
  );
};

export default BestSellers;
