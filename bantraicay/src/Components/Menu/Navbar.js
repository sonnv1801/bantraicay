import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
} from "react-router-dom";

import NavbarProducts from "./NavbarProducts";
import Connections from "./Header/Connections/Connection";
import Homes from "./Header/Home/Homes";
import AllProduct from "./Header/Products/AllProduct";
import Vegetables from "./Header/Products/Vegetables";
import Fruits from "./Header/Products/Fruits";
import Blogs from "./Header/Blog/Blogs";
import Contacts from "./Header/Contact/Contacts";
import Abouts from "./Header/About/Abouts";
import Carts from "./Header/Cart/Carts";
import {CartProvider} from 'react-use-cart'
import ContentsBlogA from "./Header/Blog/pagesBlog/BlogA/ContentsBlogA";
import SigleProduct from "./Header/Contact/SingProduct/SigleProduct";

export default function Navbar()  {
    return(
        <Router>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light navbar-background">
        <div className="container-fluid">
            <Link className="nav-color-food" to="/">SQVTz-FOOD</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-tasks nav-icon"></i>
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <NavbarProducts/>
                <div>
                    <Connections/>
                </div>   
            </div>
        </div>
    </nav>

        <Switch>
            <Route exact path="/">
            <CartProvider>
                <Homes />
            </CartProvider>
            </Route>
            <Route path="/products/allproducts">
                <CartProvider>
                    <AllProduct/>
                </CartProvider>
            </Route>
            <Route path="/products/vegertables">
                <CartProvider>
                <Vegetables/>
                </CartProvider>
            </Route>
            <Route path="/products/fruits">
                <CartProvider>
                <Fruits/>
                </CartProvider>
            </Route>
            <Route path="/products/sigleproduct">
                <SigleProduct/>
            </Route>
            <Route path="/blog">
                <Blogs/>
            </Route>
            <Route path="/contact">
                <Contacts/>
            </Route>
            <Route path="/about">
                <Abouts/>
            </Route>
            <Route path="/cart">
                <CartProvider>
                    <Carts/>
                </CartProvider>   
            </Route>
            <Route path="/ContentsBlogA">
                    <ContentsBlogA/>
            </Route>
        </Switch>
      </div>
    </Router>
    );
}
