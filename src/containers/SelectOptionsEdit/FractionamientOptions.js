/**
 * `FractionamientOptions` es un componente que permite seleccionar si una propiedad pertenece a un fraccionamiento.
 * - Utiliza el estado `parkingOption` para almacenar el valor de la opción seleccionada, que puede ser "Sí" o "No".
 * - El valor seleccionado se actualiza a través de la función `handleChange` cuando el usuario interactúa con el `Select`.
 * - El componente se utiliza para recopilar información sobre la ubicación de una propiedad, específicamente si se encuentra en un fraccionamiento.
 * 
 * Este componente es útil en formularios donde se necesita que el usuario seleccione si la propiedad pertenece o no a un fraccionamiento, por ejemplo, en un sistema de ventas de propiedades.
 */
import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function FractionamientOptions() {
  const [parkingOption, setParkingOption] = useState(''); 

  const handleChange = (event) => {
    setParkingOption(event.target.value); 
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="parking-options-label">¿Pertenece a un fraccionamiento?</InputLabel>
        <Select
          labelId="parking-options-label"
          id="parking-options-select"
          value={parkingOption}
          onChange={handleChange}
          label="¿Pertenece a un fraccionamiento?"
        >
          <MenuItem value={10}>Sí</MenuItem>
          <MenuItem value={20}>No</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
