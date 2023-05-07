import React from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import Qty from "../components/Qty";
import { CartContext } from "../context/CartContext";


const CartItem = ({ item }) => {
  const { removeFromCart } = React.useContext(CartContext);

  return (
    <div className="flex gap-x-8">
      <Link to={`/product/${item.id}`} className="w-[70px] h-[70px]">
        <img
          src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
          alt={item.title}
        />
      </Link>
      <div className="flex-1">
        {/* title & remove icon */}
        <div className="flex flex-2 gap-x-4 mb-3 ">
          <Link>{item.attributes.Title}</Link>
          <div 
          onClick={() => removeFromCart(item.id)}
          className="flex  flex-1 justify-end items-center w-full h-[30px] cursor-pointer text-[24px] transition-all hover:text-accent">
            <IoClose />
          </div>
        </div>
        <div className=" flex items-center gap-x-12">
          {/* quantity */}
          <div className="flex gap-x-4 mb-2">
            <div>
              <Qty item={item} />
            </div>
            <div className="text-accent text-xl">$ {(item.attributes.Price * item.amount).toFixed(2)}</div>
          </div>
        {/* price */}

        </div>
        <div>
          <span className="text-accent">
            $ {item.attributes.Price} per piece
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
