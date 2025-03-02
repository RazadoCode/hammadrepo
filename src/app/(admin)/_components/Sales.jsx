import { Calendar } from 'lucide-react';
import React, { useState } from 'react';
import adminIcon from '../../../../public/images/adminicon.png';
import Image from 'next/image';
import { useSnapshot } from 'valtio';
import { state } from '../../../../store/store';

const Sales = ({items, setOrderInView}) => {

    const currentDate = new Date();

    const [dateEntryShower, setDateEntryShower] = useState(false)

    const {sale}= useSnapshot(state)

    // Extract day, month, and year
    const day = String(currentDate.getDate()).padStart(2, "0"); // Ensure two digits
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = currentDate.getFullYear();
  
    // Format the date as dd-mm-yyyy
    const fmdate = `${year}-${month}-${day}`;
    const [formattedDate, setFormattedDate] = useState(fmdate)


    // const listers = items?.filter(item=>item?.date ==formattedDate)
    // console.log(listers)

    // const subtotal = listers.reduce(
    //     (acc, item) => {
    //       if (item?.onSale && sale?.percentageOff) {
    //         const discountedPrice = item.price * ((100 - sale.percentageOff) / 100);
    //         return acc + discountedPrice * item.quantity;
    //       } else {
    //         return acc + item.price * item.quantity;
    //       }
    //     },
    //     0
    //   );

    console.log(formattedDate)
    const listers = items?.filter(item => item?.date === formattedDate);
console.log(listers);

const subtotal = listers.reduce((acc, lister) => {
  // Check if lister.items exists and is an array
    // Iterate over each item in lister.items
    lister.items.forEach(item => {
      // Ensure item.price and item.quantity are valid numbers
      const price = Number(item?.amountoneitem) || 0;
      const quantity = Number(item?.quantity) || 0;

      // Calculate the total for this item
      if (lister?.onSale && sale?.percentageOff) {
        const discountedPrice = price * ((100 - sale.percentageOff) / 100);
        acc += discountedPrice * quantity;
      } else {
        acc += price * quantity;
      }
    });
  return acc;
}, 0);

    const Data = [
        { name: "Muhammad Usman", items: "1 item", price: "1,700" },
        { name: "Ali Hamza", items: "3 item", price: "5,150" },
        { name: "Zain", items: "6 item", price: "13,900" },
        { name: "Faisal", items: "2 item", price: "2,200" },
        { name: "Faisal", items: "2 item", price: "2,200" },
    ];

    // items?.forEach((item)=>item.items.length*item.items.amountoneitem)

    // console.log(items.map(item=>item.items.map((obj,i)=>obj)),"mapping")
    function calculateTotal(order) {
        let total = 0;
        order?.items?.forEach(item => {
            total += item?.amountoneitem * item?.quantity;
        });
        return total;
    }

    return (
        <div className="p-6">
           
            <div className="flex gap-2 items-center">
                <input type="date" value={formattedDate} onChange={(e)=>setFormattedDate(e.target.value)} className='size-[0.2]' />
            </div>

           
            <div>
                <h1 className="text-4xl font-semibold mt-2">PKR {subtotal}/-</h1>
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
                        {items?.map((item, i) => item?.date==formattedDate&& (
                            <div key={i} className="border-2 font-medium text-black text-sm h-10 rounded-md grid grid-cols-[2fr_1fr_1fr_40px] px-4 items-center">
                                <h3>{item?.customerName}</h3>
                                <h3 className="text-center">{item?.items?.length}</h3>
                                <h3 className="text-center">PKR {calculateTotal(item)}</h3>
                                <Image src={adminIcon} width={15} height={15} alt="admin icon" className="mx-auto" onClick={()=>{
                                    setOrderInView(item)
                                }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sales;

