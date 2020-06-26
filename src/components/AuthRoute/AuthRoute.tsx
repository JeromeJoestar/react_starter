import React, { FC } from "react";
import { Route, RouteProps } from "react-router-dom";

import { SampleContext } from "@src/contexts/SampleContext";

export const AuthRoute: FC<RouteProps> = ({ children, ...props }) => {
  const { user } = React.useContext(SampleContext);

  React.useLayoutEffect(() => {
    // Can implement auth guard here
  }, []);

  return user ? <Route {...props}>{children}</Route> : null;
};
