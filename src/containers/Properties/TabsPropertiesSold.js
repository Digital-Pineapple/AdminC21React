/*
  El componente `TabsPropertiesSold` muestra una interfaz de pestañas para visualizar las propiedades que han sido publicadas como vendidas.

  Funcionalidad principal:
  - Se utiliza el componente `Box` de Material-UI para estructurar el diseño y aplicar estilos básicos de tipografía.
  - `TabContext` y `TabPanel` de `@mui/lab` se usan para organizar y renderizar las pestañas, con el valor "3" asignado a la pestaña activa, lo que indica que la vista predeterminada es para las propiedades vendidas.
  - Dentro de la pestaña, se renderiza el componente `PropertiesPublishSold`, que probablemente sea responsable de mostrar las propiedades que ya han sido vendidas.
  - `Grid` se usa para disponer el título de la sección de manera responsiva, asegurando que se ajuste adecuadamente a diferentes tamaños de pantalla.
  - `Typography` se utiliza para mostrar el título de la pestaña, el cual se traduce dinámicamente usando la función `t` de `react-i18next`. El texto mostrado es `"propiedadesVendidas"`, que indica que esta pestaña muestra propiedades vendidas.
  - El estado `value` se inicializa en "3", lo que significa que la tercera pestaña estará activa de manera predeterminada.

  Este componente es útil en un sistema de administración de propiedades donde el administrador o usuario puede revisar todas las propiedades que han sido vendidas.

  Nota: Asegúrate de que los textos y los valores del estado sean consistentes en toda la aplicación para evitar posibles errores de UI y UX.
*/
import * as React from "react";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import PropertiesPublishSold from "./PropertiesPublishSold";
import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function TabsPropertiesSold() {
  const { t } = useTranslation();
  const [value, setValue] = React.useState("3");

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
          {t("propiedadesVendidas")}
        </Typography>
      </Grid>
      <TabContext value={value}>
        <TabPanel value="3">
          <PropertiesPublishSold />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
