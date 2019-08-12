import React, { Fragment, Component } from "react";
import wifis from "../../datas/wifilist";
import WifiExp from "./WifiExp";
import WifiList from "./WifiList";
import Winning from "../Winning";
import Informations from "../Informations";

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
    // Retourne la liste de tous les wifis disponible, aucun n'a encore été sélectionné.
    if (this.state.selected === null) {
      return (
        <Fragment>
          <Informations informations={informations} />
          <WifiList wifis={this.state.wifis} handleClick={this.handleClick} />
        </Fragment>
      );
    }

    // Id du wifi correspondant à la bonne réponde : [3]
    if (this.state.selected === 3) {
      return (
        <Fragment>
          <WifiExp answer="right" />
          <Winning
            onReturnWinningClick={this.onReturnWinningClick}
            onWinningClick={this.onWinningClick}
          />
        </Fragment>
      );
    }

    return (
      <Fragment>
        <WifiExp answer="wrong" />;
        <div className="ui one column stackable center aligned page grid">
          <button className="ui red button" onClick={this.onReturnWinningClick}>
            Revenez en arrière et réessayer
          </button>
        </div>
      </Fragment>
    );
  };

  render() {
    return this.renderContent();
  }
}

export default WifiRid;
