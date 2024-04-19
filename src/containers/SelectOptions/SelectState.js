import React, { useContext, useEffect, useState } from "react";

import Select from "react-select";
import { InputLabel } from "@mui/material";
import MethodGet from "../../config/service";
const SelectState = (props) => {
  const [states, saveStates] = useState([]);
  useEffect(() => {
    let url = "/states";
    MethodGet(url)
      .then((res) => {
        saveStates(res.data.data);
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
  const detectarCambiosState = (value) => {
    props.detectarCambiosState(value);
  };
  return (
    <>
      <label>Selecciona un estado</label>
      <Select
        required
        fullwith
        styles={selectStyles}
        onChange={(value) => detectarCambiosState(value)}
        classNamePrefix="select"
        name="account"
        placeholder="Selecciona un estado"
        options={states.map((state) => {
          let attribute = {
            label: state.name,
            value: state.id,
          };
          return attribute;
        })}
      />
    </>
  );
};

export default SelectState;
