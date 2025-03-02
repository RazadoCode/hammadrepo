import { Button } from '@/components/ui/button';
import React from 'react';

const Customers = ({items}) => {
    const Data = [
        { name: "Muhammad Usman", number: "0347345342", email: "ahmed123@gmail.com" },
        { name: "Ali Hamza", number: "0347345342", email: "ahmed123@gmail.com" },
        { name: "Zain", number: "0347345342", email: "ahmed123@gmail.com" },
        { name: "Faisal", number: "0347345342", email: "ahmed123@gmail.com" },
        { name: "Faisal", number: "0347345342", email: "ahmed123@gmail.com" },
    ];



    return (
        <div className="p-6">
          
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-bold">Customers</h1>
            </div>

         
            <div className="overflow-x-auto mt-4">
                <div className="min-w-[600px]">
                   
                    <div className="bg-gray-200 font-bold text-black text-sm h-12 rounded-md grid grid-cols-[2fr_1fr_2fr_40px] px-4 items-center">
                        <h3>Customer Name</h3>
                        <h3 className="text-center">Number</h3>
                        <h3 className="text-center">City</h3>
                        <h3 className="text-center">#</h3>
                    </div>

                 
                    <div className="flex flex-col gap-2 mt-2">
                        {items.map((item, i) => (
                            <div key={i} className="border-2 font-medium text-black text-sm h-12 rounded-md grid grid-cols-[2fr_1fr_2fr_40px] px-4 items-center">
                                <h3>{item.customerName}</h3>
                                <h3 className="text-center">{item?.phoneNumber}</h3>
                                <h3 className="text-center">{item?.city}</h3>
                                <h3 className="text-center">{i + 1}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customers;
