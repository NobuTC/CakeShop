"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";

function Selector() {
  const [selectedSize, setSelectedSize] = useState(0);
  const onChange = (event) => {
    const userChosenSize = event.target.value;
    setSelectedSize(userChosenSize);
  };

  return (
    <div className="row mt-2  gap-2">
      <div className="row mt-5">
        <p>Valitse kakku koko:</p>
      </div>
      <div className="mt-2 space-x-4 flex items-center">
        <label className="cursor-pointer">
          <input
            type="radio"
            name="people"
            value="6"
            className="hidden"
            onChange={onChange}
          />
          <div
            className={`border p-4 rounded-lg shadow-md transition-transform transform ${
              selectedSize === "6" ? styles.activeSize : ""
            }`}
          >
            <span className="block text-2xl font-semibold">6 hlö</span>
            <span className="block text-gray-500">Hinta: 23€</span>
          </div>
        </label>

        <label className="cursor-pointer">
          <input
            type="radio"
            name="people"
            value="12"
            className="hidden"
            onChange={onChange}
          />
          <div
            className={`border p-4 rounded-lg shadow-md transition-transform transform ${
              selectedSize === "12" ? styles.activeSize : ""
            }`}
          >
            <span className="block text-2xl font-semibold">12 hlö</span>
            <span className="block text-gray-500">Hinta: 32€</span>
          </div>
        </label>
      </div>
    </div>
  );
}

export default Selector;
