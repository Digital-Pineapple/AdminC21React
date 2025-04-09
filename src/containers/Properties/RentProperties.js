/*
  El componente `RentProperties` es una página que presenta las propiedades disponibles para alquiler en el sistema.

  Funcionalidad principal:
  - El componente utiliza el diseño `Layout` que probablemente contiene elementos comunes como cabecera, pie de página, o barra lateral, asegurando que el diseño sea consistente en toda la aplicación.
  - Dentro del layout, el componente utiliza un `Grid` de Material-UI para organizar el contenido en un formato flexible y receptivo.
  - En el `Grid`, se coloca el componente `TabsPropertiesRent`, el cual probablemente contiene las pestañas que permiten visualizar diferentes estados o categorías de las propiedades en alquiler.
  - Se aplica un espaciado a los elementos mediante las propiedades `spacing` y `sx` de Material-UI para asegurar que el diseño sea limpio y ordenado.

  Este componente es clave para la visualización de propiedades de alquiler, ofreciendo una interfaz organizada que permite navegar a través de las propiedades disponibles.
*/
import { Grid } from "@mui/material";
import Layout from "../../components/layout/Layout";
import TabsPropertiesRent from "./TabsPropertiesRent";

const RentProperties = () => {
  return (
    <Layout>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid container spacing={2} sx={{ padding: 1 }}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TabsPropertiesRent />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default RentProperties;
