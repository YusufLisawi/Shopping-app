import React from "react";

export default function Cart({ articles, amount }) {
	return (
		<div className="bg-red-400 p-3 rounded-xl">
			<p className="font-semibold">
				Nombre article: {articles} - Montant total: ${amount}
			</p>
		</div>
	);
}
