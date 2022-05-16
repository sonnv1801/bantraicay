import React from "react";
import { useCart } from "react-use-cart";
import HandleCart from "./HandleCart";

export default function Cart() {
  const { totalUniqueItems } = useCart();

  return (
    <>
      <div className="container ctn-header">
        <div className="row">
          <div className="col-xl-2">
            <i className="fa fa-cart-arrow-down cart-down">
              <span>{totalUniqueItems}</span>
            </i>
          </div>
          <div className="col-xl-3">
            <span>Product's Name</span>
          </div>
          <div className="col-xl-3">
            <span>Price</span>
          </div>
          <div className="col-xl-1 qlt">
            <span>Quantity</span>
          </div>
          <div className="col-xl-3"></div>
        </div>
      </div>
      <HandleCart/>
    </>
  );
}
