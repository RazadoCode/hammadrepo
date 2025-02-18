import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


const Footer = () => {

  const FooterText = "All rights are reserved store_name 2025";

  const Services = [
    {
      img: "/images/footer_1.png",
      alt: "Customer Support",
      name: "Customer Support",
      detail: "Mon-Sat 9AM-6PM",
    },
    {
      img: "/images/footer_2.png",
      alt: "Easy Exchange",
      name: "Easy Exchange",
      detail: "14 Days Easy Exchange",
    },
    {
      img: "/images/footer_3.png",
      alt: "Fast Delivery",
      name: "Fast Delivery",
      detail: "1-5 days Fast shipping",
    },
    {
      img: "/images/footer_4.png",
      alt: "Shipping",
      name: "Shipping",
      detail: "All around Pakistan",
    },
  ];

  return (
    <div className="pt-[20px] ">
      {/* // PC Footer Services Component */}
      <div className="py-[20px] md:flex  items-center justify-center gap-[55px] hidden ">
        {Services.map((item, i) => (
          <div className="flex items-center justify-center pb-5" key={i}>
            <img className="md:w-[48px] lg:w-[68px] " src={item.img} alt={item.alt} />
            <div className="pl-2">
              <p className="lg:text-[15px] md:text-[12px]  font-[600]">{item.name}</p>
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
            <p className="text-[13px] lg:text-[15px] font-[700]">Become our Customer</p>
           <div className="flex flex-col gap-[10px]">
           <Input type="email" placeholder="Email" className="w-[318px] rounded-none"/>
           <Button variant="outline" className="text-black w-[84px] rounded-none">Button</Button>
           </div>
          <p className="text-[11px] lg:text=[12px] font-[400] text-[#FFFFFF]">Subscribe us to get all latest news and new launch updates.</p>
          </div>


          <div className="flex md:flex-row flex-col md:gap-[60px] gap-[30px] md:pt-0 pt-[20px] ">
            <div className="flex flex-col gap-[10px]">
              <p className="text-[15px] font-[600]">Social Media</p>
              <ul className="text-[12px] font-[400]">Instagram</ul>
              <ul className="text-[12px] font-[400]">Facebook</ul>
              <ul className="text-[12px] font-[400]">Whatsapp</ul>
              <ul className="text-[12px] font-[400]">Tiktok</ul>
            </div>

            <div className="flex flex-col gap-[10px]">
            <p className="text-[15px] font-[600]">Pages</p>
              <ul className="text-[12px] font-[400]">Return Policy</ul>
              <ul className="text-[12px] font-[400]">Shipping Policy</ul>
              <ul className="text-[12px] font-[400]">Privacy Policy</ul>
            </div>

            <div className="flex flex-col gap-[10px]">
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
