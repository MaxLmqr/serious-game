import React from "react";
import "./css/Welcome.css";

const Welcome = () => {
  return (
    <div className="ui inverted vertical masthead center aligned segment">
      <div className="ui text container">
        <h1 className="ui inverted header">Bienvenue dans ce serious game !</h1>
        <h2>
          {" "}
          Naviguez à travers ce site en faisant les bons choix pour chaque
          énigme
        </h2>
        <h3>Bonne Chance !</h3>
        <div className="ui huge primary button">
          Commencez
          <i className="right arrow icon" />
        </div>
        <div className="ui inverted footer">
          <p>
            Pour chaque situation, nous vous proposerons des explications sur le
            choix qui était attendu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
