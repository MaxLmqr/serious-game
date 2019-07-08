import React, { Component } from "react";
import Mail from "./Mail";
import mails from "../datas/maillist";

class mailRid extends Component {
  state = {
    mails: {},
    informations:
      "Choisissez un des mails qui apparait à votre écran. Pour chaque mail, déterminez si il est frauduleux ou pas.",
    mailRef: 0,
    mail: {}
  };

  componentDidMount() {
    this.setState({ mails });
  }
  
  onMailReturnClick = () => {
    this.setState({mailRef: 0})
  }

  onMailClick = (mail) => {
    console.log('Clicked !')
    this.setState({mailRef: mail.id, mail: mail})
  };

  render() {
    if (this.state.mailRef === 0) {
      return (
        <div>
          <div className="ui container segment">
            <h1>Informations :</h1>
            <p> {this.state.informations} </p>
          </div>
          <div className="ui container">
            {Object.keys(this.state.mails).map(key => {
              return (
                <Mail
                  key={key}
                  onMailClick={this.onMailClick}
                  mail={this.state.mails[key]}
                  buttonContent="Accéder au mail"
                />
              );
            })}
          </div>
        </div>
      );
    }
    return (
      <Mail 
        onMailClick={this.onMailReturnClick}
        mail={this.state.mail}
        buttonContent="Retour aux mails" />
    );
  }
}

export default mailRid;
