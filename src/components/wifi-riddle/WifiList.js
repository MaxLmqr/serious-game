import React from "react";
import Wifi from "./Wifi";

const WifiList = props => {
  const { wifis, handleClick } = props;
  return (
    <div className="ui four column grid segment container">
      <div className="row">
        <div className="column" style={{ color: "blue" }}>
          Nom
        </div>
        <div className="column" style={{ color: "blue" }}>
          Type de Sécurité
        </div>
        <div className="column" style={{ color: "blue", textAlign: "center" }}>
          Intensité du signal
        </div>
      </div>
      {Object.keys(wifis).map(key => (
        <Wifi key={key} wifi={wifis[key]} onClick={handleClick} />
      ))}
    </div>
  );
};

export default WifiList;
