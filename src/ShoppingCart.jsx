import React, { Component } from "react";
import Product from "./Product";
import Img1 from "./images/iphone.jpg";
import Img2 from "./images/sonyCamera.jpg";
import Img3 from "./images/samsungTV.jpg";
import Img4 from "./images/xbox.jpg";
import Img5 from "./images/dellMonitor.jpg";
import Img6 from "./images/iPad.jpg";
import Img7 from "./images/samsungCeva.png";
import Img8 from "./images/tel1.png";
import Img9 from "./images/tel2.png";
export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          image: Img1,
          productName: "iPhone",
          price: 5000,
          quantity: 0,
          info: "Retur gratuit in 30 de zile detali Garantie inclusa: detal Persoane fizice: 24 luni extindePersoane juridice: 12 luniAsigurarea Protect+ detalii Protejeaza-ti bunul",
        },
        {
          id: 2,
          image: Img2,
          productName: "SonyCamera",
          price: 8930,
          quantity: 0,
          info: "cacat ",
        },
        {
          id: 3,
          image: Img3,
          productName: "Samsung QLED TV",
          price: 7900,
          quantity: 0,
          info: "Retur gratuit in 30 de zile detali Garantie inclusa: detal Persoane fizice: 24 luni extindePersoane juridice: 12 luniAsigurarea Protect+ detalii Protejeaza-ti bunul",
        },
        {
          id: 4,
          image: Img4,
          productName: "Xbox",
          price: 6000,
          quantity: 0,
          info: "Retur gratuit in 30 de zile detali Garantie inclusa: detal Persoane fizice: 24 luni extindePersoane juridice: 12 luniAsigurarea Protect+ detalii Protejeaza-ti bunul",
        },
        {
          id: 5,
          image: Img5,
          productName: "Dell monitor",
          price: 700,
          quantity: 0,
          info: "Retur gratuit in 30 de zile detali Garantie inclusa: detal Persoane fizice: 24 luni extindePersoane juridice: 12 luniAsigurarea Protect+ detalii Protejeaza-ti bunul",
        },
        {
          id: 6,
          image: Img6,
          productName: "iPad Pro",
          price: 9990,
          quantity: 0,
          info: "Retur gratuit in 30 de zile detali Garantie inclusa: detal Persoane fizice: 24 luni extindePersoane juridice: 12 luniAsigurarea Protect+ detalii Protejeaza-ti bunul",
        },
        {
          id: 7,
          image: Img7,
          productName: "Samsung Galaxy S7",
          price: 599.99,
          quantity: 0,
          info: "Retur gratuit in 30 de zile detali Garantie inclusa: detal Persoane fizice: 24 luni extindePersoane juridice: 12 luniAsigurarea Protect+ detalii Protejeaza-ti bunul",
        },
        {
          id: 8,
          image: Img8,
          productName: "google pixel ",
          price: 499.99,
          quantity: 0,
          info: "Retur gratuit in 30 de zile detali Garantie inclusa: detal Persoane fizice: 24 luni extindePersoane juridice: 12 luniAsigurarea Protect+ detalii Protejeaza-ti bunul",
        },
        {
          id: 9,
          image: Img9,
          productName: "Xiaomi Redmi Note 2",
          price: 699.99,
          quantity: 0,
          info: "Retur gratuit in 30 de zile detali Garantie inclusa: detal Persoane fizice: 24 luni extindePersoane juridice: 12 luniAsigurarea Protect+ detalii Protejeaza-ti bunul",
        },
      ],
    };
  }

  render() {
    return (
      <div className="container-fluid main">
        <h4 className="title">Shopping Cart</h4>
        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
              ></Product>
            );
          })}
        </div>
      </div>
    );
  }

  handleIncrement = (product, maxValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity < maxValue - 1) {
      allProducts[index].quantity++;
      this.setState({ products: allProducts });
    }
  };
  handleDecrement = (product, minValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;
      this.setState({ products: allProducts });
    }
  };
}
