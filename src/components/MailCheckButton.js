import React from "react";

const MailCheckButton = props => {
  const { onRightAnswerClick, onWrongAnswerClick, mail } = props;

  return (
    <div className="ui one column stackable center aligned page grid">
      <div className="column eight wide">
        <button
          onClick={() => onRightAnswerClick(mail)}
          className="ui green button"
        >
          Sans danger
        </button>
      </div>
      <div className="column eight wide">
        <button
          onClick={() => onWrongAnswerClick(mail)}
          className="ui red button"
        >
          Dangereux
        </button>
      </div>
    </div>
  );
};

export default MailCheckButton;
