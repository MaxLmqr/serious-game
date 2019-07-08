import React from "react";

const Inputs = props => {
  const { login, password, onEmailChange, onPasswordChange, onClick } = props;
  return (
    <div className="ui grid">
      <div className="column">
        <form className="ui large form">
          <div className="ui stacked segment">
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon" />
                <input
                  type="text"
                  name="email"
                  value={login}
                  placeholder="E-mail address"
                  onChange={onEmailChange}
                />
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon" />
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={onPasswordChange}
                />
              </div>
            </div>
            <div
              onClick={onClick}
              className="ui fluid large teal submit button"
            >
              Login
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Inputs;
