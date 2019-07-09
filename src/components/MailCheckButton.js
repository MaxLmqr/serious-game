import React from "react";

const MailCheckButton = () => {
  return (
    <div className="ui one column stackable center aligned page grid">
      <div className="column eight wide">
        <button className="massive ui green button">Authentique</button>
      </div>
      <div className="column eight wide">
        <button className="massive ui red button">Dangereux</button>
      </div>
    </div>
  );
};

export default MailCheckButton;
