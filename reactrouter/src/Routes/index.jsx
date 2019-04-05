import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import routes from "./routes";

function RenderRoutes(route) {
  console.log("route", route);
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
}

function ConfigureRoute() {
  return (
    <Router>
      {routes.map((route, i) => (
        <RenderRoutes key={i} {...route} />
      ))}
    </Router>
  );
}

export { RenderRoutes };

export default ConfigureRoute;
