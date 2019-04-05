import React from "react";
import { Link } from "react-router-dom";

const Item1 = () => (
  <div>
    Hello Item 1
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <Link className="ant-btn" to="/sub-menu2">
        GoBack
      </Link>
    </div>
  </div>
);

export default Item1;
