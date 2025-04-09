/*
  El componente `PorpertiesPending` es responsable de mostrar las propiedades pendientes de una manera organizada y en un formato de cuadrícula (grid). 

  Funcionalidad principal:
  - El componente utiliza el contexto `PropertiesContext` para obtener las propiedades pendientes a través de la función `GetPropertiesPending`.
  - En el `useEffect`, `GetPropertiesPending` se ejecuta al cargar el componente para obtener las propiedades pendientes desde el backend.
  - Si hay propiedades en la lista `properties`, se mapean y se presentan en tarjetas individuales utilizando el componente `CardProperty`. Cada propiedad se muestra dentro de un `Grid` que se ajusta a diferentes tamaños de pantalla (responsive).
  - Si no se encuentran propiedades pendientes, se muestra un componente `NoDataComponent`, lo que indica que no hay datos disponibles.

  Este componente asegura que los usuarios vean las propiedades pendientes de una manera clara y, si no hay datos, les muestra un mensaje adecuado.
*/
import React, { useContext, useEffect } from "react";
import PropertiesContext from "../../context/Properties/PropertiesContext";
import CardProperty from "../../components/Cards/CardProperty";
import { Grid } from "@mui/material";
import NoDataComponent from "../../components/loading/NoDataComponent";
const PorpertiesPending = () => {
  const { GetPropertiesPending, properties } = useContext(PropertiesContext);
  useEffect(() => {
    GetPropertiesPending();
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

export default PorpertiesPending;
