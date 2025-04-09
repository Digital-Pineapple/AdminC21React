/*
  El componente `TabsPropertiesRent` muestra una interfaz de pestañas para visualizar las propiedades que han sido publicadas para alquiler.

  Funcionalidad principal:
  - Se utiliza el componente `Box` de Material-UI para estructurar el diseño y aplicar estilos básicos de tipografía.
  - `TabContext` y `TabPanel` de `@mui/lab` se usan para organizar y renderizar las pestañas, con el valor "4" asignado a la pestaña activa, lo que indica que la vista predeterminada es para las propiedades en alquiler.
  - Dentro de la pestaña, se renderiza el componente `PropertiesPublishRent`, que probablemente sea responsable de mostrar las propiedades que están disponibles para alquilar.
  - `Grid` se usa para disponer el título de la sección de manera responsiva, asegurando que se ajuste adecuadamente a diferentes tamaños de pantalla.
  - `Typography` se utiliza para mostrar el título de la pestaña, el cual se traduce dinámicamente usando la función `t` de `react-i18next`. El texto mostrado es `"propiedadesRentadas"`, que indica que esta pestaña muestra propiedades en alquiler.
  - El estado `value` se inicializa en "4", lo que significa que la cuarta pestaña estará activa de manera predeterminada.

  Este componente es útil en un sistema de administración de propiedades donde el administrador o usuario puede revisar todas las propiedades disponibles para alquiler.

  Nota: Asegúrate de que los textos y los valores del estado sean consistentes en toda la aplicación para evitar posibles errores de UI y UX.
*/
import * as React from "react";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import PropertiesPublishRent from "./PropertiesPublishRent";
import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function TabsPropertiesRent() {
  const { t } = useTranslation();
  const [value, setValue] = React.useState("4");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
        <Typography
          fontWeight="bold"
          fontFamily="monospace"
          variant="h5"
          sx={{ color: "black" }}
        >
          {t("propiedadesRentadas")}
        </Typography>
      </Grid>
      <TabContext value={value}>
        <TabPanel value="4">
          <PropertiesPublishRent />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
