import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MethodGet from "../../config/service";

const SearchMunicipality = (props) => {
  const [municipalities, saveMunicipalities] = useState([]);
  const [selectedMunicipality, setSelectedMunicipality] = useState("");

  useEffect(() => {
    if (props.state_id) {
      let url = `/states/municipalities/${props.state_id}`;
      MethodGet(url)
        .then((res) => {
          saveMunicipalities(res.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [props.state_id]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedMunicipality(value);
    props.detectarCambiosMunicipality(value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-municipality-label">
          Selecciona un municipio
        </InputLabel>
        <Select
          labelId="select-municipality-label"
          id="select-municipality"
          value={selectedMunicipality}
          label="Selecciona un municipio"
          onChange={handleChange}
        >
          {municipalities.map((muni) => (
            <MenuItem key={muni.id} value={muni.id}>
              {muni.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SearchMunicipality;
