import React from "react";

const Mail = props => {
  const { subject, date, expediteur, content } = props.mail;
  const { mail, buttonContent } = props;
  return (
    <div className="ui middle aligned center grid segment">
      <div className="row">
        <div className="six wide column subject">
          <strong>{subject}</strong>
        </div>
        <div className="ten wide column date">{date}</div>
      </div>
      <div className="row">
        <div className="three wide column expediteur">{expediteur}</div>
        <div
          className="ten wide column content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div className="three wide column">
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
