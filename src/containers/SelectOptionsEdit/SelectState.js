import React, { useEffect, useState } from "react";
import Select from "react-select";
import MethodGet from "../../config/service";

const SelectState = (props) => {
  const [states, saveStates] = useState([]);
  const [selectState, setSelectState] = useState();

  useEffect(() => {
    let url = "/states";
    MethodGet(url)
      .then((res) => {
        saveStates(res.data.data);
        console.log(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const selectStyles = {
    menu: (base) => ({
      ...base,
      zIndex: 100,
    }),
  };

  const handleChange = (selected) => {
    setSelectState(selected);
    props.detectarCambiosState(selected ? selected.value : null);
  };

  const selectedOption = states.find((cat) => cat.id === props.address.id);
  useEffect(() => {
    if (selectedOption) {
      console.log(selectedOption);
      setSelectState({
        label: selectedOption.name,
        value: selectedOption.id,
      });
    } else {
      setSelectState(null);
    }
  }, [selectedOption]);

  console.log(selectState);
  const selectOptions = states.map((options) => ({
    label: options.name,
    value: options.id,
  }));

  return (
    <>
      <label>Selecciona un estado</label>
      <Select
        fullwith
        styles={selectStyles}
        onChange={handleChange}
        value={selectState}
        classNamePrefix="select"
        name="account"
        placeholder="Selecciona un estado"
        options={selectOptions}
      />
    </>
  );
};

export default SelectState;
