// Importamos las dependencias necesarias de React, React Router y PropTypes
import React from "react";
import { Route, Redirect } from "react-router-dom"; 
import PropTypes from "prop-types"; 

// Definimos el componente 'PrivateRouter' para proteger rutas privadas
export const PrivateRouter = ({
  isAuthenticated, // Estado de autenticación del usuario
  component: Component, // El componente que se debe renderizar si el usuario está autenticado
  ...rest // Propiedades adicionales de la ruta
}) => {
  // Guardamos la última ruta visitada en localStorage, para redirigir allí después del login si es necesario
  localStorage.setItem("lastPath", rest.location.pathname);

  return (
    <Route
      {...rest} // Pasamos las propiedades adicionales (como path)
      component={(props) =>
        isAuthenticated ? ( // Si el usuario está autenticado, renderizamos el componente
          <Component {...props} />
        ) : ( // Si no está autenticado, redirigimos a la página de login
          <Redirect to="/iniciar-sesion" />
        )
      }
    />
  );
};

// Validación de las propiedades que recibe el componente
PrivateRouter.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired, // 'isAuthenticated' debe ser un booleano y es obligatorio
  component: PropTypes.func.isRequired, // 'component' debe ser una función (el componente a renderizar) y es obligatorio
};
