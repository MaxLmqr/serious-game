import React from "react";

const Winning = props => {
  const { onClick } = props;
  return (
    <div className="ui one column stackable center aligned page grid">
      <div className="column eight wide">
        <button className="massive ui green button">
          Bravo ! Passez à l'étape suivante
        </button>
      </div>
      <div className="column six wide">
        <button className="massive ui red button" onClick={onClick}>
          Ou revenez avant...
        </button>
      </div>
    </div>
  );
};

export default Winning;
