import * as React from "react";
import Radio from "@mui/material/Radio";

export default function Commission({
  selectedValueCommission,
  handleChangeCommission,
}) {
  return (
    <div style={{ alignItems: "center" }}>
      <div>¿Desea compartir comisión de su propiedad?</div>
      <label>Si</label>
      <Radio
        checked={selectedValueCommission === "si"}
        onChange={handleChangeCommission}
        value="si"
        name="radio-buttons"
        inputProps={{ "aria-label": "Si" }}
      />
      <label>No</label>
      <Radio
        checked={selectedValueCommission === "no"}
        onChange={handleChangeCommission}
        value={"no"}
        name="radio-buttons"
        inputProps={{ "aria-label": "No" }}
      />
    </div>
  );
}
