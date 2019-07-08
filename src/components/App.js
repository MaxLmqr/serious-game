import React, { Fragment } from "react";
import WifiRid from "./WifiRid";
import PasswordRid from "./PasswordRid";
import MailRid from "./MailRid";
import Welcome from "./Welcome";
import "./css/App.css";

const App = () => {
  return (
    <Fragment>
      <Welcome />
      <WifiRid />
      <PasswordRid />
      <MailRid />
    </Fragment>
  );
};

export default App;
