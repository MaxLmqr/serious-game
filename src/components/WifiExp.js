import React from "react";
import wifiexp from "../datas/wifiexp";

const WifiExp = props => {
  const { answer } = props;
  if (answer === "wrong") {
    return (
      <div className="ui container segment">
        <h1>
          Vous êtes victime d'une attaque sur ce réseau ! Vite !!
          Déconnectez-vous
        </h1>
        <div dangerouslySetInnerHTML={{ __html: wifiexp }} />
      </div>
    );
  }
  return (
    <div className="ui container segment">
      <h1>EXPLICATIONS</h1>
      <h2>
        Bravo ! Vous êtes en lieu sûr, naviguez paisiblement sur la toile !
      </h2>
      <div dangerouslySetInnerHTML={{ __html: wifiexp }} />
    </div>
  );
};

export default WifiExp;
