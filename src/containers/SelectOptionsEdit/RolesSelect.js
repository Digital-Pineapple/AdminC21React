/**
 * `RolesSelect` es un componente que permite seleccionar el tipo de usuario en un formulario.
 * 
 * Funcionalidad:
 * - El componente muestra un `Select` con opciones predefinidas para seleccionar el tipo de usuario, como "Inquilino (Rentar/Comprar)", "Asesor (Individual)", "Inmobiliaria" y "Admin".
 * - Al seleccionar una opción, se actualiza el estado `Type_user` con el valor seleccionado.
 * - El componente invoca la función `detectarCambiosRole` para notificar a un componente superior sobre el cambio de selección.
 * 
 * Estado:
 * - `Type_user`: Mantiene la opción seleccionada, que representa el tipo de usuario.
 * 
 * Efectos:
 * - Se configura la opción seleccionada inicialmente según el valor de `type_user` proporcionado como prop.
 * - Cuando el valor de `type_user` cambia, se actualiza el estado local y se notifica al componente superior a través de `detectarCambiosRole`.
 * 
 * Este componente es útil para formularios donde se necesita seleccionar un tipo de usuario entre varias opciones predefinidas.
 */
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
