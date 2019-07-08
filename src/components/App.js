import React, { Fragment } from "react";
import WifiRid from "./WifiRid";
import Login from "./Login";
import MailRid from "./MailRid";
import Welcome from "./Welcome";
import "./css/App.css";

const App = () => {
  return (
    <Fragment>
      <Welcome />
      <WifiRid />
      <Login />
      <MailRid />
    </Fragment>
  );
};

export default App;


