"use client";
import React, { useEffect, useState } from "react";
import BestSellers from "../../_components/BestSellers";
import { Button } from "@/components/ui/button";
import { ProductsData } from "../../data/data";
import { ShoppingBagIcon } from "lucide-react";
import { useParams } from "next/navigation";
import { sizes } from "../../data/data";
import { useCart } from "../../Context/CartContext";
import { client } from "@/sanity/lib/client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { urlFor } from "@/sanity/lib/image";
import { useSnapshot } from "valtio";
import { state } from "../../../../../store/store";


const ProductDetails = () => {
  const params = useParams();
  const { addToCart } = useCart();
  const id = params.id;
  const product = ProductsData[id];
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("L");
  const [item, setItem] = useState([])

  const {sale} = useSnapshot(state)


  const fetchProducts = async () => {
      try {
        const products =
          await client.fetch(`* [_type == "product" && _id == "${params.id}" ]
          {
            name,
            _id,
            images,
            price,
            onSale,
            sizes,
            description,
            inStock
    }
          `);
  
          setItem(products[0])
      } catch (error) {
        console.log(error);
      }
  
      
    };
    useEffect(()=>{
      fetchProducts()
    },[])


  return (
    <div className="">
<section className="py-8 bg-white dark:bg-gray-900 antialiased">
        <div className="w-full max-w-[1880px] px-[10px] mx-auto">
          <div className="flex flex-col md:flex-row gap-[25px]">
            <div className="shrink-0 w-full md:w-[45%]">
            <Carousel className="overflow-hidden">
          <CarouselContent>
          {item?.images?.map((item, i) => (
              <CarouselItem key={i} className="">
                <img className="w-full dark:hidden" src={urlFor(item)} alt="" />
                <img
                  className="w-full hidden dark:block"
                  src={urlFor(item)}
                  alt=""
                />
              </CarouselItem>
            ))}
          </CarouselContent>
                  <CarouselPrevious className="ml-[60px] hidden  sm:flex items-center" />
                  <CarouselNext className="mr-[60px] hidden sm:flex items-center" />
        </Carousel>
            </div>

            <div className="mt-4 md:p-[20px] sm:mt-0 lg:mt-0 cursor-pointer">
               
              <h1 className="text-[20px] font-[600] text-[#000000] sm:text-[25px] lg:text-[45px] leading-[110%] dark:text-white">
                {item?.name}
              </h1>
            
              
              <div className="mt-2 sm:items-center sm:gap-4 sm:flex">
                <p className="text-[#F60000] font-bold text-[25px] mt-[10px] sm:text-[20px] flex items-center gap-[20px] dark:text-white">
              PKR  {item?.onSale ? item?.price* ((100-sale?.percentageOff)/100) : item?.price} {item?.onSale && <span className="line-through font-bold text-[13px] italic">PKR {item?.price}</span>}
                </p>
              </div>

              {/* <hr className="my-2 md:my-2 border-gray-200 dark:border-gray-800" /> */}
<div className=" mt-5">


              <h2 className="text-[15px] font-[700] mb-2">Sizes:</h2>
              <div className="flex space-x-4">

                {item?.sizes?.map((size) => (
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
              </div>

              <div className="flex items-center mt-[25px] md:mt-[30px]">
                <button
                  className="bg-black flex items-center justify-center text-white w-[50px] h-[50px]"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <div className="border flex cursor-pointer items-center justify-center border-black w-[50px] h-[50px]">
                  {quantity}
                </div>
                <button
                  className="bg-black text-white flex items-center justify-center w-[50px] h-[50px]"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              {!item?.inStock && <p className="text-[#F60000] mt-5 font-bold text-[15px] sm:text-[15px] dark:text-white">
                   Product out of Stock
                </p>}
              <Button
                className={`w-full py-6 text-[12px] my-5 md:mt-5 rounded-none ${item?.inStock ? "cursor-pointer" : "cursor-not-allowed"}`}
                size="lg"
                onClick={() => addToCart(item, quantity, selectedSize)}
                disabled={item?.inStock ? false : true}
              >
                <ShoppingBagIcon className="w-3 h-3 mr-2" />
                Add to Cart
              </Button>

              <h2 className="text-[15px] font-[700] mt-2">Details:</h2>
              <p className="mb-6 text-[12px] font-[400]">
                {item?.description || ""}
              {/* <SanityBlockContent blocks={item?.description} /> */}
              </p>
            </div>
          </div>
        </div>
      </section>

      <BestSellers />
    </div>
  );
};

export default ProductDetails;
