import React, { Component } from "react";
import MailPreview from "./MailPreview";
import MailDetail from "./MailDetail";
import Informations from "../Informations";
import Winning from "../Winning";
import mails from "../../datas/maillist";
import _ from "lodash";

class mailRid extends Component {
  state = {
    mails: {},
    informations:
      "Votre boîte de réception contient 10 mails non lus. Ouvrez-les un par un, et à chaque fois déterminez si ils sont authentique ou non. Faites attention aux détails !",
    mailRef: 0,
    mail: {},
    numSolved: 0,
    numMails: 10,
    score: 0
  };

  componentDidMount() {
    this.setState({ mails });
  }

  upSolve = () => {
    this.setState({ numSolved: this.state.numSolved + 1 });
  };

  onMailReturnClick = (answered, id, correct) => {
    if (answered) {
      this.setState({
        mailRef: 0,
        mails: _.omit(this.state.mails, `mail${id}`)
      });
      if (correct) {
        this.setState({ score: this.state.score + 1 });
      }
    } else {
      alert("Répondez d'abord !");
    }
  };

  onMailClick = mail => {
    this.setState({ mailRef: mail.id, mail: mail });
  };

  renderWinningContent = () => {
    if (this.state.numSolved === this.state.numMails) {
      return (
        <div>
          <div className="ui container segment">
            Vous avez obtenu le score de{" "}
            <strong style={{ color: this.state.score > 6 ? "green" : "red" }}>
              {" "}
              {this.state.score}/10{" "}
            </strong>{" "}
            !
          </div>
          <Winning
            onReturnWinningClick={this.props.downAvancement}
            onWinningClick={this.props.upAvancement}
          />
        </div>
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
