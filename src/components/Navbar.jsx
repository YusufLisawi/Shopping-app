import React from "react";
import Cart from "./Cart";

export default function Navbar({ shopping }) {
	return (
		<div className="navbar bg-black py-3 px-6 flex items-center justify-between text-white">
			<h1 className="uppercase font-bold text-2xl">ismo shop</h1>
			<div className="cart">
				<Cart articles={shopping.articles} amount={shopping.amount} />
			</div>
		</div>
	);
}
