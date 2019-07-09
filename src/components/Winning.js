import React from "react";

const Winning = props => {
  const { onReturnWinningClick, onWinningClick } = props;
  return (
    <div className="ui one column stackable center aligned page grid">
      <div className="column eight wide">
        <button className="massive ui green button" onClick={onWinningClick}>
          Bravo ! Passez à l'étape suivante
        </button>
      </div>
      <div className="column six wide">
        <button
          className="massive ui red button"
          onClick={onReturnWinningClick}
        >
          Ou revenez avant...
        </button>
      </div>
    </div>
  );
};

export default Winning;
