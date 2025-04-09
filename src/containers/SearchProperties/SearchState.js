/**
 * `SearchState` es un componente que permite a los usuarios seleccionar un estado de una lista de estados disponibles.
 * - Al montar el componente, realiza una solicitud GET a la API para obtener todos los estados mediante `MethodGet`.
 * - Los estados se guardan en el estado local `states` y se muestran en un componente `Select` de Material-UI.
 * - Los usuarios pueden seleccionar un estado de la lista desplegable, lo que actualizará el estado local `selectedState`.
 * - Al seleccionar un estado, el valor seleccionado se pasa al componente padre a través de la función `detectarCambiosState`.
 * 
 * Funcionalidades:
 * - Se muestra un `InputLabel` y un `Select` con los estados disponibles.
 * - La lista de estados se obtiene dinámicamente desde la API, y cada estado se presenta como un `MenuItem` en el componente `Select`.
 * - El valor seleccionado se pasa como argumento al componente padre cada vez que se realiza un cambio.
 */
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MethodGet from "../../config/service";
import { useTranslation } from "react-i18next";

const SearchState = (props) => {
  const { t } = useTranslation();
  const [states, saveStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");

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

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedState(value);
    props.detectarCambiosState(value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-state-label">{t("seleccionaEstado")}</InputLabel>
        <Select
          labelId="select-state-label"
          id="select-state"
          value={selectedState}
          label={t("seleccionaEstado")}
          onChange={handleChange}
        >
          {states.map((state) => (
            <MenuItem key={state.id} value={state.id}>
              {state.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SearchState;
