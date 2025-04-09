/**
 * `ParkingOptions` es un componente que permite seleccionar si una propiedad cuenta o no con estacionamiento.
 * 
 * Funcionalidad:
 * - El componente muestra un `Select` con dos opciones: "Sí cuenta con estacionamiento" y "No cuenta con estacionamiento".
 * - Al seleccionar una opción, se actualiza el estado `Parking` con el valor seleccionado.
 * - El componente también invoca la función `detectarCambios` para notificar a un componente superior sobre el cambio de selección.
 * 
 * Estado:
 * - `Parking`: Mantiene la opción seleccionada, que puede ser 0 (No cuenta con estacionamiento) o 1 (Sí cuenta con estacionamiento).
 * 
 * Efectos:
 * - Se configura la opción seleccionada inicialmente según el valor de `parking` proporcionado como prop.
 * - Cuando el valor de `parking` cambia, se actualiza el estado local y se notifica al componente superior a través de `detectarCambios`.
 * 
 * Este componente es útil para formularios donde se necesita conocer si una propiedad tiene estacionamiento.
 */
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
