import React from "react";

const WifiExp = props => {
  const { mailexp, correctAnswer } = props;

  if (correctAnswer) {
    return (
      <div className="ui container segment">
        <h1>Bravo ! C'est la bonne réponse</h1>
        <h3>Explications :</h3>
        <br />
        <br />
        {mailexp}
      </div>
    );
  } else {
    return (
      <div className="ui container segment">
        <h1>Eh non... ce n'était pas la réponse attendue</h1>
        <h3>Explications :</h3>
        <br />
        <br />
        {mailexp}
      </div>
    );
  }
};

export default WifiExp;
