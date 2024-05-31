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
