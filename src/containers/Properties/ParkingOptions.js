import * as React from "react";
import Radio from "@mui/material/Radio";

export default function ParkingOptions({
  selectedValueParking,
  handleChangeParking,
}) {
  //   const [selectedValue, setSelectedValue] = React.useState("a");

  //   const handleChange = (event) => {
  //     setSelectedValue(event.target.value);
  //   };

  return (
    <div style={{ alignItems: "center" }}>
      <div>¿Cuenta con estacionamiento?</div>
      <label>Si</label>
      <Radio
        checked={selectedValueParking === "si"}
        onChange={handleChangeParking}
        value="si"
        name="radio-buttons"
        inputProps={{ "aria-label": "Si" }}
      />
      <label>No</label>
      <Radio
        checked={selectedValueParking === "no"}
        onChange={handleChangeParking}
        value="no"
        name="radio-buttons"
        inputProps={{ "aria-label": "No" }}
      />
    </div>
  );
}
