import React, { Component } from "react";
import wifis from "../datas/wifilist";
import Wifi from "./Wifi";
import WifiExp from "./WifiExp";
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

  renderContent = () => {
    if (this.state.selected === 3) {
      return (
        <div>
          <Winning />
          <WifiExp />
        </div>
      );
    } else {
      return (
        <div>
          <Informations informations={this.state.informations} />
          <div className="ui container">
            <div className="ui grid segment">
              <div className="row">
                <div className="column four wide">Nom</div>
                <div className="column four wide">Type de Sécurité</div>
                <div className="column four wide">Intensité du signal</div>
              </div>
              {Object.keys(this.state.wifis).map(key => (
                <Wifi
                  key={key}
                  wifi={this.state.wifis[key]}
                  onClick={this.handleClick}
                />
              ))}
            </div>
          </div>
        </div>
      );
    }
  };

  render() {
    return this.renderContent();
  }
}

export default WifiRid;
