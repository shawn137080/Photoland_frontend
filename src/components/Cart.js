import React from "react";
import { IoClose, IoArrowForward, IoCartOutline } from "react-icons/io5";
//use cart context
import { CartContext } from "../context/CartContext";

//component
import CartItem from "../components/CartItem";
//stripe
import { loadStripe } from "@stripe/stripe-js";
import { request } from "../request";

const Cart = () => {
  const STRIPE_KEY = process.env.REACT_APP_STRIPE_KEY;
  //use cart context
  const { setIsOpen, cart, total, subtotal } = React.useContext(CartContext);
  const stripePromise = loadStripe(STRIPE_KEY);
  const handleCheckout = async () => {
    try {
      const stripe = await stripePromise;
      const res = await request.post("/orders", {
        cart,
      });

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full h-full px-4 text-white">
      <div className="overflow-y-auto overflow-x-hidden h-[75vh]">
        {/* icon close */}
        <div
          onClick={() => setIsOpen(false)}
          className="text-4xl w-20 h-[98px] flex justify-start items-center cursor-pointer"
        >
          <IoClose />
        </div>
        {/* cart items  */}
        <div className="flex flex-col gap-y-10 px-2">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      {/* subtototal & total */}
      {cart.length >= 1 && (
        <div className="text-center py-2 px-2">
          {/* subtotal */}
          <div className="flex justify-between text-xl">
            <div>Subtotal</div>
            <div>$ {subtotal}</div>
          </div>
          {/* HST */}
          <div className="flex justify-between text-md">
            <div>HST</div>
            <div>13%</div>
          </div>
          {/* total  */}
          <div className="flex justify-between text-xl">
            <div>Total</div>
            <div>$ {parseFloat(total).toFixed(2)}</div>
          </div>
        </div>
      )}
      {/* checkout button */}
      <div className="pt-4 flex items-center justify-center">
        {cart.length >= 1 ? (
          <button 
          onClick={handleCheckout}
          className="btn btn-accent text-primary text-lg hover:bg-accent-hover flex-1 px-2 gap-x-2">
            Checkout
            <IoArrowForward className="text-lg" />
          </button>
        ) : (
          <div className="h-full absolute top-0 right-0 left-0 flex justify-center items-center -z-10 flex-col">
            <div className="text-2xl text-white/50 font-semibold ">
              Your cart is empty
            </div>
            <div className="text-6xl">
              <IoCartOutline />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
