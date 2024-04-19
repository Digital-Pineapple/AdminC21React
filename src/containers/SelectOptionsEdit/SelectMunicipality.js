import React, { useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import MethodGet from "../../config/service";

const SelectMunicipality = (props) => {
  const [municipalities, setMunicipalities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedMunicipalityId, setSelectedMunicipalityId] = useState("");

  useEffect(() => {
    setSelectedState(props.state_id || props.state);
    if (selectedState !== "") {
      let url = `/states/municipalities/${selectedState}`;
      MethodGet(url)
        .then((res) => {
          setMunicipalities(res.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [props.state_id, selectedState]);

  useEffect(() => {
    if (municipalities.length > 0) {
      setSelectedMunicipalityId(props.municipality_id || "");
      props.detectarCambiosMunicipality(props.municipality_id);
    }
  }, [municipalities, props.municipality_id]);

  const handleChange = (event) => {
    const selectedId = event.target.value;
    setSelectedMunicipalityId(selectedId);
    props.detectarCambiosMunicipality(selectedId);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="state-select-label">Selecciona un municipio</InputLabel>
        <Select
          required
          labelId="state-select-label"
          id="state-select"
          value={selectedMunicipalityId}
          onChange={handleChange}
          label="Selecciona un municipio"
          name="municipality_id"
        >
          {municipalities.map((municipality) => (
            <MenuItem key={municipality.id} value={municipality.id}>
              {municipality.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectMunicipality;
