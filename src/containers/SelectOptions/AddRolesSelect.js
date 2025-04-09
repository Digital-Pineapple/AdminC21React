/**
 * `AddRolesSelect` es un componente de selección que permite elegir el tipo de usuario (rol) de una lista predefinida.
 * - Utiliza el componente `Select` de Material-UI para renderizar un desplegable con las opciones de rol.
 * - Los roles disponibles son: "Inquilino (Rentar/Comprar)", "Asesor (Individual)", "Inmobiliaria" y "Admin", cada uno con un valor numérico correspondiente.
 * - Al seleccionar un rol, el valor seleccionado es enviado a través de la función `detectarCambiosRole`, que es pasada como prop desde el componente padre.
 * 
 * El componente está diseñado para permitir que el usuario elija entre diferentes tipos de roles en una aplicación.
 */
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
