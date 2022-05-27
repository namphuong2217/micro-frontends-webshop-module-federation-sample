import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

export default ({ history, isSignedIn }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        {/* Memory History, isntead of lettign react dom create browser history for us */}
        <Router history={history}>
          <Switch>
            <Route exact path="/about" component={Pricing}></Route>
            <Route exact path="/">
              <Landing isSignedIn={isSignedIn}></Landing>
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
