"use client"

import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { CartProvider } from "./Context/CartContext";
import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { fetchOnSaleProducts } from "../../../actions/fetch-onsale";
import { fetchBestSellingProducts } from "../../../actions/fetch-bestselling";
import { state } from "../../../store/store";
import { fetchBanners } from "../../../actions/fetch-banners";
import { fatchCategories } from "../../../actions/fetch-categories";
import { fetchSale } from "../../../actions/fetch-sale";



// const geistMono = Inter_Mono({
//   variable: "--font-inter-mono",
//   subsets: ["latin"],
// });



export default function RootLayout({ children }) {

  const {onSaleProducts, bestSellingProducts, banners, categories, sale} = useSnapshot(state)


  useEffect(()=>{

    if(onSaleProducts.length==0 || bestSellingProducts.length==0||banners.length==0 || categories.length==0){
      fetchOnSaleProducts()
      fetchBestSellingProducts()
      fetchBanners()
      fatchCategories()
      fetchSale()
    }
  },[])

  return (
    <html lang="en">
      <head>
        <title>
          Gulnar | Premium Ladies Fashion Brand
        </title>
      </head>
      <body>
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
