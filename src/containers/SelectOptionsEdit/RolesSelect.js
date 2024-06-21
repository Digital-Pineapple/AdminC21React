import React, { useEffect, useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { array } from "yup";

const RolesSelect = ({ detectarCambiosRole, type_user }) => {
  const [Type_user, SetType_user] = useState(null);

  // Definición de las opciones disponibles
  const arrays = [
    { value: 4, name: "Inquilino (Rentar/Comprar)" },
    { value: 3, name: "Asesor (Individual)" },
    { value: 2, name: "Inmobiliaria" },
    { value: 1, name: "Admin" },
  ];

  // Maneja el cambio de selección
  const handleRoleChange = (event) => {
    const selectedValue = event.target.value;
    const selectedOption = arrays.find(
      (array) => array.value === selectedValue
    );

    // Actualiza el estado con la opción seleccionada
    SetType_user(selectedOption ? selectedOption : null);

    // Llama a la función detectarCambios para notificar el cambio
    detectarCambiosRole(selectedValue);
  };

  // Efecto para establecer la opción seleccionada cuando cambia la regla
  useEffect(() => {
    const selectedOption = arrays.find((array) => array.value === type_user);
    SetType_user(selectedOption ? selectedOption : null);
    detectarCambiosRole(type_user);
  }, [type_user]);

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="roles-options-label">Tipo de Usuario:</InputLabel>
        <Select
          labelId="roles-options-label"
          id="roles-options-select"
          value={Type_user ? Type_user.value : ""}
          onChange={handleRoleChange}
          label="Tipo de Usuario:"
          name="account"
        >
          {arrays.map((array) => (
            <MenuItem value={array.value} key={array.value}>
              {array.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default RolesSelect;
