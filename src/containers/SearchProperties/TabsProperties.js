/**
 * `LabTabs` es un componente que maneja la visualización de contenido dentro de una pestaña utilizando el componente `TabContext` de Material-UI.
 * - Utiliza `TabContext` para gestionar el valor de la pestaña activa.
 * - Actualmente, solo tiene una pestaña (`value="1"`) que renderiza el componente `PropertiesPublish`.
 * - El componente `TabPanel` se utiliza para mostrar el contenido de la pestaña activa.
 * 
 * En este caso, la pestaña activa siempre es "1", y dentro de ella se muestra el componente `PropertiesPublish`, que probablemente se encargue de mostrar las propiedades publicadas.
 */
import * as React from "react";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import PropertiesPublish from "./PropertiesPublish";
export default function LabTabs() {
  const [value] = React.useState("1");

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <TabPanel value="1">
          <PropertiesPublish />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
