import React, { Component } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import ShoppingCart from "./ShoppingCart";
import Login from "./Login";
import CustomersList from "./CustomersList";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Bag from "./Bag";
import Footer from "./Footer";
import NoMatchFound from "./NoMatchFound";
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <div className="container-fluid">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/customers" exact element={<CustomersList />} />
            <Route path="/cart" exact element={<ShoppingCart />} />
            <Route path="/bag" exact element={<Bag />} />
            <Route path="*" exact element={<NoMatchFound />}></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>
      // <BrowserRouter>
      //   <Routes>
      //     <Route path="/" element={<NavBar />}>
      //       <Route index element={Login} />
      //       <Route path="dashboard" element={<Dashboard></Dashboard>} />{" "}
      //       <Route path="cart" element={<ShoppingCart />}></Route>
      //       <Route path="customers" element={<CustomersList></CustomersList>} />
      //     </Route>
      //   </Routes>
      // </BrowserRouter>
    );
  }
}
