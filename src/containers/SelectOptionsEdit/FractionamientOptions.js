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
