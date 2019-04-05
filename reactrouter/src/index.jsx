import React from "react";
import ReactDOM from "react-dom";
import ConfigureRoute from "./Routes";
import "antd/dist/antd.css";

const styleContent = {
  padding: "24px"
};

ReactDOM.render(
  <div style={styleContent}>
    <ConfigureRoute />
  </div>,
  document.getElementById("root")
);
