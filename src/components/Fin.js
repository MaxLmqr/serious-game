import React from "react";

const Fin = () => {
  return (
    <div className="ui inverted vertical masthead center aligned segment">
      <div className="ui text container">
        <h1 className="ui inverted header">
          Merci d'avoir participé à ce jeu !
        </h1>
        <h3>
          {" "}
          Nous espérons que vous avez appris des choses, et que vous avez
          conscience des dangers potentiels présents dans le monde de
          l'informatique.
        </h3>
        <img
          className="ui centered medium rounded image"
          src="emse.png"
          alt="emse"
        />
        <h1>THE END</h1>
        <div className="ui inverted footer">
          <p>
            Les peines encourues pour des fraudes informatiques sont très
            rapidement très importantes. On voit très rapidement dans les textes
            des peines incluant de la prison et des amendes à 5 chiffres.
            Pourtant réaliser ces attaques n'est pas très compliqué et en s'y
            intéressant un peu on peut très rapidement faire orchestrer soi-même
            ces attaques. A titre d'exemple, faire du phishing en usurpant une
            identité vous emmène directement au tribunal correctionnel car le
            phishing est un délit. Restez donc du côté des gentils ! ;)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fin;
