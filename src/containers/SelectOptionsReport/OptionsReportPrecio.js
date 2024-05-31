import * as React from "react";
import Radio from "@mui/material/Radio";

export default function OptionsReportPrecio({
  selectedValuePrecio,
  handleChangePrecio,
}) {
  return (
    <div style={{ alignItems: "center" }}>
      <div>Precio:</div>
      <Radio
        checked={selectedValuePrecio === 1}
        onChange={handleChangePrecio}
        value={1}
        name="radio-buttons"
        inputProps={{ "aria-label": "Muy Bien" }}
      />
      <label>Muy Bien</label>
      <Radio
        checked={selectedValuePrecio === 2}
        onChange={handleChangePrecio}
        value={2}
        name="radio-buttons"
        inputProps={{ "aria-label": "Bien" }}
      />
      <label>Bien</label>
      <Radio
        checked={selectedValuePrecio === 3}
        onChange={handleChangePrecio}
        value={3}
        name="radio-buttons"
        inputProps={{ "aria-label": "Regular" }}
      />
      <label>Regular</label>
      <Radio
        checked={selectedValuePrecio === 4}
        onChange={handleChangePrecio}
        value={4}
        name="radio-buttons"
        inputProps={{ "aria-label": "Mal" }}
      />
      <label>Mal</label>
    </div>
  );
}
