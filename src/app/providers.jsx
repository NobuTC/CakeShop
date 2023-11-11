// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { createContext, useContext, useEffect, useReducer } from "react";

export function Providers({ children }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}

const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    console.log("saving to context");
    return {
      ...state, // copy the old data
      cart: [...state.cart, action.payload], // copy old cart and add product (payload) to it
    };
  }

  // empty the basket
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }
  return state;
};

const CartContext = createContext(); // create duck storage, this is React's own function

const CartProviderClient = ({ children }) => {
  // Check if localStorage is available (client side)
  const isLocalStorageAvailable =
    typeof window !== "undefined" && window.localStorage;

  const savedDataString = isLocalStorageAvailable
    ? localStorage.getItem("cart") || "[]"
    : "[]";
  const savedDataArray = JSON.parse(savedDataString); // this can be null
  const storedCart = savedDataArray || []; // is array always
  // beginning data
  const [cartState, dispatch] = useReducer(cartReducer, { cart: storedCart }); // this is from React

  useEffect(() => {
    // change array to string
    const myCartString = JSON.stringify(cartState.cart) || [];
    // save to localStorage
    localStorage.setItem("cart", myCartString);
    // only when cartState.cart is changed
  }, [cartState.cart]);

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const CartProviderServer = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, { cart: [] });
  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const isBrowser = typeof window !== "undefined";

export const CartProvider = CartProviderClient;

export const useCart = () => {
  const context = useContext(CartContext); // this is from React
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
