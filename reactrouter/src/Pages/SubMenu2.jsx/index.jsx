import React from "react";
import { RenderRoutes } from "../../Routes";

const SubMenu2 = ({ routes }) => {
  console.log("routes", routes);
  return (
    <React.Fragment>
      {routes.map((route, i) => (
        <RenderRoutes key={i} {...route} />
      ))}
    </React.Fragment>
  );
};

export default SubMenu2;
