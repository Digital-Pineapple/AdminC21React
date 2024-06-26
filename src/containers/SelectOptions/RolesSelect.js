import React, { useEffect, useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import MethodGet from "../../config/service";

const RolesSelect = (props) => {
  const array = [
    { name: "Inquilino (Rentar/Comprar)", value: 4 },
    { name: "Asesor (Individual)", value: 3 },
    { name: "Inmobiliaria", value: 2 },
  ];

  const detectarCambiosRole = (value) => {
    // setSelectedRole(value.target.value);
    props.detectarCambiosRole(value.target.value);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="roles-options-label">Soy</InputLabel>
        <Select
          required
          labelId="roles-options-label"
          id="roles-options-select"
          onChange={detectarCambiosRole}
          label="Soy"
          name="account"
        >
          {array.map((rol, index) => (
            <MenuItem key={index} value={rol.value}>
              {rol.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default RolesSelect;
