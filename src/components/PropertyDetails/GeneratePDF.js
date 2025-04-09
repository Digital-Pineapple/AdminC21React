/**
 * El componente `GeneratePDF` se encarga de mostrar un botón que permite descargar un PDF 
 * con los detalles de una propiedad. El botón solo se muestra si el estado de la propiedad 
 * es 3, 4 o 5, lo que indica que la propiedad está en un estado adecuado para ser descargada. 
 * 
 * Al hacer clic en el botón, se llama a la función `DownloadPDF` desde el contexto `PropertiesContext` 
 * pasando el `id` de la propiedad para generar y descargar el PDF correspondiente.
 * 
 * Utiliza Material-UI para la disposición de los elementos y el botón, con un diseño 
 * personalizado utilizando el color #ffb300 y un icono de descarga al lado del texto.
 * 
 * El componente también utiliza `react-i18next` para manejar la traducción del texto 
 * del botón de acuerdo con el idioma configurado en la aplicación.
 * 
 * Propiedades recibidas:
 * - `id`: El identificador de la propiedad para la cual se genera el PDF.
 * - `status`: El estado de la propiedad, que se verifica para determinar si el botón debe mostrarse.
 */
import React, { useContext } from "react";
import { Button, Grid } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import PropertiesContext from "../../context/Properties/PropertiesContext";
import { useTranslation } from "react-i18next";

export default function GeneratePDF({ id, status }) {
  const { t } = useTranslation();
  const { DownloadPDF } = useContext(PropertiesContext);
  return (
    <>
      {(status === 3 || status === 4 || status === 5) && (
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Button
            onClick={() => DownloadPDF(id)}
            fullWidth
            variant="contained"
            sx={{
              color: "black",
              backgroundColor: "#ffb300",
              "&:hover": {
                color: "black",
                backgroundColor: "#ffb300",
              },
            }}
          >
            {t("descargarFicha")} <CloudDownloadIcon sx={{ marginLeft: 2 }} />
          </Button>
        </Grid>
      )}
    </>
  );
}
