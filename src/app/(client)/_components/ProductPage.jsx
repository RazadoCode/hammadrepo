"use client";
import React, { useEffect, useState } from "react";
import { khaddarData } from "../data/data";
import { useParams } from "next/navigation";
import { fancyData } from "../data/data";
import { lawnData } from "../data/data";
import { linnenData } from "../data/data";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { useSnapshot } from "valtio";
import { state } from "../../../../store/store";


const ProductPage = () => {
  const params = useParams();
  const [items, setitems] = useState([])

  const {sale}= useSnapshot(state)
  
  
  
  const fetchProducts = async () => {
    try {
      const products =
        await client.fetch(`* [_type == "product" && category._ref == "${params.category}" ]
        {
          name,
          _id,
          category,
          images,
          price,
          onSale
  }
        `);

        setitems(products)
    } catch (error) {
      console.log(error);
    }

    
  };
  useEffect(()=>{
    fetchProducts()
  },[])
  
  return (
    <div className="w-full h-full flex ">
      <title>
        Categories | Gulnar
      </title>
      <div className="w-full h-full  overflow-hidden px-[16px] py-[20px] sm:px-[32px]">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-x-5 lg:gap-y-9 ">
          {items?.map((item, i) => (
            <div className="w-full h-full" key={i}>
              <Link href={`/products/${item?._id}`}>
                <div className="w-full">
                  <img
                    src={urlFor(item?.images[0])}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                  <p className="text-[11px] md:text-[13px] font-[700] pt-[5px] text-center">
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
