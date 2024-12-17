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
