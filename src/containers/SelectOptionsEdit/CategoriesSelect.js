/**
 * `CategoriesSelect` es un componente que permite seleccionar una categoría de una lista de categorías.
 * - Utiliza el contexto `CategoryContext` para obtener las categorías disponibles a través de la función `GetCategories`.
 * - La lista de categorías se almacena en el estado `cachedCategories` para evitar realizar múltiples solicitudes a la API.
 * - El valor de la categoría seleccionada se guarda en el estado `selectedOption` y se pasa al componente padre mediante la prop `detectarCambiosCategory`.
 * - Cuando cambia la propiedad `category_id`, se actualiza el valor seleccionado, y se busca la categoría correspondiente en la lista de categorías.
 * - El componente solo muestra las categorías cargadas en el caché, y realiza la actualización de la lista cuando cambia la propiedad `categories`.
 * 
 * Este componente es útil para que los usuarios seleccionen una categoría de una lista disponible en una plataforma, como por ejemplo, en un sistema de administración de propiedades inmobiliarias.
 */
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import PropTypes from "prop-types";
import CategoryContext from "../../context/Categories/CategoryContext";

const CategoriesSelect = ({ category_id, detectarCambiosCategory }) => {
  const { t } = useTranslation();
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
        <InputLabel id="parking-options-label">
          {t("seleccionaCategoria")}
        </InputLabel>
        <Select
          required
          labelId="parking-options-label"
          id="parking-options-select"
          value={selectedOption ? selectedOption.value : ""}
          onChange={handleCategoryChange}
          label={t("seleccionaCategoria")}
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
