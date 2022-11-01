import React from "react";
import ProductAdded from "./ProductAdded";

export default function ShoppingCart({ products }) {
  return (
    <div>
      <h1 className="font-bold text-2xl text-center my-8 whitespace-nowrap">
        Shopping cart
      </h1>
      <div className="products_Added mx-5">
        {products.map((p) => (
          <ProductAdded
            key={p.id}
            img={p.images[0]}
            title={p.title}
            count={p.count}
            price={p.price}
          />
        ))}
      </div>
    </div>
  );
}
