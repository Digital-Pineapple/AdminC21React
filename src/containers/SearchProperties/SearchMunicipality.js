/**
 * `SearchMunicipality` es un componente que permite seleccionar un municipio basado en el estado proporcionado.
 * - Realiza una solicitud a la API para obtener los municipios de un estado determinado a través del prop `state_id`.
 * - El valor seleccionado se guarda en el estado local `selectedMunicipality` y se pasa a través de la función `detectarCambiosMunicipality` proporcionada por el componente padre.
 * 
 * Funcionalidades:
 * - Utiliza el componente `Select` de Material-UI para mostrar la lista de municipios.
 * - Los municipios se cargan dinámicamente cuando el `state_id` cambia.
 * - Los municipios se muestran en un `MenuItem` dentro del `Select`, y el usuario puede elegir uno.
 * - El `Select` muestra el nombre del municipio y guarda el ID del municipio seleccionado en el estado local.
 */
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MethodGet from "../../config/service";
import { useTranslation } from "react-i18next";

const SearchMunicipality = (props) => {
  const { t } = useTranslation();
  const [municipalities, saveMunicipalities] = useState([]);
  const [selectedMunicipality, setSelectedMunicipality] = useState("");

  useEffect(() => {
    if (props.state_id) {
      let url = `/states/municipalities/${props.state_id}`;
      MethodGet(url)
        .then((res) => {
          saveMunicipalities(res.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [props.state_id]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedMunicipality(value);
    props.detectarCambiosMunicipality(value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-municipality-label">
          {t("seleccionaMunicipio")}
        </InputLabel>
        <Select
          labelId="select-municipality-label"
          id="select-municipality"
          value={selectedMunicipality}
          label={t("seleccionaMunicipio")}
          onChange={handleChange}
        >
          {municipalities.map((muni) => (
            <MenuItem key={muni.id} value={muni.id}>
              {muni.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SearchMunicipality;
