import React from "react"
import Singleimg from "./Single_img"
import SingleTodo from "./Single_Todo"
import Products from "./Products"
import Singleletter from "./Single_letter"
import Footer from "../../../../../Footer/Footer"

const listProductsinfomation = [
  {
      title: 'Products',
      content: 'Related Products',
      description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia'
  }
]

export default function AllSingle() {
    return (
      <div className="container Singlecard">
        <div className="row imgSg">
          <div className="col-xl-6 box1">
            <Singleimg/>
          </div>
          <div className="col-xl-6 box2">
            <SingleTodo/>
          </div>
        </div>
        <div>
        {listProductsinfomation.map((listProductsinfomation, index) => (
          <Products
            key={index}
            title={listProductsinfomation.title}
            content={listProductsinfomation.content}
            description={listProductsinfomation.description}
          />
        ))}
          <Singleletter/>
        </div>
        <Footer/>
      </div>
  
    )
  }