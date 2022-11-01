import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Products from "./components/Products";
import axios from "axios";

export default function App() {
	const [categories, setCategories] = useState([]);
	const [category, setCategory] = useState(-1);
	const [shopping, setShopping] = useState({ articles: 0, amount: 0 });

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(
				"https://api.escuelajs.co/api/v1/categories"
			);

			setCategories(result.data);
		};

		fetchData();
	}, []);

	function handleChange(value) {
		setCategory(value);
	}
	function handleATC(price) {
		setShopping({
			articles: shopping.articles + 1,
			amount: shopping.amount + price,
		});
	}
	return (
		<div>
			<Navbar shopping={shopping} />
			<Category categories={categories} handleChange={handleChange} />
			<Products category={category} handleOnATC={handleATC} />
		</div>
	);
}
