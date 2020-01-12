import React from "react";
import "./App.css";
import Dog from "./Components/Dog/Dog";
import SignIn from "./Components/SignIn/SignIn";
import ResetPasword from "./Components/ResetPassword/ResetPassword";
import SignUp from "./Components/SignUp/SignUp";
import Buttons from "./Components/Buttons/Buttons";
import Profile from "./Components/Profile/Profile";
import Sadie from "./Components/Dog/Other/sadie.jpg";


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
           <SignIn/>
         </Route>
          <Route exact path="/dog">
            <Dog/>
          </Route>
          <Route  exact path="/profile">
            <Profile/>
          </Route>
          <Route exact path="/reset">
            <ResetPasword/>
          </Route>
          <Route exact path="/signup">
            <SignUp/>
          </Route>
          <Route exact path="/signin">
            <SignIn/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


