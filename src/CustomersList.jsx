import React, { Component } from "react";
export default class CustomersList extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Andreea",
        phone: "873-456",
        address: { city: "Bucuresti" },
        photo: "https://picsum.photos/id/1025/60",
      },
      {
        id: 2,
        name: "Erika",
        phone: "133-496",
        address: { city: "Vaslui" },
        photo: "https://picsum.photos/id/1011/60",
      },
      {
        id: 3,
        name: "Maria",
        phone: "793-906",
        address: { city: "Caracal" },
        photo: "https://picsum.photos/id/1012/60",
      },
      {
        id: 4,
        name: "Alexandra",
        phone: null,
        address: { city: "Galati" },
        photo: "https://picsum.photos/id/1013/60",
      },
      {
        id: 5,
        name: "Robert",
        phone: null,
        address: { city: "Buzau" },
        photo: "https://picsum.photos/id/1014/60",
      },
    ],
  };

  render() {
    return (
      <div className="content">
        <h4 className="m-1 p-1">{this.state.pageTitle}</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Photo</th>
              <th>Customers Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }
  //Executa cand apasa fraierul pe butonul de refresh
  getPhoneToRender = (phone) => {
    if (phone) return phone;
    else {
      return <div className="warning text-left">Phone Missing</div>;
    }
  };
  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr className="colorTr" key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="customer" />
          </td>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };
  //primesc ca si parametru customer + index
}
