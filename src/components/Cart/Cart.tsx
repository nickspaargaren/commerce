import React from "react";
import { useCart } from "./useCart";

const Cart = (): React.ReactElement => {
  const cart = useCart((state) => state.amount);

  return <div>Amount: {cart}</div>;
};

export default Cart;
