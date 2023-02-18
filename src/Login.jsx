import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", message: "" };
  }
  render() {
    return (
      <div className="login col-lg-9 p-3">
        <h4 className="m-1 p-4 border-bottom">
          Bine ai venit sau revenit pe site-ul nostru!!!
        </h4>
        <div className="text-left loginClass">
          Conecteaza-te la contul tau in cazul in care ai mai cumparat de la noi
          sau inscrie-te si lasa-ne sa iti oferim servicii de calitate.
        </div>
        <h4 className="m-1 p-4 border-bottom">Login</h4>
        <div className="form-group form-row">
          <label className="col-lg-4 p-2 loginClass">Email: </label>
          <input
            type="text"
            className="form-control p-2"
            value={this.state.email}
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          />
        </div>
        <div className="form-group form-row">
          <label className="col-lg-4 p-2 loginClass">Password: </label>
          <input
            type="password"
            className="form-control p-2"
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          />
        </div>
        {this.state.message}
        <div className="p-2 text-left">
          <button
            className="btn p-2 btn-primary m-1"
            onClick={this.onLoginClick}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
  onLoginClick = async () => {
    // console.log(this.state);
    // var response = await fetch(
    //   `https://localhost:5000/users?email=${this.state.email}&password=${this.state.password}`
    // );
    // var body = await response.json();
    const navigate = useNavigate();
    navigate("./customers");
    // 3
  };
}
