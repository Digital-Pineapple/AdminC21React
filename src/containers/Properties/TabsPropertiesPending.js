/*
  El componente `LabTabs` muestra una sección de propiedades pendientes de aprobación utilizando una interfaz basada en pestañas.

  Funcionalidad principal:
  - Se utiliza el componente `Box` de Material-UI para contener el contenido y aplicar estilos básicos de tipografía.
  - `TabContext` y `TabPanel` de `@mui/lab` permiten crear una estructura de pestañas, aunque en este caso sólo se está utilizando un `TabPanel` con valor "2".
  - Dentro de ese `TabPanel`, se renderiza el componente `PorpertiesPending`, encargado de mostrar las propiedades que están esperando aprobación por parte del administrador o moderador.
  - Se utiliza `Grid` para una disposición responsiva y organizada del título.
  - `Typography` se usa para mostrar un título estilizado con el texto traducido de `"propiedadesAprobar"`, lo que sugiere que este componente forma parte de un sistema multilenguaje.
  - El estado `value` se inicializa en "2", lo cual indica que por defecto se selecciona la segunda pestaña, aunque en esta implementación solo se muestra una.

  Nota: Existe un error tipográfico en el nombre del componente `PorpertiesPending`, debería corregirse a `PropertiesPending` para mantener coherencia y legibilidad en el proyecto.

  Este componente es útil dentro de una interfaz de administración o gestión de contenido, donde se requiere una revisión de las propiedades antes de ser publicadas en el sitio.
*/
import * as React from "react";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import PorpertiesPending from "./PorpertiesPending";
import { Grid, Typography } from "@mui/material";
import { t } from "i18next";
export default function LabTabs() {
  const [value, setValue] = React.useState("2");

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
          {t("propiedadesAprobar")}
        </Typography>
      </Grid>
      <TabContext value={value}>
        <TabPanel value="2">
          <PorpertiesPending />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
