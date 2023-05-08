import React from "react";

//create a context
export const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [cart, setCart] = React.useState([]);
  const [itemAmount, setItemAmount] = React.useState([]);
  const [amount, setAmount] = React.useState([]);
  const [total, setTotal] = React.useState([]);
  const [subtotal, setSubtotal] = React.useState([]);

  //add to cart function
  const addToCart = (item, id) => {
    const itemID = parseInt(id);
    const newItem = { ...item[0], amount: 1 };
    setCart([...cart, newItem]);

    //check if item is already in cart
    const cartItem = cart.find((item) => item.id === itemID);
    //if item is already in cart, increase the amount by 1, otherwise set the amount to 1.

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === itemID) {
          setAmount(cartItem.amount + 1);
          return { ...item, amount: cartItem.amount + 1 };
        }
        return item;
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
    setIsOpen(true);
  };

  //remove from cart function
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  //cart amount function
  React.useEffect(() => {
    const amount = cart.reduce((acc, item) => {
      return acc + item.amount;
    }, 0);
    setItemAmount(amount);
  }, [cart]);

  //update cart amount function
  const updateCart = (e, id) => {
    const value = parseInt(e.target.value);
    //find item in the cart by id
    const cartItem = cart.find((item) => item.id === id);
    //if item is in the cart, update the amount
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          setAmount(value)
          return { ...item, amount: value };
        }
        return item;
      });
      setCart(newCart);
    }
  };

  //handle selector
  // const handleSelector = (e, id) => {
  //   const value = e.target.value;
  //   //find cart item by id
  //   const cartItem = cart.find((item) => item.id === id);
  //   if (cartItem) {
  //     const newCart = cart.map((item) => {
  //       if (item.id === id) {
  //         setAmount(value);
  //         return { ...item, amount: value };
  //       }
  //       return item;
  //     });
  //     setCart(newCart);
  //   }
  // };

  //calculate cart total
    React.useEffect(() => {
      const amount = cart.reduce((acc, item) => {
        return acc + item.attributes.Price * item.amount;
      }, 0);
      const subtotal = amount.toFixed(2);
      const total = (subtotal * 1.13).toFixed(2);
      setSubtotal(subtotal);
      setTotal(total);
    }, [cart]);




  return (
    <CartContext.Provider
      value={{
        isOpen,
        setIsOpen,
        cart,
        setCart,
        itemAmount,
        setItemAmount,
        amount,
        setAmount,
        total,
        setTotal,
        addToCart,
        removeFromCart,
        updateCart,
        // handleSelector,
        subtotal,

      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
