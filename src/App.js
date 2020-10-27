import React, { useState } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

//react-router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

//firebase
import firebase from "firebase/app";
import "firebase/auth";

//components
import Hero from "./Sections/Hero";
import Signin from "./Sections/Signin";
import Signup from "./Sections/Signup";
import PageNotFound from "./Sections/PageNotFound";
import { UserContext } from "./context/UserContext";

import Support from "./Sections/Support"
import Builder from "./Sections/Builder"
import Feedback from "./Sections/Feedback"

import firebaseConfig from "./Config/firebaseConfig";
//init firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Switch>
          <Route exact path="/" component={Hero} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/support" component={Support} />        
          <Route exact path="/builder" component={Builder} />  
          <Route exact path="/Feedback" component={Feedback} />  
          <Route exact path="*" component={PageNotFound} />
        </Switch>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
