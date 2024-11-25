import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect,Switch} from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import "assets/img/pattern_react.png"

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import FocusTasks from "views/FocusTasks.js";
import FocusTimer from "views/FocusTimer.js";
import FocusType from "views/FocusType.js";
import FocusSites from "views/FocusSites.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import Welcome from "views/Welcome";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
    
      {/* add routes with layouts */}
      {/*<Route path="/admin" component={Admin} />*/}
      <Route path="/auth" component={Auth} />
      {/* add routes without layouts */}
      <Route path ="/FocusType" exact component ={FocusType}/>
      <Route path ="/FocusTimer" exact component ={FocusTimer}/>
      <Route path ="/FocusSites" exact component ={FocusSites}/>
      <Route path="/FocusTasks" exact component={FocusTasks} />
      <Route path="/profile" exact component={Profile} />
      <Route path ="/welcome"exact component={Welcome}/>
      <Route path="/" exact component={Index} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/welcome" /> 
      
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);