import * as React from "react";
import Radio from "@mui/material/Radio";

export default function FractionamientOptions({
  selectedValueFractionamient,
  handleChangeFractionamient,
}) {
  //   const [selectedValue, setSelectedValue] = React.useState("a");

  //   const handleChange = (event) => {
  //     setSelectedValue(event.target.value);
  //   };

  return (
    <div style={{ alignItems: "center" }}>
      <div>¿Pertenece a un fraccionamiento?</div>
      <label>Si</label>
      <Radio
        checked={selectedValueFractionamient === "si"}
        onChange={handleChangeFractionamient}
        value="si"
        name="radio-buttons"
        inputProps={{ "aria-label": "Si" }}
      />
      <label>No</label>
      <Radio
        checked={selectedValueFractionamient === "no"}
        onChange={handleChangeFractionamient}
        value="no"
        name="radio-buttons"
        inputProps={{ "aria-label": "No" }}
      />
    </div>
  );
}
