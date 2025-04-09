/**
 * El componente `Commission` permite al usuario seleccionar si desea compartir una comisión.
 * 
 * Funcionalidad:
 * 1. Muestra una pregunta con dos opciones de selección: "Sí" o "No".
 * 2. Usa botones de radio para que el usuario elija entre compartir o no compartir la comisión.
 * 3. El estado seleccionado se controla a través del prop `selectedValueCommission` y se actualiza mediante la función `handleChangeCommission`.
 * 4. La traducción de las etiquetas se maneja con `useTranslation` para adaptarse a diferentes idiomas.
 */
import * as React from "react";
import Radio from "@mui/material/Radio";
import { useTranslation } from "react-i18next";

export default function Commission({
  selectedValueCommission,
  handleChangeCommission,
}) {
  const { t } = useTranslation();
  return (
    <div style={{ alignItems: "center" }}>
      <div>{t("deseaCompartirComision")}</div>
      <label>{t("si")}</label>
      <Radio
        checked={selectedValueCommission === "si"}
        onChange={handleChangeCommission}
        value="si"
        name="radio-buttons"
        inputProps={{ "aria-label": "Si" }}
      />
      <label>{t("no")}</label>
      <Radio
        checked={selectedValueCommission === "no"}
        onChange={handleChangeCommission}
        value={"no"}
        name="radio-buttons"
        inputProps={{ "aria-label": "No" }}
      />
    </div>
  );
}
