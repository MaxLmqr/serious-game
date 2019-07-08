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
  onInputClick = () => {
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.innerHTML = "console.log('bien execute')";
    this.instance.appendChild(s);
  };

  render() {
    return (
      <div className="loginContent" ref={el => (this.instance = el)}>
        <Inputs
          login={this.state.login}
          password={this.state.password}
          onEmailChange={this.onEmailChange}
          onPasswordChange={this.onPasswordChange}
          onClick={this.onInputClick}
        />
      </div>
    );
  }
}

export default Login;
