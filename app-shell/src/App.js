import React, { lazy, Suspense, useState, useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { createBrowserHistory } from "history";
import Header from "./components/Header";
import Progress from "./components/Progress";

const AboutLazy = lazy(() => import("./components/AboutApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));
const DashboardLazy = lazy(() => import("./components/DashboardApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const history = createBrowserHistory();

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push("/dashboard");
    }
  }, [isSignedIn]);

  return (
    <StylesProvider generateClassName={generateClassName}>
      {/* create Browser History object behind the scene*/}
      <Router history={history}>
        <div>
          {/* update login/logout button on header */}
          <Header
            onSignOut={() => setIsSignedIn(false)}
            isSignedIn={isSignedIn}
          ></Header>
          <Suspense fallback={<Progress />}>
            <Switch>
              {/* domain/auth, domain/auth/signin,  domain/auth/*  */}
              {/* <Route path="/auth" component={AuthLazy}></Route> */}

              <Route path="/auth">
                {/* when AuthLazy is called/displayed, call setState() */}
                <AuthLazy onSignIn={() => setIsSignedIn(true)}></AuthLazy>
              </Route>
              <Route path="/dashboard">
                {!isSignedIn && <Redirect to="/"></Redirect>}
                <DashboardLazy></DashboardLazy>
              </Route>
              {/* domain/[other]  */}
              {/* <Route path="/" component={AboutLazy}></Route> */}
              <Route path="/">
                <AboutLazy
                  isSignedIn={isSignedIn}
                  onSignIn={() => setIsSignedIn(true)}
                ></AboutLazy>
              </Route>
            </Switch>
          </Suspense>
        </div>
      </Router>
    </StylesProvider>
  );
};
