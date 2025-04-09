/**
 * El componente `LoadingComponent` muestra un indicador de carga simple. Utiliza un contenedor `div` con clase `center` 
 * para centrar el contenido y dentro de él, se renderiza otro `div` con clase `sppiner`, que probablemente esté 
 * estilizado para mostrar un spinner de carga.
 */
import React from "react";

const LoadingComponent = () => {
  return (
    <div className="center">
      <div className="sppiner" />
    </div>
  );
};

export default LoadingComponent;
