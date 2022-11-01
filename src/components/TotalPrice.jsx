import React from "react";

export default function TotalPrice({ products }) {
  return (
    <div className="absolute left-0 bottom-0 w-full whitespace-nowrap">
      <div className="flex flex-col">
		  <div className="text-xl bg-gray-100 px-10 py-8 flex items-center justify-between font-semibold">
        <h1>Total price</h1>
        <h1>
          $ {products.reduce((total, prd) => (total += prd.totalPrice), 0)}
        </h1>
      </div>
      <button className="text-white font-semibold bg-red-400 p-3 rounded-xl m-4">Continue to payment</button>
	  </div>
    </div>
  );
}
