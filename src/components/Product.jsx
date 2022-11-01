import React from "react";

export default function Product({
	id,
	img,
	title,
	description,
	price,
	handleOnATC,
}) {
	return (
		<div className="p-4 bg-white rounded-xl shadow-lg flex gap-4 flex-col items-center justify-center w-70">
			<img
				src={img}
				alt={title}
				className="rounded-xl shadow-xl w-full h-50 object-contain object-center"
			/>
			<h2 className="font-bold text-2xl text-center">{title}</h2>
			<p className="text-center text-sm">{description}</p>
			<h2 className="font-bold text-xl text-red-500">$ {price}</h2>
			<button
				className="cursor-pointer text-white font-semibold bg-black w-full p-2 rounded-xl active:ring-3 active:ring-gray-400"
				onClick={() => handleOnATC(price)}
			>
				Add to cart
			</button>
		</div>
	);
}
