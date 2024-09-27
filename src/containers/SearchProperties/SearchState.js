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
