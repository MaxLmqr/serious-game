import React, { Fragment, Component } from "react";
import WifiRid from "./WifiRid";
import PasswordRid from "./PasswordRid";
import MailRid from "./MailRid";
import Fin from "./Fin";
import Welcome from "./Welcome";
import "./css/App.css";
class App extends Component {
  state = {
    avancement: 0
  };

  upAvancement = () => {
    const avancement = this.state.avancement + 1;
    this.setState({ avancement });
  };

  downAvancement = () => {
    this.setState({ avancement: this.state.avancement - 1 });
  };

  renderContent = () => {
    if (this.state.avancement === 1) {
      return <WifiRid upAvancement={this.upAvancement} />;
    }
    if (this.state.avancement === 2) {
      return <PasswordRid upAvancement={this.upAvancement} />;
    }
    if (this.state.avancement === 3) {
      return (
        <MailRid
          upAvancement={this.upAvancement}
          downAvancement={this.downAvancement}
        />
      );
    }
    if (this.state.avancement === 4) {
      return <Fin />;
    } else {
      return <Welcome upAvancement={this.upAvancement} />;
    }
  };

  render() {
    return <Fragment>{this.renderContent()}</Fragment>;
  }
}

export default App;
