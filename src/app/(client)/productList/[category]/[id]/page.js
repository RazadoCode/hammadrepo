"use client";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { fancyData } from "@/app/(client)/data/data";
import { lawnData } from "@/app/(client)/data/data";
import { linnenData } from "@/app/(client)/data/data";
import { khaddarData } from "@/app/(client)/data/data";
import { ProductsData } from "@/app/(client)/data/data";
import { ShoppingBagIcon } from "lucide-react";
import { useParams } from "next/navigation";
import BestSellers from "@/app/(client)/_components/BestSellers";

const CategoryProductDetails = () => {
    let EachCategoryData;
  const params = useParams();
  const [counter, setCounter] = useState(0);
  if (counter === -1) {
    setCounter(0);
  }

  const sizes = ["S", "M", "L", "XL"];
  const [selectedSize, setSelectedSize] = useState("L");

  const id = params.id;
  const category = params.category;
  if(category === 'khaddar'){
    EachCategoryData = khaddarData;
  }else if(category === 'lawn'){
    EachCategoryData = lawnData;
  }else if(category === 'linnen'){
    EachCategoryData = linnenData;
  }else{
    EachCategoryData = fancyData;
  };


  
  return (
    <div className="">
      <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div className="sm:grid sm:grid-cols-2 sm:gap-3 md:gap-1 lg:gap-0 ">
            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
              <img
                className="w-full dark:hidden"
                src={EachCategoryData[id].img_d}
                alt=""
              />
              <img
                className="w-full hidden dark:block"
                src={EachCategoryData[id].img_d}
                alt=""
              />
            </div>

            <div className="mt-4 sm:mt-0 lg:mt-0">
              <h1 className="text-[20px] font-[600] text-[#000000] sm:text-[20px] lg:text-[25px] dark:text-white">
                {EachCategoryData[id].eachName}
              </h1>
              <h1 className="text-[20px] font-[600] text-[#000000] sm:text-[20px] lg:text-[25px] dark:text-white">
                {EachCategoryData[id].subname}
              </h1>
              <div className="mt-2 sm:items-center sm:gap-4 sm:flex">
                <p className="text-[#F60000] font-extrabold text-[15px] sm:text-[15px] dark:text-white">
                  {EachCategoryData[id].price} {EachCategoryData[id].currency}
                </p>
              </div>

              <hr className="my-2 md:my-2 border-gray-200 dark:border-gray-800" />

              <div className="flex space-x-4">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-[25px] h-[25px] flex items-center justify-center rounded-full border border-1 text-[10px] font-medium transition-all
            ${
              selectedSize === size
                ? "bg-black text-white border-black"
                : "bg-white text-black border-black hover:bg-gray-200"
            }
          `}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {/* <div className="flex gap-2 my-2 text-[10px] font-[300]">
                <div className="w-[25px] h-[25px] cursor-pointer flex items-center justify-center rounded-full border border-black">
                  S
                </div>
                <div className="w-[25px] h-[25px] flex cursor-pointer items-center justify-center rounded-full border border-black">
                  M
                </div>
                <div className="w-[25px] h-[25px] flex items-center cursor-pointer justify-center rounded-full border border-black">
                  L
                </div>
                <div className="w-[25px] h-[25px] flex items-center cursor-pointer justify-center rounded-full border border-black">
                  XL
                </div>
              </div> */}

              <div className="flex items-center mt-[30px] md:mt-[50px]">
                <div
                  className="bg-black flex items-center justify-center text-white w-[50px] h-[50px]"
                  onClick={() => setCounter(counter - 1)}
                >
                  -
                </div>
                <div className="border flex items-center justify-center border-black w-[50px] h-[50px]">
                  {counter}
                </div>
                <div
                  className="bg-black text-white flex items-center justify-center w-[50px] h-[50px]"
                  onClick={() => setCounter(counter + 1)}
                >
                  +
                </div>
              </div>

              {/* Add to Cart Button */}
              <Button
                className="w-full py-6 text-[12px] my-5 md:mt-5 rounded-none"
                size="lg"
              >
                <ShoppingBagIcon className="w-3 h-3 mr-2" />
                Add to Cart
              </Button>

              <p className="text-[12px] font-[700] mt-2">Details:</p>
              <p className="mb-6 text-[12px] font-[400]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BestSellers />
    </div>
  );
};

export default  CategoryProductDetails;
