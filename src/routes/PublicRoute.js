// Importamos las dependencias necesarias de React, React Router y PropTypes
import React from "react";
import { Redirect, Route } from "react-router-dom"; 
import PropTypes from "prop-types"; 

// Definimos el componente 'PublicRouter' para las rutas públicas
export const PublicRouter = ({
  isAuthenticated, // Estado de autenticación del usuario
  component: Component, // El componente que se debe renderizar si el usuario no está autenticado
  ...rest // Propiedades adicionales de la ruta
}) => {
  return (
    <Route
      {...rest} // Pasamos las propiedades adicionales (como path)
      component={(props) =>
        // Si el usuario no está autenticado, renderizamos el componente público
        !isAuthenticated ? <Component {...props} /> : 
        // Si el usuario está autenticado, lo redirigimos a su perfil
        <Redirect to="/Perfil" />
      }
    />
  );
};

// Validación de las propiedades que recibe el componente
PublicRouter.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired, // 'isAuthenticated' debe ser un booleano y es obligatorio
  component: PropTypes.func.isRequired, // 'component' debe ser una función (el componente a renderizar) y es obligatorio
};
