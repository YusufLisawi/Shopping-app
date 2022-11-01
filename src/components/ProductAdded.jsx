import React, { useState } from "react";

export default function ProductAdded({ img, title, price, count }) {
  // const [quantity, setQuantity] = useState(count);

  // function handleOnChange(value){
  //   if(value > 0)
  //     setQuantity(value)
  // }
  return (
    <div className="flex items-start justify-between border-b border-b-2 mb-5 pb-4">
      <div className="flex gap-3">
        <img
          src={img}
          alt={title}
          className="object-cover object-center w-30 h-30 rounded-xl border-2 border-gray-200"
        />
        <div className="flex flex-col gap-3">
          <h1 className="font-semibold text-lg">{title}</h1>
          <input type="number" className="w-20 " max="10" value={count} />
          <p className="font-medium text-red-500 cursor-pointer hover:underline">
            Remove
          </p>
        </div>
      </div>
      <h2 className="text-lg">$ {price}</h2>
    </div>
  );
}
