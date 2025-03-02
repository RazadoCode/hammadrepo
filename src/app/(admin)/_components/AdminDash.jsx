"use client";
import React, { useEffect, useState } from "react";

import { IoMdClose } from "react-icons/io";

import Logo from "../../../../public/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Sales from "./Sales";
import Orders from "./Orders";
import Customers from "./Customers";
import { client } from "@/sanity/lib/client";

const AdminDash = () => {
  const [selectedComponent, setSelectedComponent] = useState("Sales");
  const [items, setItems] = useState([]);
  const [customer, setCustomers] = useState([])

  const [orderInView, setOrderInView] = useState(null);

  

  const fetchProducts = async () => {
    try {
      const products = await client.fetch(`* [_type == "order" ] | order(_updatedAt desc)
            {
              _id,
              customerName,
              address,
              city,
              phoneNumber,
              items,
              status,
              date
      }
            `);

      setItems(products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);


  const toggleOrderStatus = async (orderId, currentStatus) => {
    try {
      // Toggle the status
      const newStatus = !currentStatus;
  
      // Update the order in Sanity
      await client
        .patch(orderId) // Specify the document ID to patch
        .set({ status: newStatus }) // Set the new status
        .commit(); // Commit the changes

        setItems((prevOrders) =>
          prevOrders.map((order) =>
            order._id === orderId ? { ...order, status: newStatus } : order
          )
        );
  
      console.log('Order status updated successfully!');
    } catch (error) {
      console.error('Error updating order status:', error);
    }
  };

//   const uniqueData = items?.reduce((acc, item) => {
//     // Check if the phoneNumber already exists in the accumulator
//     if (!acc.some((obj) => obj.phoneNumber === item.phoneNumber)) {
//       acc.push(item);
//     }
//     return acc;
//   }, []);
  

// setCustomers(uniqueData)
  // console.log(items)

  // items?.forEach((item) => {
  //   // Check if the phoneNumber already exists in the customer array
  //   var isDuplicate = customer.some((i) => i?.phoneNumber === item?.phoneNumber);
  
  //   // If it's not a duplicate, add it to the customer array
  //   if (!isDuplicate) {
  //     setCustomers((prevCustomers) => [...prevCustomers, item]);
  //   }
  // });
  
  useEffect(() => {
    // Track unique phoneNumbers using a Set
    const uniquePhoneNumbers = new Set(customer.map((c) => c.phoneNumber));

    // Filter out duplicates from items
    const uniqueItems = items.filter((item) => {
      if (!uniquePhoneNumbers.has(item.phoneNumber)) {
        uniquePhoneNumbers.add(item.phoneNumber); // Add to the Set
        return true; // Keep this item
      }
      return false; // Skip this item (duplicate)
    });

    // Update state with unique items
    if (uniqueItems.length > 0) {
      setCustomers((prevCustomers) => [...prevCustomers, ...uniqueItems]);
    }
  }, [items]);
  // console.log(customer);


  const NavLinks = [
    {
      name: "Sales",
      component: <Sales items={items} setOrderInView={setOrderInView} />,
    },
    {
      name: "Orders",
      component: <Orders items={items} setOrderInView={setOrderInView} toggleOrderStatus={toggleOrderStatus} />,
    },
    {
      name: "Customers",
      component: <Customers items={customer} setOrderInView={setOrderInView} />,
    },
  ];


  return (
    <div className="w-screen min-h-screen ">
      <div className="flex justify-start items-start w-full min-h-screen">
        <aside className="w-80 h-screen p-4 shadow-xl cursor-pointer hidden sm:block">
          <Link href="#" className="flex items-center justify-center">
            <Image
              className="w-[80px] sm:w-[120px] mb-6 h-[60px] object-cover"
              src={Logo}
              alt="Logo"
              width={120}
              height={60}
            />
          </Link>
          <ul className="flex flex-col gap-2">
            {NavLinks.map((item, i) => (
              <li
                key={i}
                className="p-2 border rounded-xl"
                onClick={() => setSelectedComponent(item.name)}
              >
                {item.name}
              </li>
            ))}
            <a href={"/studio"} target="_blank">
              <li className="p-2 border rounded-xl">
                Product/Categories/Banners
              </li>
            </a>
          </ul>
        </aside>
        <main className="w-full h-full relative">
         {orderInView != null && <OrderDialogBox orderInView={orderInView} setOrderInView={setOrderInView} toggleOrderStatus={toggleOrderStatus} />}

          {/* mobile sidebar view */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-8 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/">
                    <Image
                      className="w-[80px] sm:w-[120px] h-[60px] object-cover"
                      src={Logo}
                      alt="Logo"
                      width={120}
                      height={60}
                    />
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-8">
                {/* className="text-gray-700 hover:text-gray-900" */}

                {NavLinks.map((item, i) => (
                  <SheetClose key={i} asChild>
                    <div
                      className="p-2 border-2 rounded-xl text-gray-700 hover:text-gray-900"
                      onClick={() => setSelectedComponent(item.name)}
                    >
                      {item.name}
                    </div>
                  </SheetClose>
                ))}
                <a href={"/studio"} target="_blank">
                  <SheetClose asChild>
                    <div className="p-2 border-2 rounded-xl text-gray-700 hover:text-gray-900">
                      Product/Categories/Banners
                    </div>
                  </SheetClose>
                </a>
              </nav>
            </SheetContent>
          </Sheet>

          {NavLinks.find((item) => item.name === selectedComponent)?.component}
        </main>
      </div>
    </div>
  );
};

export default AdminDash;

const OrderDialogBox = ({orderInView, setOrderInView, toggleOrderStatus}) => {
  return (
    <div className="absolute top-0 left-0 w-full z-[10] h-full bg-white p-[20px]">
      <IoMdClose
        className={`absolute top-[20px] right-[20px] cursor-pointer`}
        size={22}
        onClick={() => {
          setOrderInView(null);
        }}
      />

<h2 className="text-lg font-bold mt-6 mb-[20px]">Order Details</h2>

<p className="mt-[5px] text-[14px]"><span className="font-bold"> Customer's Name :</span> {orderInView?.customerName}</p>
<p className="mt-[5px] text-[14px]"><span className="font-bold"> Customer's Address :</span> {orderInView?.address}</p>
<p className="mt-[5px] text-[14px]"><span className="font-bold"> Customer's City :</span> {orderInView?.city}</p>
<p className="mt-[5px] text-[14px]"><span className="font-bold"> Order Status :</span> <span className={` cursor-pointer ${orderInView?.status === true ?  "text-green-600" : "text-red-600"}`} onClick={()=>{
  toggleOrderStatus(orderInView?._id, orderInView?.status)
  const updatedOrder = { ...orderInView, status: !orderInView.status };
  // Use a state setter (e.g., setOrderInView) to update the local state
  setOrderInView(updatedOrder);}}>
    {orderInView.status === true ? "Shipped" : "Not Shipped"}
  </span></p>
<p className="mt-[5px] text-[14px]"><span className="font-bold"> Items Ordered :</span> </p>
{orderInView?.items?.map((item,i)=>{
  return (
    <p className="mt-[5px] text-[14px]" key={i}>
      {item?.name +"("+item?.quantity+")"}
      </p>
  )
})}
      
    </div>
  );
};
