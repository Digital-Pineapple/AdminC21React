/**
 * `UserPropSelect` es un componente que permite seleccionar un asesor para una propiedad.
 * - Utiliza el contexto `UsersContext` para obtener la lista de usuarios (asesores).
 * - El componente obtiene los usuarios a través de la función `GetUsers` proporcionada por el contexto, y la lista de usuarios se almacena en el estado local `users`.
 * - El valor seleccionado se guarda en el estado local `selectedUserInm` y se pasa al componente padre mediante la prop `detectarCambiosUserInm`.
 * - Si no hay usuarios disponibles, se muestra un mensaje indicando que se deben agregar asesores primero.
 * 
 * Este componente es útil para asignar un asesor a una propiedad dentro de una plataforma inmobiliaria.
 */
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
