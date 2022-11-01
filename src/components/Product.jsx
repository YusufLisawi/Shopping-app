import React from "react";

export default function Product({
	product,
	handleOnATC,
}) {

	return (
		<div className="relative p-4 bg-white rounded-xl shadow-lg flex gap-4 flex-col items-center justify-between w-70">
			<img
				src={product.images[0]}
				alt={product.title}
				className="rounded-xl shadow-xl w-full h-50 object-contain object-center"
			/>
			<h2 className="font-bold text-2xl text-center">{product.title}</h2>
			<p className="text-center text-sm">{product.description}</p>
			<h2 className="font-bold text-xl text-red-500">$ {product.price}</h2>
			<button
				className="cursor-pointer text-white font-semibold bg-black w-full p-2 rounded-xl hover:bg-red-400 duration-100 focus:ring-4 focus:ring-gray-300"
				onClick={() => handleOnATC(product)}
			>
				Add to cart
			</button>
		</div>
	);
}
