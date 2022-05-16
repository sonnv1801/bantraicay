import React from "react";
import Secondimage from "./Second_Image";
import SecondLetter from "./Second_Letter";

export default function AllSecond(prop) {
    return (
      <div className="container second">
        <div className="row">
          <div className="col-xl-4">
            <Secondimage/>
          </div>
          <div className="col-xl-8">
            <SecondLetter/>
          </div>
        </div>
      </div>
  
    )
  }