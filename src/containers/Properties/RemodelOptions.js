/*
  El componente `RemodelOptions` se utiliza para permitir al usuario seleccionar si una propiedad está en remodelación actualmente.

  Funcionalidad principal:
  - Utiliza el hook `useTranslation` de `react-i18next` para manejar la internacionalización y mostrar los textos correspondientes en el idioma seleccionado (por ejemplo, "En Remodelación Actualmente", "Sí" y "No").
  - Proporciona dos opciones de radio (`Radio` de MUI) para que el usuario seleccione entre "Sí" o "No" respecto a si la propiedad está en remodelación.
  - Recibe dos props:
    - `selectedValueRemodel`: El valor seleccionado para saber si la propiedad está en remodelación.
    - `handleChangeRemodel`: Función de manejo del cambio de valor, que actualiza el estado cuando el usuario selecciona una opción.
  - Si el valor seleccionado es "sí", el radio correspondiente se marcará como seleccionado, y lo mismo ocurre con "no".

  Este componente es útil para recopilar información sobre el estado de remodelación de una propiedad en un formulario, asegurando que se puedan gestionar y registrar estos datos adecuadamente.
*/
import * as React from "react";
import Radio from "@mui/material/Radio";
import { useTranslation } from "react-i18next";

export default function RemodelOptions({
  selectedValueRemodel,
  handleChangeRemodel,
}) {
  const { t } = useTranslation();
  //   const [selectedValue, setSelectedValue] = React.useState("a");

  //   const handleChange = (event) => {
  //     setSelectedValue(event.target.value);
  //   };

  return (
    <div style={{ alignItems: "center" }}>
      <div>{t("enRemodelacionActualmente")}</div>
      <label>{t("si")}</label>
      <Radio
        checked={selectedValueRemodel === "si"}
        onChange={handleChangeRemodel}
        value="si"
        name="radio-buttons"
        inputProps={{ "aria-label": "Si" }}
      />
      <label>{t("no")}</label>
      <Radio
        checked={selectedValueRemodel === "no"}
        onChange={handleChangeRemodel}
        value="no"
        name="radio-buttons"
        inputProps={{ "aria-label": "No" }}
      />
    </div>
  );
}
