/**
 * `RolesSelect` es un componente de selección para elegir un tipo de usuario.
 * Utiliza `Material-UI` para la UI y `react-i18next` para la traducción.
 * 
 * Propiedades:
 * - `detectarCambiosRole`: función que recibe el valor seleccionado cuando cambia el rol.
 */
import React, { useEffect, useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import MethodGet from "../../config/service";
import { useTranslation } from "react-i18next";

const RolesSelect = (props) => {
  const { t } = useTranslation();
  const array = [{ name: t("asesorInm"), value: 5 }];

  const detectarCambiosRole = (value) => {
    props.detectarCambiosRole(value.target.value);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="roles-options-label">{t("tipodeUsuario")}</InputLabel>
        <Select
          required
          labelId="roles-options-label"
          id="roles-options-select"
          onChange={detectarCambiosRole}
          label={t("tipodeUsuario")}
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
