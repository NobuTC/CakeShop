import React from "react";

function Selector({ price, size }) {
  return (
    <div className="row mt-2  gap-2">
      <div className="row mt-5">
        <p>Kakku koko:</p>
      </div>
      <div className="mt-2 space-x-4 flex items-center">
        <label className="">
          <input type="radio" name="people" value="12" className="hidden" />
          <div
            className={`border p-4 rounded-lg  transition-transform transform `}
          >
            <span className="block text-2xl font-semibold">{size} hlö</span>
            <span className="block text-gray-500">Hinta: {price}€</span>
          </div>
        </label>
      </div>
    </div>
  );
}

export default Selector;
