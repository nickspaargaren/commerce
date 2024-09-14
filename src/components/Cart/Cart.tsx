import React from "react";
import { useCart } from "./useCart";

const Cart = (): React.ReactElement => {
  const amount = useCart((state) => state.getAmount());

  return <div>Amount: {amount}</div>;
};

export default Cart;
