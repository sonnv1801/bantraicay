import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

export default function SignUpAndLogin() {
  return (
    <Router>
      <div>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <h4 className="nav-link active nav-color-food">SQVTz-FOOD</h4>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <h4>LOGIN</h4>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              <h4>REGISTER</h4>
            </Link>
          </li>
        </ul>
        <Switch>
          <Route path="/register">
            <SignUp />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
