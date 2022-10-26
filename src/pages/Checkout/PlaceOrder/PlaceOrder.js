import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const PlaceOrder = ({ item }) => {
  const { price, title } = item;
  const shipping = 9.99;
  const shippingAmount = price + shipping;
  const total = shippingAmount.toFixed(2);

  const handleToast = () => {
    toast.success("Successfully Purchase!");
  };

  return (
    <div className="">
      <h1 className="font-bold text-lg text-gray-500">YOUR ORDER</h1>
      <div className="flex justify-between pr-3 font-semibold text-slate-600">
        <p>Product</p>
        <p>SubTotal</p>
      </div>
      <hr className="mr-3 " />
      <div className="flex justify-between items-center pr-3 my-3">
        <p className="pr-3 text-cyan-700">{title}</p>
        <p className="font-semibold">${price}</p>
      </div>
      <div className="flex justify-between items-center pr-3">
        <p className="pr-3 font-semibold">Sub-Total</p>
        <p className="font-semibold">${price}</p>
      </div>
      <hr className=" mr-3  " />
      <div className="flex justify-between items-center pr-3 my-1">
        <p className="pr-3 font-semibold">Shipping</p>
        <p className="font-semibold">${shipping}</p>
      </div>
      <hr className="mr-3 " />
      <div className="flex justify-between items-center pr-3 my-1">
        <p className="pr-3 font-semibold">Total</p>
        <p className="font-semibold">${total}</p>
      </div>
      <hr className="border mr-3  " />
      <div>
        <p className="my-2 font-semibold">Please select your payment method:</p>
        <div>
          <input type="radio" id="html" name="fav_language" value="HTML" /> {" "}
          <label htmlFor="html">Bkash</label>
        </div>
        <div>
          <input type="radio" id="html" name="fav_language" value="HTML" /> {" "}
          <label htmlFor="html">Nagad</label>
        </div>
        <div>
          <input type="radio" id="html" name="fav_language" value="HTML" /> {" "}
          <label htmlFor="html">Rocket</label>
        </div>
           
      </div>
      <div>
        <button
          onClick={handleToast}
          className="bg-sky-600 hover:bg-sky-500 font-bold text-white uppercase py-2 px-5 mb-8"
        >
          <Link to="/thankyou">Place Order</Link>
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;
