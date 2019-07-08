import React from "react";
import Wifi from "./Wifi";

const WifiList = props => {
  const { wifis, handleClick } = props;
  return (
    <div className="ui container">
      <div className="ui grid segment">
        <div className="row">
          <div className="column four wide">Nom</div>
          <div className="column four wide">Type de Sécurité</div>
          <div className="column four wide">Intensité du signal</div>
        </div>
        {Object.keys(wifis).map(key => (
          <Wifi key={key} wifi={wifis[key]} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default WifiList;
