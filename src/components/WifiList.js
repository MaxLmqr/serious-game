import React from "react";
import Wifi from "./Wifi";

const WifiList = props => {
  const { wifis, handleClick } = props;
  return (
    <div className="ui four column grid segment container">
      <div className="row">
        <div className="column">Nom</div>
        <div className="column">Type de Sécurité</div>
        <div className="column">Intensité du signal</div>
      </div>
      {Object.keys(wifis).map(key => (
        <Wifi key={key} wifi={wifis[key]} onClick={handleClick} />
      ))}
    </div>
  );
};

export default WifiList;
