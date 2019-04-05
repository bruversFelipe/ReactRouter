import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import routes from "./routes";

function Sandwiches() {
  return <h2>Sandwiches</h2>;
}

function Tacos({ routes }) {
  return (
    <div>
      <h2>Tacos</h2>
      <ul>
        <li>
          <Link to="/tacos/bus">Bus</Link>
        </li>
        <li>
          <Link to="/tacos/cart">Cart</Link>
        </li>
      </ul>

      {routes.map((route, i) => (
        <RenderRoutes key={i} {...route} />
      ))}
    </div>
  );
}

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
