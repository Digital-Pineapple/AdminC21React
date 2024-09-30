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
