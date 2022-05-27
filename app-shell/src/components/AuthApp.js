import { mount } from "auth/AuthApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      // this onSignin callback() is passed down all the way down to the button
      // the user may click in some point in time
      // onSignIn,
      onSignIn: () => {
        console.log("User signs in");
        // state passed from container/src/App.js
        // duplicate property name, but simple and clear
        onSignIn();
      },
    });

    history.listen(onParentNavigate);
  }, []);

  // load it up to the DOM
  return <div ref={ref}></div>;
};
