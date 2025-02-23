import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Services } from "../data/data";

const Footer = () => {
  const FooterText = "All rights are reserved store_name 2025";

  return (
    <div className="pt-[20px]  w-full sticky">
      {/* // PC Footer Services Component */}
      <div className="py-[20px] md:flex  items-center justify-center cursor-pointer gap-[55px] hidden ">
        {Services.map((item, i) => (
          <div className="flex items-center justify-center pb-5" key={i}>
            <img
              className="md:w-[48px] lg:w-[68px] "
              src={item.img}
              alt={item.alt}
            />
            <div className="pl-2">
              <p className="lg:text-[15px] md:text-[12px]  font-[600]">
                {item.name}
              </p>
              <p className="lg:text-[12px] md:text-[12px] font-[400] text-[#868686]">
                {item.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* // Mobile Footer Services Component */}
      <div className="py-[20px] flex flex-col items-center justify-center md:hidden ">
        {Services.map((item, i) => (
          <div
            className="flex flex-col items-center justify-center pb-5"
            key={i}
          >
            <img className="w-[68px]" src={item.img} alt={item.alt} />
            <p className="text-[15px] font-[600]">{item.name}</p>
            <p className="text-[12px] font-[400] text-[#868686]">
              {item.detail}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-between md:flex-row flex-col   w-full text-white bg-black h-full md:px-[32px] px-[20px] py-[25px]">
        <div className="flex flex-col gap-[15px]">
          <p className="text-[13px] lg:text-[15px] font-[700] cursor-pointer">
            Become our Customer
          </p>
          <div className="flex flex-col gap-[10px]">
            <Input
              type="email"
              placeholder="Email"
              className="max-w-[318px] rounded-none"
            />
            <Button
              variant="outline"
              className="text-black w-[84px] rounded-none"
            >
              Button
            </Button>
          </div>
          <p className="text-[11px] lg:text=[12px] font-[400] cursor-pointer text-[#FFFFFF]">
            Subscribe us to get all latest news and new launch updates.
          </p>
        </div>

        <div className="flex md:flex-row flex-col md:gap-[60px] gap-[30px] md:pt-0 pt-[20px] ">
          <div className="flex flex-col gap-[10px] cursor-pointer">
            <p className="text-[15px] font-[600]">Social Media</p>
            <ul className="text-[12px] font-[400]">Instagram</ul>
            <ul className="text-[12px] font-[400]">Facebook</ul>
            <ul className="text-[12px] font-[400]">Whatsapp</ul>
            <ul className="text-[12px] font-[400]">Tiktok</ul>
          </div>

          <div className="flex flex-col gap-[10px] cursor-pointer">
            <p className="text-[15px] font-[600]">Pages</p>
            <ul className="text-[12px] font-[400]">Return Policy</ul>
            <ul className="text-[12px] font-[400]">Shipping Policy</ul>
            <ul className="text-[12px] font-[400]">Privacy Policy</ul>
          </div>

          <div className="flex flex-col gap-[10px] cursor-pointer">
            <p className="text-[15px] font-[600]">Read</p>
            <ul className="text-[12px] font-[400]">About Us</ul>
            <ul className="text-[12px] font-[400]">Contact</ul>
          </div>
        </div>
      </div>

      <div className="#F5F5F5 flex items-center justify-center text-[11px] text-black font-[400] h-[35px]">
        <p>{FooterText}</p>
      </div>
    </div>
  );
};

export default Footer;
