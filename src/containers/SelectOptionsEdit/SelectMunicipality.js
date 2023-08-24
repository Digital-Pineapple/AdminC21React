import React, { useEffect, useState } from "react";
import Select from "react-select";
import MethodGet from "../../config/service";

const SelectMunicipality = (props) => {
  const [municipalities, setMunicipalities] = useState([]);
  const [selectedMunicipality, setSelectedMunicipality] = useState(props.state);

  useEffect(() => {
    if (props.state_id !== undefined) {
      setSelectedMunicipality(props.state_id);
    }

    let url = `/states/municipalities/${selectedMunicipality}`;
    MethodGet(url)
      .then((res) => {
        setMunicipalities(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.state_id]);

  const selectStyles = {
    menu: (base) => ({
      ...base,
      zIndex: 100,
    }),
  };

  const handleChange = (selected) => {
    setSelectedMunicipality(selected);
    props.detectarCambiosMunicipality(selected ? selected.value : null);
  };

  const selectedOption = municipalities.find(
    (municipality) => municipality.id === props.municipality_id
  );
  useEffect(() => {
    if (selectedOption) {
      console.log(selectedOption);
      setSelectedMunicipality({
        label: selectedOption.name,
        value: selectedOption.id,
      });
    } else {
      setSelectedMunicipality(null);
    }
  }, [selectedOption]);

  console.log(selectedMunicipality);
  const selectOptions = municipalities.map((municipality) => ({
    label: municipality.name,
    value: municipality.id,
  }));

  return (
    <>
      <label>Selecciona un municipio</label>
      <Select
        fullWidth
        styles={selectStyles}
        onChange={handleChange}
        value={selectedMunicipality}
        classNamePrefix="select"
        name="account"
        placeholder="Selecciona un municipio"
        options={selectOptions}
      />
    </>
  );
};

export default SelectMunicipality;
