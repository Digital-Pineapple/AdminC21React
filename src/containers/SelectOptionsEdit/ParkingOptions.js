import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export default function ParkingOptions(props) {
  const options = [
    { value: 0, name: "No" },
    { value: 1, name: "Si" },
  ];

  const detectarCambiosParking = (e) => {
    props.detectarCambiosParking(e);
  };

  console.log(props.parking, "propss");

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="parking-options-label">
          ¿Cuenta con estacionamiento?
        </InputLabel>

        <Select
          labelId="parking-options-label"
          id="parking-options-select"
          label="¿Cuenta con estacionamiento?"
          value={props.parking || null}
          onChange={detectarCambiosParking}
        >
          {options.map((option) => (
            <MenuItem value={option.value} key={option.value}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
