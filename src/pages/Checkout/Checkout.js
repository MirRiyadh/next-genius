import React from "react";
import { useLoaderData } from "react-router-dom";
import Billing from "./Billing/Billing";
import PlaceOrder from "./PlaceOrder/PlaceOrder";

const Checkout = () => {
  const items = useLoaderData();

  return (
    <div className="mt-3 md:w-11/12 lg:w-7/12  m-auto">
      <div>
        <h1 className="text-3xl text-center underline ">Checkout</h1>
      </div>
      <div className="my-2 m-4">
        <h3 className="font-semibold text-lg underline">Billing Details</h3>
      </div>

      <div className="md:grid grid-cols-3 gap-4">
        <div className="col-span-2  mb-3 pl-2">
          <Billing></Billing>{" "}
        </div>
        <div className=" pl-5 border border-zinc-500">
          <PlaceOrder item={items}></PlaceOrder>{" "}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
