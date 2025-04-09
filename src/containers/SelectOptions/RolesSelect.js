/**
 * `RolesSelect` es un componente de selección que permite elegir un rol de usuario (inquilino, asesor, inmobiliaria).
 * - Utiliza el componente `Select` de Material-UI para renderizar un desplegable con las opciones de rol disponibles.
 * - Las opciones (inquilino, asesor, inmobiliaria) están definidas como un array de objetos con `value` y `name`.
 * - La función `detectarCambiosRole` se ejecuta cuando el usuario selecciona un rol, y pasa el valor seleccionado al componente padre a través de la prop `detectarCambiosRole`.
 * 
 * Este componente es útil cuando necesitas permitir a los usuarios elegir su rol en una aplicación o formulario.
 */
import React, { useEffect, useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import MethodGet from "../../config/service";
import { useTranslation } from "react-i18next";
const RolesSelect = (props) => {
  const { t } = useTranslation();
  const array = [
    { name: t("inquilino"), value: 4 },
    { name: t("asesor"), value: 3 },
    { name: t("inmobiliaria"), value: 2 },
  ];

  const detectarCambiosRole = (value) => {
    // setSelectedRole(value.target.value);
    props.detectarCambiosRole(value.target.value);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="roles-options-label">{t("soy")}</InputLabel>
        <Select
          required
          labelId="roles-options-label"
          id="roles-options-select"
          onChange={detectarCambiosRole}
          label={t("soy")}
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
