import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON"
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplaySearchedProducts(data);
      });
  }, []);
  const [cart, setCart] = useState([]);
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.key);
  };
  useEffect(() => {
    // console.log("local Storage Called");
    if (products.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const key in savedCart) {
        const addedProduct = products.find((product) => product.key === key);
        storedCart.push(addedProduct);
      }
      setCart(storedCart);
    }
  }, [products]);

  //for input searching
  const [displaySearchedProducts, setDisplaySearchedProducts] = useState([]);
  const handleInputField = (event) => {
    const searchedText = event.target.value;
    const matchedText = products.filter((product) =>
      product.name.toLowerCase().includes(searchedText.toLowerCase())
    );
    setDisplaySearchedProducts(matchedText);
  };

  return (
    <div>
      <div className="input-field">
        <input
          onChange={handleInputField}
          type="text"
          placeholder="Search Your Desired Product"
        />
      </div>
      <div className="shop-container">
        <div className="product-container">
          {displaySearchedProducts.map((product) => (
            <Product
              key={product.key}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
