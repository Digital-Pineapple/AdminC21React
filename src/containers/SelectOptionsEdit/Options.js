import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";

const Options = ({ detectarCambios, rules }) => {
  const { t } = useTranslation();
  const [Rules, setRules] = useState(null);

  // Definición de las opciones disponibles
  const options = [
    { value: 1, name:  t("renta") },
    { value: 2, name:  t("venta") },
    { value: 3, name:  t("preventa") },
  ];

  // Maneja el cambio de selección
  const handleServiceChange = (event) => {
    const selectedValue = event.target.value;
    const selectedOption = options.find(
      (option) => option.value === selectedValue
    );

    // Actualiza el estado con la opción seleccionada
    setRules(selectedOption ? selectedOption : null);

    // Llama a la función detectarCambios para notificar el cambio
    detectarCambios(selectedValue);
  };

  // Efecto para establecer la opción seleccionada cuando cambia la regla
  useEffect(() => {
    const selectedOption = options.find((option) => option.value === rules);
    setRules(selectedOption ? selectedOption : null);
    detectarCambios(rules);
  }, [rules]);

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
          value={Rules ? Rules.value : ""}
          onChange={handleServiceChange}
          label={t("seleccionaServicio")}
          name="account"
        >
          {options.map((option) => (
            <MenuItem value={option.value} key={option.value}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Options;
