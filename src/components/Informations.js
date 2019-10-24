import React from "react";

const Informations = props => {
  const { informations } = props;
  return (
    <div id="informations" className="ui container segment">
      <h1>Informations :</h1>
      <p> {informations} </p>
    </div>
  );
};

export default Informations;
