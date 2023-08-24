import React, { useContext, useEffect, useState } from "react";
import Select from "react-select";
const Options = ({ detectarCambios, rules }) => {
  const selectStyles = {
    menu: (base) => ({
      ...base,
      zIndex: 100,
    }),
  };
  const [Rules, setRules] = useState();

  const options = [
    { value: 1, name: "venta" },
    { value: 2, name: "Renta" },
    { value: 3, name: "Ambos" },
  ];

  const handleCategoryChange = (selected) => {
    setRules(selected);
    detectarCambios(selected ? selected.value : null);
  };

  const selectedOption = options.find((cat) => cat.value === rules);
  useEffect(() => {
    if (selectedOption) {
      setRules({
        label: selectedOption.name,
        value: selectedOption.value,
      });
    } else {
      setRules(null);
    }
  }, [rules]);
  const selectOptions = options.map((options) => ({
    label: options.name,
    value: options.value,
  }));
  return (
    <>
      <label>Selecciona servicio</label>
      <Select
        fullwith
        styles={selectStyles}
        onChange={handleCategoryChange}
        value={Rules}
        classNamePrefix="select"
        name="account"
        placeholder="Selecciona servicio"
        options={selectOptions}
      />
    </>
  );
};

export default Options;
