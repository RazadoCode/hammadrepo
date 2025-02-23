import { Calendar } from 'lucide-react';
import React from 'react';
import adminIcon from '../../../../public/images/adminicon.png';
import Image from 'next/image';

const Sales = () => {
    const Data = [
        { name: "Muhammad Usman", items: "1 item", price: "1,700" },
        { name: "Ali Hamza", items: "3 item", price: "5,150" },
        { name: "Zain", items: "6 item", price: "13,900" },
        { name: "Faisal", items: "2 item", price: "2,200" },
        { name: "Faisal", items: "2 item", price: "2,200" },
    ];

    return (
        <div className="p-6">
           
            <div className="flex gap-2 items-center">
                <p className="font-semibold italic text-gray-500 text-sm">12 December 2024</p>
                <Calendar className="text-gray-500" size={14} />
            </div>

           
            <div>
                <h1 className="text-4xl font-semibold mt-2">PKR 15,000/-</h1>
            </div>

           
            <div>
                <h2 className="text-lg font-bold mt-6">Today Orders</h2>
            </div>

           
            <div className="overflow-x-auto mt-4">
                <div className="min-w-[616px]">
                   
                    <div className="bg-gray-200 font-bold text-black text-sm h-10 rounded-md grid grid-cols-[2fr_1fr_1fr_40px] px-4 items-center">
                        <h3>Customer Name</h3>
                        <h3 className="text-center">No. Items</h3>
                        <h3 className="text-center">Total Price</h3>
                        <h3 className="text-center"></h3>
                    </div>

                 
                    <div className="flex flex-col gap-2 mt-2">
                        {Data.map((item, i) => (
                            <div key={i} className="border-2 font-medium text-black text-sm h-10 rounded-md grid grid-cols-[2fr_1fr_1fr_40px] px-4 items-center">
                                <h3>{item.name}</h3>
                                <h3 className="text-center">{item.items}</h3>
                                <h3 className="text-center">PKR {item.price}</h3>
                                <Image src={adminIcon} width={15} height={15} alt="admin icon" className="mx-auto" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sales;
