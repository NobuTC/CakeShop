"use client";
import CartComponent from "../cart/CartComponent";

export default function BasketPage() {
  return (
    <div className="container mx-auto mt-10  ">
      <div className="live-preview flex h-full w-full not-prose justify-center items-center">
        <CartComponent isCheckout={true} />
      </div>
    </div>
  );
}
