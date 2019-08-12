import React from "react";

const Inputs = props => {
  const { password, onPasswordChange, handleSubmit } = props;

  return (
    <div className="ui grid">
      <div className="column">
        <form className="ui large form" onSubmit={handleSubmit}>
          <div className="ui stacked segment">
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon" />
                <input
                  required
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={onPasswordChange}
                />
              </div>
            </div>
            <button type="submit" className="ui fluid large teal submit button">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Inputs;
