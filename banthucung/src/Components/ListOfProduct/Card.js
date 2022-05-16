import React from "react";
import { useCart } from "react-use-cart"

export default function Card(props) {
    const {addItem} = useCart();
    return(
        <div className="col-md-3 col-xl-3 menu_item">
            <div className="card card-color">
                <img src={props.image} className="card-img-top" alt="Sản Phẩm"/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text color-price">{props.price}$</p>
                    <button className="btn btn-primary" onClick={() => addItem(props.item)}>{props.btn}</button>
                </div>
            </div>
        </div>
    );
}