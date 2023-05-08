import React from "react";
//import context
import { CartContext } from "../context/CartContext";

const Qty = ({ item }) => {
  const { updateCart } =React.useContext(CartContext);
  // const { handleSelector } =React.useContext(CartContext);

  return (
    <div className="flex gap-x-6 items-center text-primary">
      {/* {item.amount < 10 ? (
        <select
        value={item.amount}
        onChange={(e)=>handleSelector(e,item.id)}
        className="p-2 rounded-xl w-[80px] h-10 outline-none text-primary text-center">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      ) : ( */}
        <input
          onChange={(e)=>updateCart(e,item.id)}
          className="text-primary placeholder:text-primary h-10 rounded-md p4 w-[80px] outline-accent text-center"
          type="number"
          value={item.amount}
          min={1}
          placeholder={`${item.amount}`}
        />
      {/* )} */}
    </div>
  );
};

export default Qty;
