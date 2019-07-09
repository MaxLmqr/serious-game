import React, { Component } from "react";
import Mail from "./Mail";
import MailCheckButton from "./MailCheckButton";
import "./css/MailDetail.css";

class MailDetail extends Component {
  render() {
    const { onMailReturnClick, mail } = this.props;
    return (
      <div className="ui container mail-detail">
        <Mail
          onMailClick={onMailReturnClick}
          mail={mail}
          buttonContent="Retour aux mails"
        />

        <MailCheckButton />
      </div>
    );
  }
}

export default MailDetail;
