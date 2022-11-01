import React, { useState } from "react";
import ProductAdded from "./ProductAdded";

export default function ShoppingCart({ products, removeProduct, addQuantity }) {
  return (
    <div>
      <div>
        <h1 className="font-bold text-2xl text-center my-8 whitespace-nowrap">
        Shopping cart
      </h1>
      <div className="products_Added mx-5">
        {products.map((p) => (
          <ProductAdded
            key={p.id}
            product={p}
            removeProduct={removeProduct}
            addQuantity={addQuantity}
          />
        ))}
      </div>
      </div>
      <div></div>
    </div>
  );
}
