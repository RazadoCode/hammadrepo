"use client";
import React from "react";
import { khaddarData } from "../data/data";
import { useParams } from "next/navigation";
import { fancyData } from "../data/data";
import { lawnData } from "../data/data";
import { linnenData } from "../data/data";
import Link from "next/link";

const ProductPage = () => {
  let EachProductData;
  const params = useParams();
  const category = params.category;
  if (category === "khaddar") {
    EachProductData = khaddarData;
  } else if (category === "linnen") {
    EachProductData = linnenData;
  } else if (category === "fancy") {
    EachProductData = fancyData;
  } else {
    EachProductData = lawnData;
  }

  return (
    <div className="w-full h-full flex ">
      <div className="w-full h-full  overflow-hidden px-[16px] py-[20px] sm:px-[32px]">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-x-5 lg:gap-y-9 ">
          {EachProductData.map((item, i) => (
            <div className="w-full h-full" key={i}>
              <Link href={`/productList/${category}/${item.id}`}>
                <div className="w-full h-[75%] sm:h-[85%] xl:h-[90%]">
                  <img
                    src={item.img_d}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                  <p className="text-[11px] md:text-[13px] font-[700] pt-[5px] text-center">
                    {item.name}
                  </p>
                  <p className=" italic text-[10px] md:text-[11px] font-[600] text-center text-[#454545]">
                    {item.price} {item.currency}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
