/*
  El componente `FractionamientOptions` permite seleccionar si una propiedad pertenece a un fraccionamiento.
  Utiliza el componente `Radio` de Material-UI para mostrar dos opciones: "Sí" y "No".

  Funcionalidad principal:
  - Muestra dos botones de radio para que el usuario elija entre "Sí" o "No" sobre si la propiedad pertenece a un fraccionamiento.
  - El valor seleccionado se gestiona a través de `selectedValueFractionamient` y se actualiza mediante la función `handleChangeFractionamient`.

  Este componente se utiliza para capturar la opción relacionada con el fraccionamiento de una propiedad.
*/
import * as React from "react";
import Radio from "@mui/material/Radio";

export default function FractionamientOptions({
  selectedValueFractionamient,
  handleChangeFractionamient,
}) {
  //   const [selectedValue, setSelectedValue] = React.useState("a");

  //   const handleChange = (event) => {
  //     setSelectedValue(event.target.value);
  //   };

  return (
    <div style={{ alignItems: "center" }}>
      <div>¿Pertenece a un fraccionamiento?</div>
      <label>Si</label>
      <Radio
        checked={selectedValueFractionamient === "si"}
        onChange={handleChangeFractionamient}
        value="si"
        name="radio-buttons"
        inputProps={{ "aria-label": "Si" }}
      />
      <label>No</label>
      <Radio
        checked={selectedValueFractionamient === "no"}
        onChange={handleChangeFractionamient}
        value="no"
        name="radio-buttons"
        inputProps={{ "aria-label": "No" }}
      />
    </div>
  );
}
