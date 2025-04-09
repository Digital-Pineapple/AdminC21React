/*
  El componente `Properties` es similar al componente anterior, pero en este caso se centra en mostrar propiedades pendientes.

  Funcionalidad principal:
  - El componente `Layout` es utilizado para asegurar que la vista se ajuste a la estructura global del sitio.
  - Dentro del layout, se renderiza el componente `TabsPropertiesPending`, que probablemente permita la navegación entre las distintas pestañas o vistas relacionadas con propiedades que están pendientes de algún proceso o acción.
  - Se utiliza el sistema de grid de Material-UI para organizar los elementos de la interfaz de usuario de manera flexible y adaptativa.

  En resumen, este componente muestra las propiedades que están en estado pendiente, permitiendo la interacción del usuario con estas propiedades en una vista estructurada y bien organizada.
*/
import { Grid } from "@mui/material";
import Layout from "../../components/layout/Layout";
import TabsPropertiesPending from "./TabsPropertiesPending";

const Properties = () => {
  return (
    <Layout>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid container spacing={2} sx={{ padding: 1 }}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TabsPropertiesPending />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Properties;
