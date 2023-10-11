import React, { useContext, useEffect } from "react";
import Select from "react-select";
const OptionsSelect = (props) => {
  const selectStyles = {
    menu: (base) => ({
      ...base,
      zIndex: 100,
    }),
  };
  const options = [
    { value: 1, name: "venta" },
    { value: 2, name: "Renta" },
  ];
  const detectarCambiosOption = (value) => {
    props.detectarCambiosOption(value);
  };
  return (
    <>
      <label>Selecciona opcion</label>
      <Select
        fullwith
        styles={selectStyles}
        onChange={(value) => detectarCambiosOption(value)}
        //className="basic-single"
        classNamePrefix="select"
        name="account"
        placeholder="Selecciona una opcion"
        // options={nuevoArreglo}
        options={options.map((option) => {
          let attribute = {
            label: option.name,
            value: option.value,
          };
          return attribute;
        })}
      />
    </>
  );
};

export default OptionsSelect;
