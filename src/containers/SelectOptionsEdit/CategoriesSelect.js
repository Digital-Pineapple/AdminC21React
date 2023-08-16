import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { InputLabel } from "@mui/material";
import CategoryContext from "../../context/Categories/CategoryContext";

const CategoriesSelect = ({ category_id, detectarCambiosCategory }) => {
  const { GetCategories, categories } = useContext(CategoryContext);
  const [selectedOption, setSelectedOption] = useState(null);
  const [cachedCategories, setCachedCategories] = useState([]);

  useEffect(() => {
    if (cachedCategories.length === 0) {
      GetCategories();
    }
  }, [cachedCategories, GetCategories]);

  useEffect(() => {
    const selectedCategory = categories.find((cat) => cat.id === category_id);

    if (selectedCategory) {
      setSelectedOption({
        label: selectedCategory.name,
        value: selectedCategory.id,
      });
    } else {
      setSelectedOption(null);
    }
  }, [category_id, categories]);

  useEffect(() => {
    if (categories.length > 0) {
      setCachedCategories(categories);
    }
  }, [categories]);

  const handleCategoryChange = (selected) => {
    setSelectedOption(selected);
    detectarCambiosCategory(selected ? selected.value : null);
  };

  const selectOptions = cachedCategories.map((category) => ({
    label: category.name,
    value: category.id,
  }));

  return (
    <>
      <InputLabel>Selecciona categoría</InputLabel>
      <Select
        fullWidth
        onChange={handleCategoryChange}
        value={selectedOption}
        classNamePrefix="select"
        name="account"
        placeholder="Selecciona categoría"
        options={selectOptions}
      />
    </>
  );
};

CategoriesSelect.propTypes = {
  category_id: PropTypes.number,
  detectarCambiosCategory: PropTypes.func.isRequired,
};

export default CategoriesSelect;
