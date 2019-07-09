import React from "react";

const Winning = props => {
  const { onReturnWinningClick, onWinningClick } = props;
  return (
    <div className="ui one column stackable center aligned page grid">
      <div className="column sixteen wide">
        <button className=" ui green button" onClick={onWinningClick}>
          Bravo ! Passez à l'étape suivante...
        </button>
        <button className=" ui red button" onClick={onReturnWinningClick}>
          ...ou revenez à la page précédente pour réessayer.
        </button>
      </div>
    </div>
  );
};

export default Winning;
