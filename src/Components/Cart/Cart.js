import React from "react";

const Cart = (props) => {
  const { cart } = props;
  const totalReduce = (previous, current) => previous + current.price;
  const total = cart.reduce(totalReduce, 0);
  // let total = 0;
  //   for (const product of props.cart) {
  //     total = total + product.price;
  //   }
  return (
    <div>
      <h1>Order Summary</h1>
      <h3>Items Orderd: {props.cart.length}</h3>
      <h3>Total:$ {total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
