import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const RemodelOptions = ({ detectarCambios, remodel }) => {
  const [Remodel, setRemodel] = useState(null);

  // Definición de las opciones disponibles
  const options = [
    { value: 0, name: "No se encuentra en remodelación" },
    { value: 1, name: "Si se encuentra en remodelación" },
  ];

  // Maneja el cambio de la selección
  const handleRemodelChange = (event) => {
    const selectedValue = event.target.value;
    const selectedOption = options.find(
      (option) => option.value === selectedValue
    );

    // Actualiza el estado con la opción seleccionada
    setRemodel(selectedOption ? selectedOption : null);

    // Llama a la función detectarCambios para notificar el cambio
    detectarCambios(selectedValue);
  };

  // Efecto para establecer la opción seleccionada cuando cambia la regla
  useEffect(() => {
    const selectedOption = options.find((option) => option.value === remodel);
    setRemodel(selectedOption ? selectedOption : null);
    detectarCambios(remodel);
  }, [remodel]);

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="parking-options-label">
          ¿Se encuentra en remodelacion actualmente?
        </InputLabel>
        <Select
          required
          labelId="parking-options-label"
          id="parking-options-select"
          value={Remodel ? Remodel.value : ""}
          onChange={handleRemodelChange}
          label="¿Se encuentra en remodelacion actualmente?"
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

export default RemodelOptions;
