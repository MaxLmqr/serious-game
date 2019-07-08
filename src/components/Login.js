import React, { Component } from "react";
import "./css/Login.css";
import Inputs from "./Inputs";

class Login extends Component {
  state = {
    login: "",
    password: ""
  };

  onEmailChange = event => {
    const login = event.target.value;
    this.setState({ login });
  };
  onPasswordChange = event => {
    const password = event.target.value;
    this.setState({ password });
  };
  render() {
    return (
      <div className="loginContent">
        <Inputs
          login={this.state.login}
          password={this.state.password}
          onEmailChange={this.onEmailChange}
          onPasswordChange={this.onPasswordChange}
        />
      </div>
    );
  }
}

export default Login;
