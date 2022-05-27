import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

// mount function to initialize the app

const mount = (el, { isSignedIn, onNavigate, defaultHistory, initialPath }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  // when URL changes or App shell passes navigation to About page
  // whenever navigation occurs, this history object excutes this function
  // at some point in time the App-shell decides to mount the About page,
  // it will create a call back onNavigate(), call mount() function and
  // provide it with callback() as onNavigate()
  if (onNavigate) {
    // history object has an event listener tied to it called listen()
    history.listen(onNavigate);
  }

  // create a memory history actively for using memory history
  ReactDOM.render(<App history={history} isSignedIn={isSignedIn} />, el);

  // 2. Focus point. Communication between Micro Frontends
  // Up Communication: About page communicates up to App-shell
  // Micro Frontend App return something to exchange state with App-shell: onParentNavigate()
  // onParentNavigate() is for navigation. onParentNavigate() is caleld by history object
  // therefore will receive the location object
  return {
    onParentNavigate({ pathname: nextPathname }) {
      // nextPathname of Container
      console.log("Container navigiation occurs within About Micro Frontend");
      console.log(location); // because of history.listen(onParentNavigate); history calls this function
      const { pathname } = history.location;
      const currentPathName = pathname;
      if (currentPathName !== nextPathname) {
        history.push(nextPathname); // actual navigation to the new page/route
      }
    },
  };
};

// 1. If development mode
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_about-dev-root");
  // defaultHistory is for running About Micro Frontend in isolation
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
