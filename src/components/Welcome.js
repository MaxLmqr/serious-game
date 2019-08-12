import React from "react";
import "./css/Welcome.css";

const Welcome = props => {
  return (
    <div
      id="contentBox"
      className="ui inverted vertical masthead center aligned segment"
    >
      <div className="ui text container">
        <h1 className="ui inverted header">Bienvenue dans ce serious game !</h1>
        <h2>
          {" "}
          Naviguez à travers ce site en faisant les bons choix pour chaque
          énigme
        </h2>
        <h3>Bonne Chance !</h3>
        <img
          className="ui centered medium rounded image"
          src="emse.png"
          alt="emse"
        />
        <button className="ui huge primary button" onClick={props.upAvancement}>
          Commencer
          <i className="right arrow icon" />
        </button>
        <div className="ui inverted footer">
          <p>
            Pour chaque situation, nous vous proposerons des explications sur le
            choix qui était attendu. Nous avons essayé de trouver des exemples
            de cas concrets qui s'étaient produits pour chaque cas de figure. En
            espérant que cela vous intéresse !
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
