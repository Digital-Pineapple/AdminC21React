/**
 * `Options` es un componente que permite seleccionar un servicio (renta, venta, preventa) de una lista de opciones.
 * 
 * Propiedades:
 * - `detectarCambios`: Función que se llama cuando el usuario selecciona una opción, para notificar el cambio al componente padre.
 * - `rules`: Valor de la opción actualmente seleccionada, que se usa para establecer la opción seleccionada al montar el componente o cuando cambia.
 * 
 * Estado:
 * - `Rules`: Mantiene el estado de la opción seleccionada, que es un objeto con los valores `value` y `name`.
 * 
 * Funcionalidad:
 * - Se definen tres opciones: renta, venta y preventa.
 * - El componente muestra un `Select` con estas opciones, y al seleccionar una de ellas, se actualiza el estado `Rules` y se llama a `detectarCambios` con el valor seleccionado.
 * - Además, se utiliza un efecto (`useEffect`) para actualizar la opción seleccionada cuando cambia el valor de `rules` desde el componente padre.
 * 
 * Este componente es útil en formularios donde se necesite que el usuario seleccione un tipo de servicio (por ejemplo, en un sistema de venta o alquiler de propiedades).
 */
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
