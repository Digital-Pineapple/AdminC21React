import React, { useEffect, useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import MethodGet from "../../config/service";

const AddRolesSelect = (props) => {
  const array = [
    { name: "Inquilino (Rentar/Comprar)", value: 4 },
    { name: "Asesor (Individual)", value: 3 },
    { name: "Inmobiliaria", value: 2 },
    { name: "Admin", value: 1 },
  ];

  const detectarCambiosRole = (value) => {
    props.detectarCambiosRole(value.target.value);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="roles-options-label">Tipo de Usuario:</InputLabel>
        <Select
          required
          labelId="roles-options-label"
          id="roles-options-select"
          onChange={detectarCambiosRole}
          label="Tipo de Usuario:"
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

export default AddRolesSelect;
