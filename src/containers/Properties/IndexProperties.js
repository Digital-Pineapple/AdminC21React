/*
  El componente `Properties` es responsable de renderizar la vista de propiedades dentro del layout principal.

  Funcionalidad principal:
  - Utiliza el componente `Layout` para estructurar la página, lo que asegura que se mantenga la consistencia en la apariencia y funcionalidad en toda la aplicación.
  - Dentro del layout, el componente `TabsProperties` es renderizado, lo que permite navegar entre diferentes secciones o vistas de propiedades.
  - La estructura de la interfaz de usuario se organiza mediante el sistema de grid de Material-UI, asegurando una disposición flexible y responsive.

  Este componente actúa como un contenedor para la vista de propiedades, que puede incluir varias pestañas o filtros que el usuario puede utilizar para interactuar con los datos de las propiedades.
*/
import { Grid } from "@mui/material";
import Layout from "../../components/layout/Layout";
import TabsProperties from "./TabsProperties";

const Properties = () => {
  return (
    <Layout>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid container spacing={2} sx={{ padding: 1 }}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TabsProperties />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Properties;
