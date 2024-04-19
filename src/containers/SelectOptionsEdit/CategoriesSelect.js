import React, { useContext, useEffect, useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import PropTypes from "prop-types";
import CategoryContext from "../../context/Categories/CategoryContext";

const CategoriesSelect = ({ category_id, detectarCambiosCategory }) => {
  // Contexto y estados
  const { GetCategories, categories } = useContext(CategoryContext);
  const [selectedOption, setSelectedOption] = useState(null);
  const [cachedCategories, setCachedCategories] = useState([]);

  // Obtener categorías cuando el caché está vacío
  useEffect(() => {
    if (cachedCategories.length === 0) {
      GetCategories();
    }
  }, [cachedCategories, GetCategories]);

  // Configurar la opción seleccionada cuando cambia la categoría_id
  useEffect(() => {
    const selectedCategory = categories.find((cat) => cat.id === category_id);

    if (selectedCategory) {
      setSelectedOption({
        label: selectedCategory.name,
        value: selectedCategory.id,
      });
      detectarCambiosCategory(selectedCategory.id);
    } else {
      setSelectedOption(null);
    }
  }, [category_id, categories]);

  // Actualizar el caché cuando cambian las categorías
  useEffect(() => {
    if (categories.length > 0) {
      setCachedCategories(categories);
    }
  }, [categories]);

  // Manejar el cambio de categoría
  const handleCategoryChange = (event) => {
    const selectedCategoryId = event.target.value;
    const selectedCategory = cachedCategories.find(
      (cat) => cat.id === selectedCategoryId
    );

    setSelectedOption(
      selectedCategory
        ? {
            label: selectedCategory.name,
            value: selectedCategory.id,
          }
        : null
    );

    detectarCambiosCategory(selectedCategoryId);
  };

  // Mapear las opciones para el Select
  const selectOptions = cachedCategories.map((category) => ({
    label: category.name,
    value: category.id,
  }));

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="parking-options-label">Selecciona categoría</InputLabel>
        <Select
          required
          labelId="parking-options-label"
          id="parking-options-select"
          value={selectedOption ? selectedOption.value : ""}
          onChange={handleCategoryChange}
          label="Selecciona categoría"
          name="account"
        >
          {selectOptions.map((category) => (
            <MenuItem value={category.value} key={category.value}>
              {category.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

CategoriesSelect.propTypes = {
  category_id: PropTypes.number,
  detectarCambiosCategory: PropTypes.func.isRequired,
};

export default CategoriesSelect;