import React, { Component } from "react";
import MailPreview from "./MailPreview";
import MailDetail from "./MailDetail";
import Informations from "./Informations";
import Winning from "./Winning";
import mails from "../datas/maillist";

class mailRid extends Component {
  state = {
    mails: {},
    informations:
      "Choisissez un des mails qui apparait à votre écran. Pour chaque mail, déterminez si il est frauduleux ou pas.",
    mailRef: 0,
    mail: {},
    numSolved: 0,
    numMails: 10
  };

  componentDidMount() {
    this.setState({ mails });
  }

  upSolve = () => {
    this.setState({ numSolved: this.state.numSolved + 1 });
  };

  onMailReturnClick = () => {
    this.setState({ mailRef: 0 });
  };

  onMailClick = mail => {
    this.setState({ mailRef: mail.id, mail: mail });
  };

  renderWinningContent = () => {
    if (this.state.numSolved === this.state.numMails) {
      return (
        <Winning
          onReturnWinningClick={this.props.downAvancement}
          onWinningClick={this.props.upAvancement}
        />
      );
    }
  };

  render() {
    if (this.state.mailRef === 0) {
      return (
        <div>
          <Informations informations={this.state.informations} />
          <div className="ui container">
            {Object.keys(this.state.mails).map(key => {
              return (
                <MailPreview
                  key={key}
                  onMailClick={this.onMailClick}
                  mail={this.state.mails[key]}
                  buttonContent="Accéder au mail"
                />
              );
            })}
          </div>
          {this.renderWinningContent()}
        </div>
      );
    }
    return (
      <MailDetail
        onMailReturnClick={this.onMailReturnClick}
        mail={this.state.mail}
        upSolve={() => this.upSolve()}
      />
    );
  }
}

export default mailRid;
