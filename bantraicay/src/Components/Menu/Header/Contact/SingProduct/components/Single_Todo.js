import React from "react";
import Button from "./Button";


export default function Single_Todo() {
    return (
        <div>
            <h3><b>Bell Pepper</b></h3>
            <a href="#!" className="mr-2 evaluatecss">5.0
                <span className="p-2">
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                </span>
                <span className="p-2">
                    100 Rating
                </span>
                <span className="p-2">
                    500 Sold
                </span>
            </a>
            <h3><b>$120.00</b></h3>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.
                It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                Text should turn around and return to its own, safe country.
                But nothing the copy said could convince her and so it didn’t take long until.
            </p>

            <div className="form-group d-flex">
                <div className="select-wrap">
                    <div className="iconSmall"><span className="fa fa-angle-down"></span></div>
                    <select className="form-control selectcss">
                        <option value="">Small</option>
                        <option value="">Medium</option>
                        <option value="">Large</option>
                        <option value="">Extra Large</option>
                    </select>
                </div>
            </div>

            

            <input className="updown" type="number" id="quantity" name="quantity"/>
            <p className="updown">600 kg available</p>
            <Button />
        </div>
    )
}
