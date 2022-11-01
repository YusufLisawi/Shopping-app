import React from "react";

export const Backdrop = ({ isOpen, didCloseCart }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-screen z-20 bg-black opacity-50"
          onClick={didCloseCart}
        ></div>
      )}
    </>
  );
};
