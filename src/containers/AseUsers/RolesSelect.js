import React, { useEffect, useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import MethodGet from "../../config/service";

const RolesSelect = (props) => {
  const array = [{ name: "Asesor (Inmobiliaria)", value: 5 }];

  const detectarCambiosRole = (value) => {
    props.detectarCambiosRole(value.target.value);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="roles-options-label">Tipo:</InputLabel>
        <Select
          required
          labelId="roles-options-label"
          id="roles-options-select"
          onChange={detectarCambiosRole}
          label="Tipo:"
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
