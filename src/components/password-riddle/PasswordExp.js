import React from "react";
import "../css/Password.css";
import passwordexp from "../../datas/passwordexp";

const PasswordExp = () => {
  return (
    <div className="passwordContent">
      <div className="ui container segment">
        <div dangerouslySetInnerHTML={{ __html: passwordexp }} />
      </div>
    </div>
  );
};

export default PasswordExp;
