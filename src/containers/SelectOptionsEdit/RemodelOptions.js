import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function RemodelOptions() {
  const [parkingOption, setParkingOption] = useState(''); 

  const handleChange = (event) => {
    setParkingOption(event.target.value); 
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="parking-options-label">¿Se encuentra en remodelacion actualmente?</InputLabel>
        <Select
          labelId="parking-options-label"
          id="parking-options-select"
          value={parkingOption}
          onChange={handleChange}
          label="¿Se encuentra en remodelacion actualmente?"
        >
          <MenuItem value={10}>Sí</MenuItem>
          <MenuItem value={20}>No</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
