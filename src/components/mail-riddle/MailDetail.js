import React, { Component } from "react";
import Mail from "./Mail";
import MailCheckButton from "./MailCheckButton";
import MailExp from "./MailExp";
import "../css/MailDetail.css";

class MailDetail extends Component {
  state = {
    answered: false,
    correct: false
  };
  onAnswerClick = () => {
    this.setState({ answered: true });
    this.props.upSolve();
  };
  onRightAnswerClick = mail => {
    if (mail.authenticated === "yes") {
      this.setState({ correct: true });
    } else {
      this.setState({ correct: false });
    }
    this.onAnswerClick();
  };
  onWrongAnswerClick = mail => {
    if (mail.authenticated === "no") {
      this.setState({ correct: true });
    } else {
      this.setState({ correct: false });
    }
    this.onAnswerClick();
  };

  renderContent = mail => {
    if (this.state.answered === true) {
      return <MailExp mailexp={mail.exp} correctAnswer={this.state.correct} />;
    } else {
      return (
        <MailCheckButton
          mail={mail}
          onRightAnswerClick={this.onRightAnswerClick}
          onWrongAnswerClick={this.onWrongAnswerClick}
        />
      );
    }
  };

  render() {
    const { onMailReturnClick, mail } = this.props;
    return (
      <div className="ui container mail-detail">
        <Mail
          onMailClick={() =>
            onMailReturnClick(this.state.answered, mail.id, this.state.correct)
          }
          mail={mail}
          buttonContent="Retour aux mails"
        />
        {this.renderContent(mail)}
      </div>
    );
  }
}

export default MailDetail;
