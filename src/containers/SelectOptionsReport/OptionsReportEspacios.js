import * as React from "react";
import Radio from "@mui/material/Radio";

export default function OptionsReportEspacios({
  selectedValueEspacios,
  handleChangeEspacios,
}) {
  return (
    <div style={{ alignItems: "center" }}>
      <div>Espacios:</div>
      <Radio
        checked={selectedValueEspacios === 1}
        onChange={handleChangeEspacios}
        value={1}
        name="radio-buttons"
        inputProps={{ "aria-label": "Muy Bien" }}
      />
      <label>Muy Bien</label>
      <Radio
        checked={selectedValueEspacios === 2}
        onChange={handleChangeEspacios}
        value={2}
        name="radio-buttons"
        inputProps={{ "aria-label": "Bien" }}
      />
      <label>Bien</label>
      <Radio
        checked={selectedValueEspacios === 3}
        onChange={handleChangeEspacios}
        value={3}
        name="radio-buttons"
        inputProps={{ "aria-label": "Regular" }}
      />
      <label>Regular</label>
      <Radio
        checked={selectedValueEspacios === 4}
        onChange={handleChangeEspacios}
        value={4}
        name="radio-buttons"
        inputProps={{ "aria-label": "Mal" }}
      />
      <label>Mal</label>
    </div>
  );
}
