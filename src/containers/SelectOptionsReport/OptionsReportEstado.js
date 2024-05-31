import * as React from "react";
import Radio from "@mui/material/Radio";

export default function OptionsReportEstado({
  selectedValueEstado,
  handleChangeEstado,
}) {
  return (
    <div style={{ alignItems: "center" }}>
      <div>Estado de conservación:</div>
      <Radio
        checked={selectedValueEstado === 1}
        onChange={handleChangeEstado}
        value={1}
        name="radio-buttons"
        inputProps={{ "aria-label": "Muy Bien" }}
      />
      <label>Muy Bien</label>
      <Radio
        checked={selectedValueEstado === 2}
        onChange={handleChangeEstado}
        value={2}
        name="radio-buttons"
        inputProps={{ "aria-label": "Bien" }}
      />
      <label>Bien</label>
      <Radio
        checked={selectedValueEstado === 3}
        onChange={handleChangeEstado}
        value={3}
        name="radio-buttons"
        inputProps={{ "aria-label": "Regular" }}
      />
      <label>Regular</label>
      <Radio
        checked={selectedValueEstado === 4}
        onChange={handleChangeEstado}
        value={4}
        name="radio-buttons"
        inputProps={{ "aria-label": "Mal" }}
      />
      <label>Mal</label>
    </div>
  );
}
