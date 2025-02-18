import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Collection = () => {
  const CollectionImages = [
    { src: "/images/collection1.png", alt: "collection1", name: "Khaddar" },
    { src: "/images/collection2.png", alt: "collection2", name: "Lawn" },
    { src: "/images/collection3.png", alt: "collection3", name: "Linnen" },
    { src: "/images/collection4.png", alt: "collection4", name: "Fancy" },
  ];

  return (
    <div className="w-full   ">
      <div className="text-[15px] sm:px-[32px] px-[16px] sm:text-[20px] font-[700] pt-[20px] pb-[20px] ">
        <h1>Collections</h1>
      </div>

      <div className="hidden sm:flex items-center justify-center gap-5 pb-[20px] pt-[20px] ">
        {CollectionImages.map((item, i) => (
          <div key={i} className="flex flex-col">
            <img src={item.src} className="w-full" />
            <p className="flex text-center items-center justify-center pt-[6px] font-[700]">
              {item.name}
            </p>
          </div>
        ))}
      </div>

      <div className="sm:hidden block pt-[20px] pb-[20px] ">
        <Carousel className="overflow-hidden">
          <CarouselContent>
            {CollectionImages.map((item, i) => (
              <CarouselItem key={i} className="basis-[50%]">
                <div className="flex-col flex justify-center text-center">
                  <img src={item.src} alt={item.alt} />
                  <p className="font-[700] pt-[6px]">{item.name}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Collection;
