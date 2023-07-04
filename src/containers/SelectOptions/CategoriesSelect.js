import React, { useContext, useEffect } from "react";
import CategoryContext from "../../context/Categories/CategoryContext";
import Select from "react-select";
import { InputLabel } from "@mui/material";
const CategoriesSelect = (props) => {
  const { GetCategories, categories } = useContext(CategoryContext);
  useEffect(() => {
    GetCategories();
  }, []);
  const selectStyles = {
    menu: (base) => ({
      ...base,
      zIndex: 100,
    }),
  };
  const detectarCambiosCategory = (value) => {
    props.detectarCambiosCategory(value);
  };
  return (
    <>
      <label>Selecciona categoría</label>
      <Select
        fullwith
        styles={selectStyles}
        onChange={(value) => detectarCambiosCategory(value)}
        //className="basic-single"
        classNamePrefix="select"
        name="account"
        placeholder="Selecciona categoría"
        // options={nuevoArreglo}
        options={categories.map((category) => {
          let attribute = {
            label: category.name,
            value: category.id,
          };
          return attribute;
        })}
      />
    </>
  );
};

export default CategoriesSelect;
