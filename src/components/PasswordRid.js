import React, { Component } from "react";
import Login from "./Login";
import PasswordExp from "./PasswordExp";
import "./css/Password.css";

class PasswordRid extends Component {
  render() {
    return (
      <div>
        <Login />
        <PasswordExp />
      </div>
    );
  }
}

export default PasswordRid;
