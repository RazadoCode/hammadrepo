import React from 'react';
import adminIcon from '../../../../public/images/adminicon.png';
import Image from 'next/image';

const Orders = () => {
    const Data = [
        { name: "Muhammad Usman", items: "1 item", price: "1,700", date: "12/1/2025", status: "Shipped" },
        { name: "Ali Hamza", items: "3 item", price: "5,150", date: "12/1/2025", status: "Shipped" },
        { name: "Zain", items: "6 item", price: "13,900", date: "12/1/2025", status: "Not Shipped" },
        { name: "Faisal", items: "2 item", price: "2,200", date: "12/1/2025", status: "Not Shipped" },
        { name: "Faisal", items: "2 item", price: "2,200", date: "12/1/2025", status: "Shipped" },
    ];

    return (
        <div className='p-6'>
            <h1 className='text-[20px] font-bold mt-4'>Orders</h1>

           
            <div className='overflow-x-auto mt-4'>
                <div className='min-w-[800px]'>
                   
                    <div className='bg-gray-200 font-bold text-black text-[14px] h-12 rounded-md grid grid-cols-[2fr_1fr_1fr_1fr_1fr_40px] px-4 items-center'>
                        <h3>Customer Name</h3>
                        <h3 className='text-center'>No. Items</h3>
                        <h3 className='text-center'>Total Price</h3>
                        <h3 className='text-center'>Date</h3>
                        <h3 className='text-center'>Status</h3>
                        <h3 className='text-center'></h3>
                    </div>

                    <div className='flex flex-col gap-2 mt-2'>
                        {Data.map((item, i) => (
                            <div key={i} className='border-2 font-medium text-black text-[14px] h-12 rounded-md grid grid-cols-[2fr_1fr_1fr_1fr_1fr_40px] px-4 items-center'>
                                <h3>{item.name}</h3>
                                <h3 className='text-center'>{item.items}</h3>
                                <h3 className='text-center'>PKR {item.price}</h3>
                                <h3 className='text-center'>{item.date}</h3>
                                <h3 className={`text-center ${item.status === "Shipped" ? "text-green-600" : "text-red-600"}`}>
                                    {item.status}
                                </h3>
                                <Image src={adminIcon} width={15} height={15} alt='admin icon' className='mx-auto'/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;
