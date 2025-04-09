/**
 * `OptionsReportLocation` es un componente que permite al usuario seleccionar una opción para evaluar la ubicación de una propiedad.
 * 
 * Muestra cuatro opciones para valorar la ubicación de la propiedad: Muy Bien, Bien, Regular y Mal.
 * Recibe el valor seleccionado y la función `handleChangeLocation` para manejar los cambios en la selección.
 * 
 * Propiedades:
 * - `selectedValueLocation`: Valor seleccionado actualmente (1 para "Muy Bien", 2 para "Bien", 3 para "Regular", 4 para "Mal").
 * - `handleChangeLocation`: Función que se ejecuta cuando se cambia la selección.
 */
import * as React from "react";
import Radio from "@mui/material/Radio";

export default function OptionsReportLocation({
  selectedValueLocation,
  handleChangeLocation,
}) {
  return (
    <div style={{ alignItems: "center" }}>
      <div>Ubicación:</div>
      <Radio
        checked={selectedValueLocation === 1}
        onChange={handleChangeLocation}
        value={1}
        name="radio-buttons"
        inputProps={{ "aria-label": "Muy Bien" }}
      />
      <label>Muy Bien</label>
      <Radio
        checked={selectedValueLocation === 2}
        onChange={handleChangeLocation}
        value={2}
        name="radio-buttons"
        inputProps={{ "aria-label": "Bien" }}
      />
      <label>Bien</label>
      <Radio
        checked={selectedValueLocation === 3}
        onChange={handleChangeLocation}
        value={3}
        name="radio-buttons"
        inputProps={{ "aria-label": "Regular" }}
      />
      <label>Regular</label>
      <Radio
        checked={selectedValueLocation === 4}
        onChange={handleChangeLocation}
        value={4}
        name="radio-buttons"
        inputProps={{ "aria-label": "Mal" }}
      />
      <label>Mal</label>
    </div>
  );
}
