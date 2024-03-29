import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PublicRouter } from "./PublicRoute";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import VerifyAccount from "../components/auth/VerifyAccount";
import ResetPassword from "../components/auth/ResetPassword";
import AdminRoutes from "./AdminRoutes";
import { PrivateRouter } from "./PrivateRoute";
import AuthContext from "../context/auth/AuthContext";
import { Box, Grid } from "@mui/material";
import LoadingComponent from "../components/loading/LoadingComponent";

const AppRouter = () => {
  const { autenticado, usuarioAutenticado, cargando } = useContext(AuthContext);
  useEffect(() => {
    usuarioAutenticado();
  }, []);

  if (cargando) {
    return (
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <LoadingComponent />
      </Grid>
    );
  }
  return (
    <>
      <Router>
        <Switch>
          <PublicRouter
            exact
            path="/iniciar-sesion"
            component={Login}
            isAuthenticated={autenticado}
          />
          <PublicRouter
            exact
            path="/registrarme"
            component={Register}
            isAuthenticated={autenticado}
          />
          <PublicRouter
            exact
            path="/verificar-cuenta"
            component={VerifyAccount}
            isAuthenticated={autenticado}
          />
          <PublicRouter
            exact
            path="/Olvide-mi-Acceso"
            component={ResetPassword}
            isAuthenticated={autenticado}
          />
          <PrivateRouter
            path="/"
            component={AdminRoutes}
            isAuthenticated={autenticado}
          />
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
