import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Products from "./components/Products";
import axios from "axios";
import { Backdrop } from "./components/Backdrop";
import { createPortal } from "react-dom";

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
    const existed = shopping.filter((p) => p.id === product.id);
    const prod = {
      ...product,
      count: existed.length ? existed[0].count + 1 : 1,
    };

    if (!existed.length) {
      setShopping([prod, ...shopping]);
    } else {
      setShopping((sh) =>
        sh.map((item) => (item.id === prod.id ? prod : item))
      );
    }
  }
  return (
    <div>
      <Navbar
        shopping={shopping}
        didOpenCart={didOpenCart}
        didCloseCart={didCloseCart}
        openCart={openCart}
      />
      <Category categories={categories} handleChange={handleChange} />
      <Products category={category} handleOnATC={handleATC} />
    </div>
  );
}
