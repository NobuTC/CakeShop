// app/providers.tsx
"use client";

import { NextUIProvider, useDisclosure } from "@nextui-org/react";
import { createContext, useContext, useEffect, useReducer } from "react";

export function Providers({ children }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}

const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    return {
      ...state, // copy the old data
      cart: [...state.cart, action.payload], // copy old cart and add product (payload) to it
    };
  }

  if (action.type === "DELETE_FROM_CART") {
    const oldCart = [...state.cart];
    const indexToDelete = action.payload;
    oldCart.splice(indexToDelete, 1);
    return {
      ...state,
      cart: [...oldCart],
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

export const CartProvider = ({ children }) => {
  // Check if localStorage is available (client side)
  const isLocalStorageAvailable =
    typeof window !== "undefined" && window.localStorage;

  const savedDataString = isLocalStorageAvailable
    ? localStorage.getItem("cart") || "[]"
    : "[]";
  const savedDataArray = JSON.parse(savedDataString); // this can be null
  const storedCart = savedDataArray || []; // is array always
  // beginning data

  const [cartState, dispatch] = useReducer(cartReducer, {
    cart: storedCart,
  }); // this is from React

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

export const useCart = () => {
  const context = useContext(CartContext); // this is from React
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

const OpenContext = createContext();

export const useOpenContext = () => {
  const context = useContext(OpenContext);
  if (!context) {
    throw new Error("useOpenContext must be used within an OpenProvider");
  }
  return context;
};

export const OpenProvider = ({ children }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <OpenContext.Provider value={{ isOpen, onOpen, onOpenChange }}>
      {children}
    </OpenContext.Provider>
  );
};
