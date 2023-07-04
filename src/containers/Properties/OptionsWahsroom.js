import * as React from "react";
import Radio from "@mui/material/Radio";

export default function OptionsWashRoom({
  selectedValueWashRoom,
  handleChangeWashRoom,
}) {
  //   const [selectedValue, setSelectedValue] = React.useState("a");

  //   const handleChange = (event) => {
  //     setSelectedValue(event.target.value);
  //   };

  return (
    <div style={{ alignItems: "center" }}>
      <div>¿Cuenta con cuarto de lavado?</div>
      <label>Si</label>
      <Radio
        checked={selectedValueWashRoom === "si"}
        onChange={handleChangeWashRoom}
        value="si"
        name="radio-buttons"
        inputProps={{ "aria-label": "Si" }}
      />
      <label>No</label>
      <Radio
        checked={selectedValueWashRoom === "no"}
        onChange={handleChangeWashRoom}
        value="no"
        name="radio-buttons"
        inputProps={{ "aria-label": "No" }}
      />
    </div>
  );
}
