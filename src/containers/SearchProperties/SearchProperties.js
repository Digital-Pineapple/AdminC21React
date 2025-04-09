/**
 * `SearchProperties` es un componente que permite a los usuarios realizar búsquedas avanzadas de propiedades mediante diversos filtros.
 * - Utiliza `Tabs` para gestionar diferentes vistas de la interfaz, permitiendo un filtro por nombre, servicio, categoría, estado y municipio.
 * - Los datos de búsqueda se gestionan a través de estados locales, y las búsquedas se realizan en función de los cambios en estos estados.
 * - Cada filtro se maneja a través de componentes de búsqueda específicos:
 *   - `SearchService`: Filtra por tipo de servicio.
 *   - `SearchCategory`: Filtra por categoría de propiedad.
 *   - `SearchName`: Filtra por nombre o dirección de la propiedad.
 *   - `SearchState`: Filtra por estado.
 *   - `SearchMunicipality`: Filtra por municipio, que solo se activa si se selecciona un estado.
 * 
 * Funcionalidades:
 * - La búsqueda de propiedades se activa automáticamente cada vez que el usuario cambia algún filtro.
 * - Los filtros seleccionados se pasan al contexto `PropertiesContext`, y la función `SearchProperties` se ejecuta para realizar la búsqueda.
 * - La vista de los filtros se adapta dinámicamente según los valores de los filtros previos (por ejemplo, el filtro de municipio solo se muestra si se ha seleccionado un estado).
 */
import React, { useEffect, useState, useContext } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import Layout from "../../components/layout/Layout";
import TabsProperties from "./TabsProperties";
import SearchService from "./SearchService";
import SearchCategory from "./SearchCategory";
import SearchName from "./SearchName";
import SearchState from "./SearchState";
import SearchMunicipality from "./SearchMunicipality";
import PropertiesContext from "../../context/Properties/PropertiesContext";

export default function SearchProperties() {
  const [value, setValue] = useState("3");
  const handleChange = (event, newValue) => setValue(newValue);

  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [category, setCategory] = useState("");
  const [state, setState] = useState("");
  const [municipality, setMunicipality] = useState("");

  const { SearchProperties } = useContext(PropertiesContext);

  useEffect(() => {
    let data = {
      name: name ?? "",
      service: service ?? "",
      category: category ?? "",
      state: state ?? "",
      municipality: municipality ?? "",
    };
    SearchProperties(data);
  }, [name, category, service, state, municipality]);

  useEffect(() => {
    if (!state) {
      setMunicipality("");
    }
  }, [state]);

  const renderSearchCategory = service !== undefined && service !== "";

  return (
    <Layout>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid container spacing={2} sx={{ padding: 1 }}>
          <Grid item xs={12}>
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <TabPanel value="3">
                  <Grid
                    container
                    spacing={4}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Grid item xs={12} md={6} lg={4}>
                      <SearchService cambio={setService} />
                    </Grid>
                    {renderSearchCategory && (
                      <Grid item xs={12} md={6} lg={4}>
                        <SearchCategory cambio={setCategory} />
                      </Grid>
                    )}
                    <Grid item xs={12} md={6} lg={4}>
                      <SearchName cambio={setName} />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                      <SearchState detectarCambiosState={setState} />
                    </Grid>
                    {state && (
                      <Grid item xs={12} md={6} lg={4}>
                        <SearchMunicipality
                          state_id={state}
                          detectarCambiosMunicipality={setMunicipality}
                        />
                      </Grid>
                    )}
                  </Grid>
                  <TabsProperties />
                </TabPanel>
              </TabContext>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
