// Importamos las dependencias necesarias de React, React Router, y Material-UI
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

// Componente principal para gestionar las rutas de la aplicación
const AppRouter = () => {
  // Accedemos al contexto de autenticación para obtener el estado de autenticación y el proceso de carga
  const { autenticado, usuarioAutenticado, cargando } = useContext(AuthContext);

  // Ejecutamos la función para verificar si el usuario está autenticado cuando el componente se monta
  useEffect(() => {
    usuarioAutenticado();
  }, []); // Solo se ejecuta una vez, al montar el componente

  // Si el estado de 'cargando' es verdadero, mostramos un componente de carga mientras se verifica el estado de autenticación
  if (cargando) {
    return (
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <LoadingComponent />
      </Grid>
    );
  }

  // Si no está cargando, definimos las rutas de la aplicación
  return (
    <>
      <Router>
        <Switch>
          {/* Rutas públicas: Solo accesibles si el usuario no está autenticado */}
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
          
          {/* Rutas privadas: Solo accesibles si el usuario está autenticado */}
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

// Exportamos el componente de las rutas para ser usado en la aplicación
export default AppRouter;
