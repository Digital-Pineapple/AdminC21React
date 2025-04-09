/*
  El componente `PropertiesPublish` se encarga de mostrar las propiedades publicadas de una manera organizada en una cuadrícula (grid).

  Funcionalidad principal:
  - El componente utiliza el contexto `PropertiesContext` para obtener las propiedades publicadas a través de la función `GetPropertiesPublish`.
  - Al cargar el componente, se ejecuta el `useEffect` para llamar a `GetPropertiesPublish` y obtener las propiedades publicadas desde el backend.
  - Si hay propiedades en la lista `properties`, se mapean y se muestran dentro de tarjetas individuales utilizando el componente `CardProperty`. Las propiedades se organizan en un `Grid` con un diseño adaptable a distintos tamaños de pantalla (responsive).
  - Si no hay propiedades publicadas, se muestra un componente `NoDataComponent`, que indica que no hay datos disponibles para mostrar.

  Este componente proporciona una forma clara y accesible de ver las propiedades publicadas y maneja de manera eficiente la falta de datos.
*/
import React, { useContext, useEffect } from "react";
import PropertiesContext from "../../context/Properties/PropertiesContext";
import CardProperty from "../../components/Cards/CardProperty";
import { Grid } from "@mui/material";
import NoDataComponent from "../../components/loading/NoDataComponent";
const PropertiesPublish = () => {
  const { GetPropertiesPublish, properties } =
    useContext(PropertiesContext);
  useEffect(() => {
    GetPropertiesPublish();
  }, []);

  return (
    <div>
      <Grid container spacing={2}>
        {properties.length > 0 ? (
          properties.map((property) => (
            <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
              <CardProperty property={property} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <NoDataComponent />
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default PropertiesPublish;
