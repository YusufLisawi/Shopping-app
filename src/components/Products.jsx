import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Product from "./Product";

export default function Products({ category, handleOnATC }) {
	const [products, setProducts] = useState([]);
	const [loaded, setLoaded] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			setLoaded(false);
			let result;
			if (Number(category) === -1)
				result = await axios(
					"https://api.escuelajs.co/api/v1/products"
				);
			else
				result = await axios(
					`https://api.escuelajs.co/api/v1/categories/${category}/products`
				);
			setLoaded(true);
			setProducts(result.data);
		};
		fetchData();
	}, [category]);

	return (
		<>
			{loaded === false ? (
				<div className="grid place-content-center my-20">
					<img
						src={require("../loading.gif")}
						alt="loading..."
						className="w-12 duration-300"
					/>
				</div>
			) : (
				<div className="duration-500">
					<p className="text-center font-medium mb-3">
						{products.length} Products listed
					</p>
					<div className="container px-20 mx-auto grid grid-cols-3 gap-8">
						{products.map((p) => (
							<Product
								key={p.id}
								id={p.id}
								img={p.images[0]}
								title={p.title}
								description={p.description}
								price={p.price}
								handleOnATC={handleOnATC}
							/>
						))}
					</div>
				</div>
			)}
		</>
	);
}
