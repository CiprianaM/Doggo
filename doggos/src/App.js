import React from "react";
import "./App.css";
import Dog from "./Components/Dog/Dog";
import SignIn from "./Components/SignIn/SignIn";
import ResetPasword from "./Components/ResetPassword/ResetPassword";
import SignUp from "./Components/SignUp/SignUp";
import StaticProfile from "./Components/StaticProfile/StaticProfile";
import EditProfile from "./Components/EditProfile/EditProfile";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  withRouter,
  useHistory
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route exact path="/dog">
            <Dog />
          </Route>
          <Route path="/profile/:id">
            <StaticProfile />
          </Route>
          <Route exact path="/editprofile">
            <EditProfile />
          </Route>
          <Route exact path="/reset">
            <ResetPasword />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
