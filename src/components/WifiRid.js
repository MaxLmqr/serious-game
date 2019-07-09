import React, { Component } from "react";
import wifis from "../datas/wifilist";
import WifiExp from "./WifiExp";
import WifiList from "./WifiList";
import Winning from "./Winning";
import Informations from "./Informations";

class WifiRid extends Component {
  state = {
    wifis: {},
    informations:
      "Choisissez le réseau wifi qui vous semble le plus sécurisé. Il peut y avoir plusieurs bonnes réponses",
    selected: null
  };

  componentDidMount = () => {
    this.setState({ wifis });
  };

  handleClick = wifi => {
    this.setState({ selected: wifi.id });
    this.setState({ informations: wifi.informations });
  };

  informationMessage = message => {
    const informations = message;
    this.setState({ informations });
  };

  onReturnWinningClick = () => {
    this.setState({ selected: 1 });
  };

  onWinningClick = () => {
    this.props.upAvancement();
  };

  renderContent = () => {
    if (this.state.selected === 3) {
      return (
        <div>
          <WifiExp />
          <Winning
            onReturnWinningClick={this.onReturnWinningClick}
            onWinningClick={this.onWinningClick}
          />
        </div>
      );
    } else {
      return (
        <div>
          <Informations informations={this.state.informations} />
          <WifiList wifis={this.state.wifis} handleClick={this.handleClick} />
        </div>
      );
    }
  };

  render() {
    return this.renderContent();
  }
}

export default WifiRid;
