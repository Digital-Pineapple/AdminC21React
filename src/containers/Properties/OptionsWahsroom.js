/*
  El componente `OptionsWashRoom` es un conjunto de botones de opción (radio buttons) que permite al usuario seleccionar si la propiedad cuenta o no con un cuarto de lavado.

  Funcionalidad principal:
  - Se renderiza una pregunta: "¿Cuenta con cuarto de lavado?" junto con dos opciones: "Si" y "No".
  - Las opciones de "Si" y "No" están implementadas con los componentes `Radio` de Material-UI, permitiendo que el usuario seleccione una opción.
  - La selección del valor se gestiona a través de `selectedValueWashRoom`, que se compara con los valores "si" y "no", y el estado se actualiza con la función `handleChangeWashRoom`.

  En resumen, este componente permite a los usuarios especificar si la propiedad incluye un cuarto de lavado, facilitando la recolección de información de la propiedad de manera clara y sencilla.
*/
import * as React from "react";
import Radio from "@mui/material/Radio";

export default function OptionsWashRoom({
  selectedValueWashRoom,
  handleChangeWashRoom,
}) {
  //   const [selectedValue, setSelectedValue] = React.useState("a");

  //   const handleChange = (event) => {
  //     setSelectedValue(event.target.value);
  //   };

  return (
    <div style={{ alignItems: "center" }}>
      <div>¿Cuenta con cuarto de lavado?</div>
      <label>Si</label>
      <Radio
        checked={selectedValueWashRoom === "si"}
        onChange={handleChangeWashRoom}
        value="si"
        name="radio-buttons"
        inputProps={{ "aria-label": "Si" }}
      />
      <label>No</label>
      <Radio
        checked={selectedValueWashRoom === "no"}
        onChange={handleChangeWashRoom}
        value="no"
        name="radio-buttons"
        inputProps={{ "aria-label": "No" }}
      />
    </div>
  );
}
