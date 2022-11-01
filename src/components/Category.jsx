import React from "react";

export default function Category({ categories, handleChange }) {
	let categoriesList = [
		{ id: -1, catName: "All Products" },
		...categories.map((cat) => ({
			id: cat.id,
			catName: cat.name,
		})),
	];
	categoriesList = getUniqueList(categoriesList, "catName").sort(
		(a, b) => a.id - b.id
	);

	function getUniqueList(arr, key) {
		return [...new Map(arr.map((item) => [item[key], item])).values()];
	}

	return (
		<div className="my-4 flex justify-center">
			<select
				name="category"
				className="py-2 w-60 p-2 rounded-lg"
				onChange={(e) => handleChange(e.target.value)}
			>
				{categoriesList.map((opt) => (
					<option value={opt.id}>{opt.catName}</option>
				))}
			</select>
		</div>
	);
}
