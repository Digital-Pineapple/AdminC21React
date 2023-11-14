import React, { useContext, useEffect, useState } from "react";
import CategoryContext from "../../context/Categories/CategoryContext";
import { InputLabel, FormControl, Select, MenuItem } from "@mui/material";

const CategoriesSelect = (props) => {
  const { GetCategories, categories } = useContext(CategoryContext);
  const [selectedCategory, setSelectedCategory] = useState(props.category_id || "");

  useEffect(() => {
    GetCategories();
  }, []);

  const detectarCambiosCategory = (value) => {
    setSelectedCategory(value.target.value);
    props.detectarCambiosCategory(value.target.value);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="parking-options-label">Selecciona categoría</InputLabel>
        <Select
          labelId="parking-options-label"
          id="parking-options-select"
          value={selectedCategory}
          onChange={detectarCambiosCategory}
          label="Selecciona categoría"
          name="account"
        >
          {categories.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default CategoriesSelect;