'use client'
import React, { useState } from 'react';
import Logo from '../../../../public/images/logo.png';
import Link from 'next/link';
import Image from 'next/image';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import Sales from './Sales';
import Orders from './Orders';
import Customers from './Customers';

const AdminDash = () => {

  const [selectedComponent, setSelectedComponent] = useState("Sales");

  const NavLinks = [
    { name: "Sales", component: <Sales /> },
    { name: "Orders", component: <Orders /> },
    { name: "Customers", component: <Customers /> },
    { name: "Product/Categories/Banners", component: <Customers /> },
   
  ];

  return (
    <div className='w-screen min-h-screen '>
      <div className='flex justify-start items-start w-full min-h-screen'>
          <aside className='w-80 h-screen p-4 shadow-xl cursor-pointer hidden sm:block'>
          <Link href="#" className='flex items-center justify-center'>
                  <Image
                    className="w-[80px] sm:w-[120px] mb-6 h-[60px] object-cover"
                    src={Logo}
                    alt="Logo"
                    width={120}
                    height={60}
                  />
                </Link>
            <ul className='flex flex-col gap-2'>

            {
              NavLinks.map((item,i) => (
                <li key={i} className='p-2 border rounded-xl'
                onClick={() => setSelectedComponent(item.name)}
                >{item.name}</li>
              ))
            }
             
            </ul>
          </aside>
          <main className='w-full h-full'>
         
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
                <Link href="#">
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
             
            </nav>
          </SheetContent>
        </Sheet>
        
        {NavLinks.find((item) => item.name === selectedComponent)?.component}
          </main>
      </div>
    </div>
  )
}

export default AdminDash