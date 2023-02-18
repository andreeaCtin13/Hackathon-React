// import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";
// import Bag from "./Bag";
// import ShoppingCart from "./ShoppingCart";
import Modal from "./Modal";
export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product,
    };
  }

  render() {
    return (
      <div className="col-lg-4">
        <div className="card m-2">
          <div className="card-body body-align">
            <div>
              <img
                className="imageProduct"
                src={this.state.product.image}
                alt="caca"
              />
            </div>
            <h5 className="pt-2 border-top">
              {this.state.product.productName}
            </h5>
            <div>${this.state.product.price}</div>
          </div>
          <div className="card-footer body-align float-left">
            <div className="">
              <div className="space-between">
                <div>
                  <span className=" text-black">
                    {this.state.product.quantity}
                  </span>
                  <span> buc.</span>
                  <div className="btn-group color-btns">
                    <button
                      className="btn1 btn btn-outline-succes"
                      onClick={() => {
                        this.props.onIncrement(this.state.product, 10);
                      }}
                    >
                      +
                    </button>
                    <button
                      className="btn2 btn btn-outline-succes"
                      onClick={() => {
                        this.props.onDecrement(this.state.product, 0);
                      }}
                    >
                      -
                    </button>
                  </div>
                </div>
                {/* modala */}
                <button className="btn btn-self btn-primary">
                  <a className="text-button-modala" href="#openModal-about">
                    Info
                  </a>
                  <div id="openModal-about" className="modalDialog">
                    <div>
                      <a href="#close" title="Close" className="close">
                        X
                      </a>
                      <div className="text-modala-interior">
                        <strong>Caracteristici produs</strong> <br />
                        - lungime max.: 991 mm;
                        <br />
                        - latime max. : 118 mm;
                        <br />
                        - diametru exterior rola: 127 mm;
                        <br />
                        - diametru interior rola: 12.7 mm, 25.4 mm standard;
                        <br /> - grosime: 0.08 – 0.1905 mm;
                        <br /> - tip: etichete eco si semilucioase, etichete
                        pliate, etichete pretaiate, etichete cu sau fara black
                        mark, etichete cartonate, role de hartie termica.
                        <br /> Pachetul contine: cablu USB; sursa de alimentare;
                        cablu de alimentare; CD cu drivere; manual de utilizare.
                        <br /> Dimensiuni: 220.8 x 177.5 x 150.7 mm Culoare: gri
                        <br /> Greutate: 1.35 kg Temperatura de operare: 4.4 ° –
                        41°C
                        <br /> Servicii incluse - Livrare in localitatile
                        principale. Va rugam sa ne contactati pentru detalii.
                        <br /> - Asistenta pentru montare consumabile si
                        conectare la computer
                        <br /> - Asistenta pentru incarcarea formatului de
                        eticheta
                      </div>
                    </div>
                  </div>
                </button>
                {/* final modala */}
                <button
                  className="btn btn-self btn-primary"
                  onClick={() => {
                    this.clickOnBuyBtn(this.state.product);
                  }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  clickOnBuyBtn(product) {
    let myCart = [];
    myCart.push({
      id: 10,
      title: "caca",
      price: 599.99,
      img: "https://res.cloudinary.co*/diqqf3eq2/image/upload/v1583368215/phone-2_ohtt5s.png",
      amount: 1,
    });
  }

  /*
  addDeleteButton = (product) => {
    console.log("Am apasat bine");
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    console.log(allProducts[index]);
  };
  */
}
