import React, { Component } from "react";
import wifis from "../datas/wifilist";
import WifiExp from "./WifiExp";
import WifiList from "./WifiList";
import Winning from "./Winning";
import Informations from "./Informations";

class WifiRid extends Component {
  state = {
    wifis: {},
    selected: null
  };

  componentDidMount = () => {
    this.setState({ wifis });
  };

  handleClick = wifi => {
    this.setState({ selected: wifi.id });
    this.setState({ informations: wifi.informations });
  };

  // informationMessage = message => {
  //   const informations = message;
  //   this.setState({ informations });
  // };

  onReturnWinningClick = () => {
    this.setState({ selected: null });
  };

  onWinningClick = () => {
    this.props.upAvancement();
  };

  renderContent = () => {
    const informations =
      "Parmis les réseaux wifis disponibles, choisissez le réseau wifi qui est le plus sécurisé.";
    // Id du wifi correspondant à la bonne réponde : [3]
    if (this.state.selected === 3) {
      return (
        <div>
          <WifiExp answer="right" />
          <Winning
            onReturnWinningClick={this.onReturnWinningClick}
            onWinningClick={this.onWinningClick}
          />
        </div>
      );
    }
    if (this.state.selected === null) {
      return (
        <div>
          <Informations informations={informations} />
          <WifiList wifis={this.state.wifis} handleClick={this.handleClick} />
        </div>
      );
    }

    return (
      <div>
        <WifiExp answer="wrong" />;
        <div className="ui one column stackable center aligned page grid">
          <button className="ui red button" onClick={this.onReturnWinningClick}>
            Revenez en arrière et réessayer
          </button>
        </div>
      </div>
    );
  };

  render() {
    return this.renderContent();
  }
}

export default WifiRid;
