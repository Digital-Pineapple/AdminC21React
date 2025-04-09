/*
  El componente `SoldProperties` muestra las propiedades que ya han sido vendidas en el sistema.

  Funcionalidad principal:
  - El componente utiliza el `Layout` como estructura base, asegurando que el diseño sea consistente en todas las páginas de la aplicación, y proporcionando elementos comunes como cabecera, pie de página y/o barra lateral.
  - Dentro del `Layout`, se utiliza un `Grid` de Material-UI para organizar el contenido de manera responsiva y flexible. Esto asegura que el contenido se ajuste correctamente en diferentes tamaños de pantalla.
  - El componente `TabsPropertiesSold` se coloca dentro de este `Grid`, y se supone que gestiona las pestañas o vistas que presentan las propiedades vendidas. Esto permite al usuario navegar entre diferentes categorías o filtros de propiedades vendidas.
  - El espaciado se maneja con la propiedad `sx` de Material-UI para garantizar que los elementos tengan suficiente espacio entre sí, proporcionando un diseño limpio y organizado.

  Este componente es útil para los administradores o usuarios que desean revisar las propiedades que ya han sido vendidas, permitiendo una visión clara y ordenada de las transacciones completadas.
*/
import { Grid } from "@mui/material";
import Layout from "../../components/layout/Layout";
import TabsPropertiesSold from "./TabsPropertiesSold";

const SoldProperties = () => {
  return (
    <Layout>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid container spacing={2} sx={{ padding: 1 }}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TabsPropertiesSold />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default SoldProperties;
