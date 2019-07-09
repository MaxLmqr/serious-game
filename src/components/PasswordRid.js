import React, { Component } from "react";
import Login from "./Login";
import Informations from "./Informations";
import PasswordExp from "./PasswordExp";
import PasswordResult from "./PasswordResult";
import "./css/Password.css";
import Winning from "./Winning";
class PasswordRid extends Component {
  state = {
    logged: false,
    passwordResult: {}
  };
  loggedIn = passwordResult => {
    this.setState({ logged: true });
    this.setState({ passwordResult });
    console.log(passwordResult);
  };

  onReturnWinningClick = () => {
    this.setState({ logged: false });
  };

  renderContent = () => {
    const informations =
      "Vous voyez ci-dessous un cadre d'authentification. Choisissez un mot de passe, nous allons tester sa robustesse.";
    if (this.state.logged === true) {
      return (
        <div className="passwordContent">
          <PasswordResult passwordResult={this.state.passwordResult} />
          <PasswordExp />
          <Winning
            onWinningClick={this.props.upAvancement}
            onReturnWinningClick={this.onReturnWinningClick}
          />
        </div>
      );
    } else {
      return (
        <div className="passwordContent">
          <Informations informations={informations} />
          <Login logging={p => this.loggedIn(p)} />;
        </div>
      );
    }
  };
  render() {
    return this.renderContent();
  }
}

export default PasswordRid;
