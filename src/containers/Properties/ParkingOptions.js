/*
  El componente `ParkingOptions` permite al usuario seleccionar si la propiedad cuenta con estacionamiento, usando dos botones de opción (radio buttons).

  Funcionalidad principal:
  - La pregunta "¿Cuenta con estacionamiento?" se renderiza dinámicamente usando `t("cuentaConEstacionamiento")` para la internacionalización del texto, permitiendo que el componente sea traducido a diferentes idiomas.
  - Las opciones "Si" y "No" están implementadas usando los componentes `Radio` de Material-UI. Los valores se gestionan mediante el estado `selectedValueParking` y se actualizan a través de la función `handleChangeParking`.
  - La traducción de las opciones "Si" y "No" también se maneja a través de `t("si")` y `t("no")` para asegurar la compatibilidad multilingüe.

  Este componente facilita la recolección de datos sobre la disponibilidad de estacionamiento en una propiedad y es completamente compatible con la internacionalización de la aplicación.
*/
import * as React from "react";
import Radio from "@mui/material/Radio";
import { useTranslation } from "react-i18next";

export default function ParkingOptions({
  selectedValueParking,
  handleChangeParking,
}) {
  const { t } = useTranslation();
  //   const [selectedValue, setSelectedValue] = React.useState("a");

  //   const handleChange = (event) => {
  //     setSelectedValue(event.target.value);
  //   };

  return (
    <div style={{ alignItems: "center" }}>
      <div>{t("cuentaConEstacionamiento")}</div>
      <label>{t("si")}</label>
      <Radio
        checked={selectedValueParking === "si"}
        onChange={handleChangeParking}
        value="si"
        name="radio-buttons"
        inputProps={{ "aria-label": "Si" }}
      />
      <label>{t("no")}</label>
      <Radio
        checked={selectedValueParking === "no"}
        onChange={handleChangeParking}
        value="no"
        name="radio-buttons"
        inputProps={{ "aria-label": "No" }}
      />
    </div>
  );
}
