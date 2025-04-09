/**
 * `OptionsReportServicio` es un componente que permite al usuario seleccionar una opción para evaluar el servicio recibido.
 * 
 * Muestra cuatro opciones para valorar el servicio: Muy Bien, Bien, Regular y Mal.
 * Recibe el valor seleccionado y la función `handleChangeServicio` para manejar los cambios en la selección.
 * 
 * Propiedades:
 * - `selectedValueServicio`: Valor seleccionado actualmente (1 para "Muy Bien", 2 para "Bien", 3 para "Regular", 4 para "Mal").
 * - `handleChangeServicio`: Función que se ejecuta cuando se cambia la selección.
 */
import * as React from "react";
import Radio from "@mui/material/Radio";

export default function OptionsReportServicio({
  selectedValueServicio,
  handleChangeServicio,
}) {
  return (
    <div style={{ alignItems: "center" }}>
      <div>El servicio que ha recibido es:</div>
      <Radio
        checked={selectedValueServicio === 1}
        onChange={handleChangeServicio}
        value={1}
        name="radio-buttons"
        inputProps={{ "aria-label": "Muy Bien" }}
      />
      <label>Muy Bien</label>
      <Radio
        checked={selectedValueServicio === 2}
        onChange={handleChangeServicio}
        value={2}
        name="radio-buttons"
        inputProps={{ "aria-label": "Bien" }}
      />
      <label>Bien</label>
      <Radio
        checked={selectedValueServicio === 3}
        onChange={handleChangeServicio}
        value={3}
        name="radio-buttons"
        inputProps={{ "aria-label": "Regular" }}
      />
      <label>Regular</label>
      <Radio
        checked={selectedValueServicio === 4}
        onChange={handleChangeServicio}
        value={4}
        name="radio-buttons"
        inputProps={{ "aria-label": "Mal" }}
      />
      <label>Mal</label>
    </div>
  );
}
