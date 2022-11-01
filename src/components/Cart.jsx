import React, { useState } from "react";
import { createPortal } from "react-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCart from "./ShoppingCart";

export default function Cart({
  products,
  didOpenCart,
  didCloseCart,
  openCart,
}) {
  return (
    <div className="">
      <button
        className="relative bg-gray-500 p-2 rounded-lg hover:bg-red-400 duration-200"
        onClick={() => didOpenCart()}
      >
        <ShoppingCartIcon className="cursor-pointer" />
        <div class="inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900">
          {products.length}
        </div>
      </button>
      {createPortal(
        <>
          <div
            className={`absolute z-40 duration-300 ${
              openCart ? "w-120" : "w-0 opacity-0"
            } h-screen shadow-xl top-0 right-0 bg-white text-black p-5`}
          >
            <button onClick={() => didCloseCart()}>
              <CloseIcon />
            </button>
            <ShoppingCart products={products} />
          </div>
        </>,
        document.querySelector("#cart")
      )}
    </div>
  );
}
