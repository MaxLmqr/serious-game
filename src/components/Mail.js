import React from "react";

const Mail = props => {
  const { subject, date, expediteur, content, mailexpediteur } = props.mail;
  const { mail, buttonContent } = props;
  return (
    <div className="ui middle aligned center grid segment">
      <div className="row">
        <div className="five wide column subject">
          <strong>Sujet: {subject}</strong>
        </div>
        <div className="six wide column date">
          <strong>Date :</strong> {date}
        </div>
        <div className="five wide column">{mailexpediteur}</div>
      </div>
      <div className="row">
        <div className="two wide column expediteur">{expediteur}</div>
        <div
          className="twelve wide column justify content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div className="two wide column">
          <button
            className="ui primary button right floated"
            onClick={() => props.onMailClick(mail)}
          >
            {buttonContent}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mail;
