/**
 * `CategoriesSelect` es un componente de selección que permite elegir una categoría de una lista de categorías obtenida desde el contexto `CategoryContext`.
 * - Utiliza el componente `Select` de Material-UI para renderizar un desplegable con las categorías disponibles.
 * - Las categorías son recuperadas mediante el hook `useContext` y la función `GetCategories`, la cual se ejecuta al montar el componente.
 * - El valor de la categoría seleccionada se guarda en el estado `selectedCategory` y se pasa al componente padre mediante la función `detectarCambiosCategory`.
 * 
 * El componente permite que el usuario seleccione una categoría de una lista dinámica que es gestionada desde el contexto, lo que facilita su actualización global en la aplicación.
 */
import React, { useContext, useEffect, useState } from "react";
import CategoryContext from "../../context/Categories/CategoryContext";
import { InputLabel, FormControl, Select, MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";

const CategoriesSelect = (props) => {
  const { t } = useTranslation();
  const { GetCategories, categories } = useContext(CategoryContext);
  const [selectedCategory, setSelectedCategory] = useState(
    props.category_id || ""
  );

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
        <InputLabel id="parking-options-label">
          {t("seleccionaCategoria")}
        </InputLabel>
        <Select
          required
          labelId="parking-options-label"
          id="parking-options-select"
          value={selectedCategory}
          onChange={detectarCambiosCategory}
          label={t("seleccionaCategoria")}
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
