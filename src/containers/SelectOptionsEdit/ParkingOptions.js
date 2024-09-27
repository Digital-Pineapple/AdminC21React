import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const ParkingOptions = ({ detectarCambios, parking }) => {
  const { t } = useTranslation();
  const [Parking, setParking] = useState(null);

  // Definición de las opciones disponibles
  const options = [
    { value: 0, name: "No cuenta con estacionamiento" },
    { value: 1, name: "Si cuenta con estacionamiento" },
  ];

  // Maneja el cambio de la selección
  const handleParkingChange = (event) => {
    const selectedValue = event.target.value;
    const selectedOption = options.find(
      (option) => option.value === selectedValue
    );

    // Actualiza el estado con la opción seleccionada
    setParking(selectedOption ? selectedOption : null);

    // Llama a la función detectarCambios para notificar el cambio
    detectarCambios(selectedValue);
  };

  // Efecto para establecer la opción seleccionada cuando cambia la regla
  useEffect(() => {
    const selectedOption = options.find((option) => option.value === parking);
    setParking(selectedOption ? selectedOption : null);
    detectarCambios(parking);
  }, [parking]);

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="parking-options-label">
          {t("cuentaConEstacionamiento")}
        </InputLabel>

        <Select
          required
          labelId="parking-options-label"
          id="parking-options-select"
          value={Parking ? Parking.value : ""}
          onChange={handleParkingChange}
          label={t("cuentaConEstacionamiento")}
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

export default ParkingOptions;
