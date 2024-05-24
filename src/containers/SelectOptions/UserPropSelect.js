import React, { useContext, useEffect, useState } from "react";
import UsersContext from "../../context/Users/UsersContext";
import { InputLabel, FormControl, Select, MenuItem } from "@mui/material";

const UserPropSelect = (props) => {
  const { GetUsers, users } = useContext(UsersContext);
  const [selectedUserInm, setSelectedUserInm] = useState(
    props.userInm_id || ""
  );

  useEffect(() => {
    GetUsers();
  }, []);

  const detectarCambiosUserInm = (value) => {
    setSelectedUserInm(value.target.value);
    props.detectarCambiosUserInm(value.target.value);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="parking-options-label">
          Selecciona Asesor de la propiedad
        </InputLabel>
        <Select
          labelId="parking-options-label"
          id="parking-options-select"
          value={selectedUserInm}
          onChange={detectarCambiosUserInm}
          label="Selecciona Asesor de la propiedad"
          name="account"
        >
          {users.length === 0 ? (
            <MenuItem disabled>Primero debe agregar asesores</MenuItem>
          ) : (
            users.map((user) => (
              <MenuItem key={user.id} value={user.id}>
                {user.name}
              </MenuItem>
            ))
          )}
        </Select>
      </FormControl>
    </div>
  );
};

export default UserPropSelect;
