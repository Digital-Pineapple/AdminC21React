/*
  El componente `LabTabs` gestiona la visualización de pestañas en la interfaz de usuario y muestra las propiedades aprobadas.

  Funcionalidad principal:
  - El componente utiliza `Box` de Material-UI para envolver todo el contenido, asegurando una estructura flexible que puede adaptarse a diferentes tamaños de pantalla.
  - Se emplea `TabContext` y `TabPanel` de la librería `@mui/lab` para crear un sistema de pestañas, permitiendo al usuario navegar entre diferentes vistas o categorías de contenido.
  - Dentro del `TabPanel`, se muestra el componente `PropertiesPublish`, que es responsable de mostrar las propiedades que han sido aprobadas en el sistema. Esto puede incluir detalles sobre el estado de las propiedades, como su publicación y otros atributos.
  - Se utiliza `Grid` para manejar el diseño responsivo, asegurando que el título "Propiedades Aprobadas" se alinee adecuadamente y se visualice correctamente en distintas pantallas.
  - `Typography` de Material-UI es utilizado para estilizar el texto, en este caso, para mostrar el título de la sección en un formato más destacado.
  - El estado `value` controla qué pestaña está seleccionada en un momento dado. Inicialmente, se establece en "1" (la primera pestaña), pero se puede cambiar mediante el evento `handleChange`, permitiendo al usuario navegar entre las pestañas.

  Este componente es útil para la gestión y visualización de propiedades aprobadas en una plataforma, proporcionando una experiencia de usuario interactiva y fácil de navegar.
*/
import * as React from "react";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import PropertiesPublish from "./PropertiesPublish";
import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function LabTabs() {
  const { t } = useTranslation();
  const [value, setValue] = React.useState("1");

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
          {t("propiedadesAprobadas")}
        </Typography>
      </Grid>
      <TabContext value={value}>
        <TabPanel value="1">
          <PropertiesPublish />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
