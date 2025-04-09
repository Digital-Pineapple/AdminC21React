/*
  El componente `PropertiesPublishRent` se encarga de mostrar las propiedades publicadas que están en alquiler. 

  Funcionalidad principal:
  - Utiliza el contexto `PropertiesContext` para obtener las propiedades en alquiler a través de la función `GetPropertiesPublishRent`.
  - Al cargar el componente, se ejecuta el `useEffect` para obtener las propiedades publicadas en alquiler desde el backend.
  - Si existen propiedades en la lista `properties`, se mapean y se muestran dentro de tarjetas individuales utilizando el componente `CardProperty`. Las propiedades se organizan en una cuadrícula (`Grid`) con un diseño responsivo.
  - Si no hay propiedades publicadas en alquiler, se muestra el componente `NoDataComponent`, que indica que no hay datos disponibles.

  Este componente permite a los usuarios ver las propiedades que están disponibles para alquiler, y maneja el caso en el que no hay propiedades publicadas.
*/
import React, { useContext, useEffect } from "react";
import PropertiesContext from "../../context/Properties/PropertiesContext";
import CardProperty from "../../components/Cards/CardProperty";
import { Grid } from "@mui/material";
import NoDataComponent from "../../components/loading/NoDataComponent";

const PropertiesPublishRent = () => {
  const { GetPropertiesPublishRent, properties } =
    useContext(PropertiesContext);
  useEffect(() => {
    GetPropertiesPublishRent();
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

export default PropertiesPublishRent;
