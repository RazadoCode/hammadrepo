import React from 'react';
import adminIcon from '../../../../public/images/adminicon.png';
import Image from 'next/image';

const Orders = ({items, setOrderInView, toggleOrderStatus}) => {
    const Data = [
        { name: "Muhammad Usman", items: "1 item", price: "1,700", date: "12/1/2025", status: "Shipped" },
        { name: "Ali Hamza", items: "3 item", price: "5,150", date: "12/1/2025", status: "Shipped" },
        { name: "Zain", items: "6 item", price: "13,900", date: "12/1/2025", status: "Not Shipped" },
        { name: "Faisal", items: "2 item", price: "2,200", date: "12/1/2025", status: "Not Shipped" },
        { name: "Faisal", items: "2 item", price: "2,200", date: "12/1/2025", status: "Shipped" },
    ];

    function calculateTotal(order) {
        let total = 0;
        order?.items?.forEach(item => {
            total += item?.amountoneitem * item?.quantity;
        });
        return total;
    }


    console.log(items)
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
                    {items?.map((item, i) => (
                            <div key={i} className='border-2 font-medium text-black text-[14px] h-12 rounded-md grid grid-cols-[2fr_1fr_1fr_1fr_1fr_40px] px-4 items-center'>
                                <h3>{item?.customerName}</h3>
                                <h3 className='text-center'>{item?.items?.length}</h3>
                                <h3 className='text-center'>PKR {calculateTotal(item)}</h3>
                                <h3 className='text-center'>{item?.date}</h3>
                                <h3 onClick={()=>{
  toggleOrderStatus(item?._id, item?.status)
}} className={`text-center cursor-pointer ${item.status === true ? "text-green-600" : "text-red-600"}`}>
                                    {item.status === true ? "Shipped" : "Not Shipped"}
                                </h3>
                                <Image src={adminIcon} width={15} height={15} alt='admin icon' className='mx-auto' onClick={()=>setOrderInView(item)} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;
