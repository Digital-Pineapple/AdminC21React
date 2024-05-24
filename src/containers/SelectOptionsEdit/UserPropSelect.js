import React, { useContext, useEffect, useState } from "react";
import { InputLabel, FormControl, Select, MenuItem } from "@mui/material";
import PropTypes from "prop-types";
import UsersContext from "../../context/Users/UsersContext";

const UserPropSelect = ({ userInm_id, detectarCambiosUserInm }) => {
  // Contexto y estados
  const { GetUsers, users } = useContext(UsersContext);
  const [selectedOption, setSelectedOption] = useState(null);
  const [cachedUserInm, setCachedUserInm] = useState([]);

  // Obtener categorías cuando el caché está vacío
  useEffect(() => {
    if (cachedUserInm.length === 0) {
      GetUsers();
    }
  }, [cachedUserInm, GetUsers]);

  // Configurar la opción seleccionada cuando cambia la categoría_id
  useEffect(() => {
    const selectedCategory = users.find((cat) => cat.id === userInm_id);

    if (selectedCategory) {
      setSelectedOption({
        label: selectedCategory.name,
        value: selectedCategory.id,
      });
      detectarCambiosUserInm(selectedCategory.id);
    } else {
      setSelectedOption(null);
    }
  }, [userInm_id, users]);

  // Actualizar el caché cuando cambian las categorías
  useEffect(() => {
    if (users.length > 0) {
      setCachedUserInm(users);
    }
  }, [users]);

  // Manejar el cambio de categoría
  const handleCategoryChange = (event) => {
    const selectedCategoryId = event.target.value;
    const selectedCategory = cachedUserInm.find(
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

    detectarCambiosUserInm(selectedCategoryId);
  };

  // Mapear las opciones para el Select
  const selectOptions = cachedUserInm.map((user) => ({
    label: user.name,
    value: user.id,
  }));

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="parking-options-label">
          Selecciona Asesor de la propiedad
        </InputLabel>
        <Select
          labelId="parking-options-label"
          id="parking-options-select"
          value={selectedOption ? selectedOption.value : ""}
          onChange={handleCategoryChange}
          label="Selecciona Asesor de la propiedad"
          name="account"
        >
          {selectOptions.length === 0 ? (
            <MenuItem disabled>Primero debe agregar asesores</MenuItem>
          ) : (
            selectOptions.map((user) => (
              <MenuItem value={user.value} key={user.value}>
                {user.label}
              </MenuItem>
            ))
          )}
        </Select>
      </FormControl>
    </div>
  );
};

UserPropSelect.propTypes = {
  userInm_id: PropTypes.number,
  detectarCambiosUserInm: PropTypes.func.isRequired,
};

export default UserPropSelect;
