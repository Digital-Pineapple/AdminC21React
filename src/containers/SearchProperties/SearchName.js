/**
 * `SearchName` es un componente que permite al usuario ingresar un nombre o dirección.
 * - Utiliza el componente `TextField` de Material-UI para capturar el texto ingresado.
 * - El valor ingresado se pasa al componente padre a través de la función `cambio` proporcionada como prop.
 * - El texto del campo de entrada es etiquetado como "nombreDirección", y la etiqueta se traduce utilizando `react-i18next`.
 * 
 * Funcionalidades:
 * - El valor ingresado en el campo de texto es enviado al componente padre cada vez que el usuario cambia el contenido del campo.
 * - La traducción de la etiqueta del campo de texto se maneja mediante la función `t` de `react-i18next`.
 */
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useTranslation } from "react-i18next";

export default function SearchName({ cambio }) {
  const { t } = useTranslation();
  return (
    <>
      <TextField
        onChange={(e) => cambio(e.target.value)}
        fullWidth
        id="standard-basic"
        label={t("nombreDirección")}
        variant="standard"
      />
    </>
  );
}
