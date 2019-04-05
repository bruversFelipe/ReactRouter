import React from "react";
import { Link } from "react-router-dom";
import Card from "antd/lib/card";

const SubMenu1 = () => (
  <Card>
    Render component Sub Menu 1
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <Link className="ant-btn" to="/">
        GoBack
      </Link>
    </div>
  </Card>
);

export default SubMenu1;
