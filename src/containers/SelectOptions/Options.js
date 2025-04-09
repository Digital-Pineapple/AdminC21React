/**
 * `OptionsSelect` es un componente de selección que permite elegir un tipo de servicio (renta, venta o preventa).
 * - Utiliza el componente `Select` de Material-UI para renderizar un desplegable con las opciones disponibles.
 * - Las opciones (renta, venta, preventa) están definidas como un array de objetos con `value` y `name`.
 * - La función `detectarCambiosOption` se ejecuta cuando el usuario selecciona una opción, y pasa el valor seleccionado al componente padre a través de la prop `detectarCambiosOption`.
 * 
 * Este componente es útil cuando necesitas seleccionar entre varias opciones predeterminadas y pasar el valor seleccionado a un componente superior para su procesamiento.
 */
import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";

const OptionsSelect = (props) => {
  const { t } = useTranslation();
  const options = [
    { value: 1, name: t("renta") },
    { value: 2, name: t("venta") },
    { value: 3, name: t("preventa") },
  ];

  const detectarCambiosOption = (event) => {
    props.detectarCambiosOption(event.target.value);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="parking-options-label">
          {t("seleccionaServicio")}
        </InputLabel>
        <Select
          required
          labelId="parking-options-label"
          id="parking-options-select"
          value={props.selectedOption}
          onChange={detectarCambiosOption}
          label={t("seleccionaServicio")}
          name="account"
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default OptionsSelect;
