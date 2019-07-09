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
    this.props.logging();

    const s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.innerHTML = "console.log('bien execute')";
    this.instance.appendChild(s);
  };
  logging = () => {
    this.props.logging();
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("coucou");
    this.logging();
  };

  render() {
    return (
      <div className="loginContent" ref={el => (this.instance = el)}>
        <Inputs
          login={this.state.login}
          password={this.state.password}
          onEmailChange={this.onEmailChange}
          onPasswordChange={this.onPasswordChange}
          handleSubmit={this.props.logging}
        />
      </div>
    );
  }
}

export default Login;
