import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";

export const PublicRouter = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        !isAuthenticated ? <Component {...props} /> : <Redirect to="/Perfil" />
      }
    />
  );
};

PublicRouter.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
