import React, { useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import MethodGet from "../../config/service";

const SelectState = (props) => {
  const { detectarCambiosState, address } = props;

  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await MethodGet("/states");
        setStates(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (address && address.id) {
      const selectedOption = states.find((state) => state.id === address.id);
      if (selectedOption) {
        setSelectedState(selectedOption.id);
        detectarCambiosState(selectedOption.id);
      } else {
        setSelectedState("");
      }
    }
  }, [address, states]);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedState(selectedValue);

    detectarCambiosState(selectedValue);
  };

  const selectOptions = states.map((state) => (
    <MenuItem key={state.id} value={state.id}>
      {state.name}
    </MenuItem>
  ));

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="state-select-label">Selecciona un Estado</InputLabel>
        <Select
          required
          labelId="state-select-label"
          id="state-select"
          value={selectedState}
          onChange={handleChange}
          label="Selecciona un Estado"
          name="state_id"
        >
          {selectOptions}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectState;
