/**
 * `OptionsReport` es un componente que permite al usuario seleccionar una opción de compra/renta para una propiedad mediante botones de radio.
 * 
 * Muestra dos opciones (Sí/No) para considerar una propiedad como alternativa de compra o renta. 
 * Recibe el valor seleccionado y la función `handleChangeReport` para manejar los cambios en la selección.
 * 
 * Propiedades:
 * - `selectedValueReport`: Valor seleccionado actualmente (1 para "Sí", 2 para "No").
 * - `handleChangeReport`: Función que se ejecuta cuando se cambia la selección.
 */
import * as React from "react";
import Radio from "@mui/material/Radio";

export default function OptionsReport({
  selectedValueReport,
  handleChangeReport,
}) {
  return (
    <div style={{ alignItems: "center" }}>
      <div>Considera esta propiedad como una alternativa de compra/renta?:</div>
      <Radio
        checked={selectedValueReport === 1}
        onChange={handleChangeReport}
        value={1}
        name="radio-buttons"
        inputProps={{ "aria-label": "Si" }}
      />
      <label>Si</label>
      <Radio
        checked={selectedValueReport === 2}
        onChange={handleChangeReport}
        value={2}
        name="radio-buttons"
        inputProps={{ "aria-label": "No" }}
      />
      <label>No</label>
    </div>
  );
}
