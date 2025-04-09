/**
 * `OptionsWahsroom` es un componente que permite seleccionar si una propiedad cuenta o no con un cuarto de lavado.
 * 
 * Funcionalidad:
 * - El componente muestra un `Select` con dos opciones: "Sí" y "No", para indicar si la propiedad tiene un cuarto de lavado.
 * - Al seleccionar una opción, se actualiza el estado `parkingOption` con el valor seleccionado.
 * 
 * Estado:
 * - `parkingOption`: Mantiene el valor seleccionado, que puede ser 10 (Sí) o 20 (No).
 * 
 * Este componente es útil en formularios donde se requiere saber si una propiedad tiene un cuarto de lavado.
 */
import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function OptionsWahsroom() {
  const [parkingOption, setParkingOption] = useState(''); 

  const handleChange = (event) => {
    setParkingOption(event.target.value); 
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="parking-options-label">¿Cuenta con cuarto de lavado?</InputLabel>
        <Select
          labelId="parking-options-label"
          id="parking-options-select"
          value={parkingOption}
          onChange={handleChange}
          label="¿Cuenta con cuarto de lavado?"
        >
          <MenuItem value={10}>Sí</MenuItem>
          <MenuItem value={20}>No</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
