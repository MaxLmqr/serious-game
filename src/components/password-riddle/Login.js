import React, { Component } from "react";
import "../css/Login.css";
import Inputs from "./Inputs";
import zxcvbn from "zxcvbn";

class Login extends Component {
  state = {
    password: ""
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
    const testpassword = zxcvbn(this.state.password);
    this.props.logging(testpassword);
  };

  render() {
    return (
      <div>
        <div className="loginContent" ref={el => (this.instance = el)}>
          <Inputs
            login={this.state.login}
            password={this.state.password}
            onEmailChange={this.onEmailChange}
            onPasswordChange={this.onPasswordChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

export default Login;
