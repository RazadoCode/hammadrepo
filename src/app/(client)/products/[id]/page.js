"use client";
import React, { useState } from "react";
import BestSellers from "../../_components/BestSellers";
import { Button } from "@/components/ui/button";
import { ProductsData } from "../../data/data";
import { ShoppingBagIcon } from "lucide-react";
import { useParams } from "next/navigation";
import { sizes } from "../../data/data";
import { useCart } from "../../Context/CartContext";


const ProductDetails = () => {
  const params = useParams();
  const { addToCart } = useCart();
  const id = params.id;
  const product = ProductsData[id];
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("L");

  return (
    <div className="">
      <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div className="sm:grid sm:grid-cols-2 sm:gap-3 md:gap-1 lg:gap-0 ">
            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
              <img className="w-full dark:hidden" src={product.img_d} alt="" />
              <img
                className="w-full hidden dark:block"
                src={product.img_d}
                alt=""
              />
            </div>

            <div className="mt-4 sm:mt-0 lg:mt-0 cursor-pointer">
              <h1 className="text-[20px] font-[600] text-[#000000] sm:text-[20px] lg:text-[25px] dark:text-white">
                {product.eachName}
              </h1>
              <h1 className="text-[20px] font-[600] text-[#000000] sm:text-[20px] lg:text-[25px] dark:text-white">
                {product.subname}
              </h1>
              <div className="mt-2 sm:items-center sm:gap-4 sm:flex">
                <p className="text-[#F60000] font-extrabold text-[15px] sm:text-[15px] dark:text-white">
                  {product.price} {product.currency}
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

              <div className="flex items-center mt-[30px] md:mt-[50px]">
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
              <Button
                className="w-full py-6 text-[12px] my-5 md:mt-5 rounded-none"
                size="lg"
                onClick={() => addToCart(product, quantity, selectedSize)}
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

export default ProductDetails;
