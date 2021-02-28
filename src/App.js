import React from "react";
import SignIn from "./components/Login/SignIn";
import SignUp from "./components/Login/SignUp";
import Dashboard from "./components/Dashboard";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'alertifyjs/build/css/alertify.min.css';

/*Animation Library Initialization */
AOS.init({
  once: true
});


function App() {

  return (
    <>
      <BrowserRouter>
        <Switch>
        <Route exact path="/">
            <SignIn />
          </Route>

          <Route path="/sign-up">
            <SignUp />
          </Route>

          <Route path="*">
            <Dashboard/>
          </Route>


        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
