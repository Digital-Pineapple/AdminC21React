import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

export const PrivateRouter = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  localStorage.setItem("lastPath", rest.location.pathname);
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/iniciar-sesion" />
        )
      }
    />
  );
};

PrivateRouter.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
