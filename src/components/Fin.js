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
          conscience des dangers potentiels présents sur internet.
        </h3>
        <img
          className="ui centered medium rounded image"
          src="emse.png"
          alt="emse"
        />
        <h1>Fin</h1>
        <div className="ui inverted footer">
          <p>
            Pour approfondir votre connaissance des risques existants, vous
            pouvez vous rendre sur ce lien: <br />
            <a href="https://www.cybermalveillance.gouv.fr/">
              https://www.cybermalveillance.gouv.fr/
            </a>
          </p>
          <p>
            Il existe également un MOOC de l'ANSSI pour s'initier à la
            cybersécurité: <br />
            <a href="https://secnumacademie.gouv.fr/">
              https://secnumacademie.gouv.fr/
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fin;
