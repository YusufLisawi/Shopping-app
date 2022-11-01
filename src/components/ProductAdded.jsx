import React, { useState } from "react";

export default function ProductAdded({ product, removeProduct, addQuantity }) {
    function handleOnChange(value){
      if (value > 0)
        addQuantity(product.id, Number(value))
    }
  return (
    <div className="flex items-end justify-between border-b border-b-2 mb-5 pb-4 whitespace-nowrap">
      <div className="flex gap-3">
        <img
          src={product.images[0]}
          alt={product.title}
          className="object-cover object-center w-30 h-30 rounded-xl border-2 border-gray-200"
        />
        <div className="flex flex-col gap-3">
          <h1 className="font-semibold text-lg">{product.title}</h1>
          <input
            type="number"
            className="w-20 p-2 pl-4 rounded-xl border-2"
            max="10"
            value={product.count}
            onChange={e => handleOnChange(e.target.value)}
          />
          <p
            className="font-medium text-red-500 cursor-pointer hover:underline"
            onClick={() => removeProduct(product.id)}
          >
            Remove
          </p>
        </div>
      </div>
      <h2 className="text-lg pb-3">$ {product.totalPrice}</h2>
    </div>
  );
}
