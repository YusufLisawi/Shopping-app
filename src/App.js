import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Products from "./components/Products";
import axios from "axios";

export default function App() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(-1);
  const [shopping, setShopping] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  function didOpenCart() {
    setOpenCart(true);
  }
  function didCloseCart() {
    setOpenCart(false);
  }
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://api.escuelajs.co/api/v1/categories");

      setCategories(result.data);
    };

    fetchData();
  }, []);

  function handleChange(value) {
    setCategory(value);
  }

  function handleATC(product) {
    let p = { ...product };
    let existed = shopping.find((prd) => prd.id === p.id);
    let products = shopping.filter((prd) => prd.id !== p.id);
    let productToAdd;
    if (existed) productToAdd = existed;
    else productToAdd = p;

    productToAdd.count = productToAdd.count ? productToAdd.count + 1 : 1;
    productToAdd.totalPrice = productToAdd.price * productToAdd.count;
    productToAdd.dateAdded = new Date();

    console.log(productToAdd);
    setShopping([productToAdd, ...products]);
    didOpenCart();
  }
  function removeProduct(id) {
    const products = shopping.filter((p) => p.id !== id);
    setShopping(products);
  }
  function addQuantity(id, value) {
    let existed = shopping.find((prd) => prd.id === id);
    let products = shopping.filter((prd) => prd.id !== id);
    existed.count = value;
    existed.totalPrice = existed.price * existed.count;
    setShopping(
      [existed, ...products].sort((a, b) => b.dateAdded - a.dateAdded)
    );
  }
  return (
    <div>
      <Navbar
        shopping={shopping}
        removeProduct={removeProduct}
        didOpenCart={didOpenCart}
        didCloseCart={didCloseCart}
        openCart={openCart}
        addQuantity={addQuantity}
      />
      <Category categories={categories} handleChange={handleChange} />
      <Products category={category} handleOnATC={handleATC} />
    </div>
  );
}
