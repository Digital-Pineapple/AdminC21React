import * as React from "react";
import Radio from "@mui/material/Radio";

export default function RemodelOptions({
  selectedValueRemodel,
  handleChangeRemodel,
}) {
  //   const [selectedValue, setSelectedValue] = React.useState("a");

  //   const handleChange = (event) => {
  //     setSelectedValue(event.target.value);
  //   };

  return (
    <div style={{ alignItems: "center" }}>
      <div>¿Se encuentra en remodelacion actualmente?</div>
      <label>Si</label>
      <Radio
        checked={selectedValueRemodel === "si"}
        onChange={handleChangeRemodel}
        value="si"
        name="radio-buttons"
        inputProps={{ "aria-label": "Si" }}
      />
      <label>No</label>
      <Radio
        checked={selectedValueRemodel === "no"}
        onChange={handleChangeRemodel}
        value="no"
        name="radio-buttons"
        inputProps={{ "aria-label": "No" }}
      />
    </div>
  );
}
