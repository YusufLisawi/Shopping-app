import React from "react";
import { createPortal } from "react-dom";
import { Backdrop } from "./Backdrop";
import Cart from "./Cart";

export default function Navbar({
  shopping,
  didOpenCart,
  didCloseCart,
  openCart,
}) {
  return (
    <div className="navbar bg-black py-3 px-12 flex items-center justify-between text-white">
      <h1 className="uppercase font-bold text-2xl">ismo shop</h1>
      <div className="cart">
        <Cart
          products={shopping}
          didOpenCart={didOpenCart}
          didCloseCart={didCloseCart}
          openCart={openCart}
        />
        {createPortal(
          <Backdrop didCloseCart={didCloseCart} isOpen={openCart}/>,
          document.getElementById("backdrop")
        )}
      </div>
    </div>
  );
}
