/**
 * `OptionsReportDistribución` es un componente que permite al usuario seleccionar una opción de distribución de la propiedad.
 * 
 * Muestra cuatro opciones para valorar la distribución de la propiedad: Muy Bien, Bien, Regular y Mal.
 * Recibe el valor seleccionado y la función `handleChangeDistribucion` para manejar los cambios en la selección.
 * 
 * Propiedades:
 * - `selectedValueDistribucion`: Valor seleccionado actualmente (1 para "Muy Bien", 2 para "Bien", 3 para "Regular", 4 para "Mal").
 * - `handleChangeDistribucion`: Función que se ejecuta cuando se cambia la selección.
 */
import * as React from "react";
import Radio from "@mui/material/Radio";

export default function OptionsReportDistribución({
  selectedValueDistribucion,
  handleChangeDistribucion,
}) {
  return (
    <div style={{ alignItems: "center" }}>
      <div>Distribución:</div>
      <Radio
        checked={selectedValueDistribucion === 1}
        onChange={handleChangeDistribucion}
        value={1}
        name="radio-buttons"
        inputProps={{ "aria-label": "Muy Bien" }}
      />
      <label>Muy Bien</label>
      <Radio
        checked={selectedValueDistribucion === 2}
        onChange={handleChangeDistribucion}
        value={2}
        name="radio-buttons"
        inputProps={{ "aria-label": "Bien" }}
      />
      <label>Bien</label>
      <Radio
        checked={selectedValueDistribucion === 3}
        onChange={handleChangeDistribucion}
        value={3}
        name="radio-buttons"
        inputProps={{ "aria-label": "Regular" }}
      />
      <label>Regular</label>
      <Radio
        checked={selectedValueDistribucion === 4}
        onChange={handleChangeDistribucion}
        value={4}
        name="radio-buttons"
        inputProps={{ "aria-label": "Mal" }}
      />
      <label>Mal</label>
    </div>
  );
}
