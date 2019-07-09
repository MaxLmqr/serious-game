import React, { Fragment, Component } from "react";
import Login from "./Login";
import PasswordExp from "./PasswordExp";
import "./css/Password.css";
import Winning from "./Winning";

class PasswordRid extends Component {
  state = {
    logged: false
  };

  loggedIn = () => {
    this.setState({ logged: true });
  };

  onReturnWinningClick = () => {
    this.setState({ logged: false });
  };

  renderContent = () => {
    if (this.state.logged === true) {
      return (
        <Fragment>
          <PasswordExp />
          <Winning
            onWinningClick={this.props.upAvancement}
            onReturnWinningClick={this.onReturnWinningClick}
          />
        </Fragment>
      );
    } else {
      return <Login logging={() => this.loggedIn()} />;
    }
  };
  render() {
    return this.renderContent();
  }
}

export default PasswordRid;
