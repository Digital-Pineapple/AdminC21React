import * as React from "react";
import Radio from "@mui/material/Radio";

export default function OptionsReportFuncionalidad({
  selectedValueFuncionalidad,
  handleChangeFuncionalidad,
}) {
  return (
    <div style={{ alignItems: "center" }}>
      <div>Funcionalidad:</div>
      <Radio
        checked={selectedValueFuncionalidad === 1}
        onChange={handleChangeFuncionalidad}
        value={1}
        name="radio-buttons"
        inputProps={{ "aria-label": "Muy Bien" }}
      />
      <label>Muy Bien</label>
      <Radio
        checked={selectedValueFuncionalidad === 2}
        onChange={handleChangeFuncionalidad}
        value={2}
        name="radio-buttons"
        inputProps={{ "aria-label": "Bien" }}
      />
      <label>Bien</label>
      <Radio
        checked={selectedValueFuncionalidad === 3}
        onChange={handleChangeFuncionalidad}
        value={3}
        name="radio-buttons"
        inputProps={{ "aria-label": "Regular" }}
      />
      <label>Regular</label>
      <Radio
        checked={selectedValueFuncionalidad === 4}
        onChange={handleChangeFuncionalidad}
        value={4}
        name="radio-buttons"
        inputProps={{ "aria-label": "Mal" }}
      />
      <label>Mal</label>
    </div>
  );
}
