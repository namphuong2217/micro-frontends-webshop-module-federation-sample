import { mount } from "about/AboutApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default () => {
  const ref = useRef(null);
  // the browser history object. history object is how we navigate around. A copy of browser history
  const history = useHistory();

  // 1. Focus point
  // Communication between Micro Frontends
  // Down Communication: App-shell communicates down to About page
  useEffect(() => {
    // 2. Focus point. Communication between Micro Frontends
    // Up Communication: About page communicates up to App-shell
    // Micro Frontend App return something to exchange state with App-shell: onParentNavigate()
    // onParentNavigate() is for navigation
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      // how to know where the About page navigates to?
      // - the history.listen() function/API gives an object location which has information
      // about the navigation and routing and history
      // pathname is a part of this object
      // pathname: nextPathname: rename argument

      onNavigate: ({ pathname: nextPathname }) => {
        console.log("App shell passes navigation to About page");
        console.log("pathname: ", nextPathname);
        // Path we are currently at inside App-shell
        const { pathname } = history.location;
        const currentPathname = pathname;
        // Navigate to the new path and update Browser History pathname
        // and avoid infinite loop with if condition
        if (currentPathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });

    // 2. Focus point
    // Anytime navigation after navigating to About page occurs
    // (we are currently at About page) we call onParentNavigate()
    history.listen(onParentNavigate);
  }, []); // run this use effect only once when AboutApp first rendered on the screen

  return <div ref={ref}></div>;
};
