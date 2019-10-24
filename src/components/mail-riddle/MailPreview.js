import React from "react";

const MailPreview = props => {
  const { subject, date, expediteur, mailexpediteur } = props.mail;
  const { mail, buttonContent } = props;
  return (
    <div className="ui middle aligned center grid segment">
      <div className="row">
        <div className="five wide column subject">
          <strong>Sujet: {subject}</strong>
        </div>
        <div className="four wide column date">
          <strong>Date :</strong> {date}
        </div>
        <div className="seven wide column">
          {" "}
          <strong>Expéditeur :</strong> {mailexpediteur}
        </div>
      </div>
      <div className="row">
        <div className="twelve wide column expediteur">{expediteur}</div>
        <div className="four wide column">
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

export default MailPreview;
