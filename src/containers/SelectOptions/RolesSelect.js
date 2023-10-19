import React, { useEffect, useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import MethodGet from "../../config/service";

const RolesSelect = (props) => {
  const [roles, saveRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState("");

  useEffect(() => {
    let url = "/roles";
    MethodGet(url)
      .then((res) => saveRoles(res.data.data))
      .catch((error) => console.log(error));
  }, []);

  const detectarCambiosRole = (value) => {
    setSelectedRole(value.target.value);
    props.detectarCambiosRole(value.target.value);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="roles-options-label">Soy</InputLabel>
        <Select
          labelId="roles-options-label"
          id="roles-options-select"
          value={selectedRole}
          onChange={detectarCambiosRole}
          label="Soy"
          name="account"
        >
          {roles.map((rol) => (
            <MenuItem key={rol.id} value={rol.id}>
              {rol.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default RolesSelect;
