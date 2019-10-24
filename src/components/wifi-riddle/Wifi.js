import React from "react";

const Wifi = props => {
  const { name, security, intensity } = props.wifi;
  return (
    //<div className="ui middle aligned center grid segment">
    <div className="four column row">
      <div className="column">{name}</div>
      <div className="column">{security}</div>
      <div
        className="column"
        style={{ textAlign: "center" }}
        dangerouslySetInnerHTML={{ __html: intensity }}
      />
      <div className="column">
        <button
          className="ui primary button right floated"
          onClick={() => props.onClick(props.wifi)}
        >
          Se connecter
        </button>
      </div>
    </div>
    //</div>
  );
};

export default Wifi;
