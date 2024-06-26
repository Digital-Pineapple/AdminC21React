import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabsProperties from "./TabsProperties";
import TabPanel from "@mui/lab/TabPanel";
import Layout from "../../components/layout/Layout";
import { Grid, Typography } from "@mui/material";
import SearchService from "./SearchService";
import SearchCategory from "./SearchCategory";
import SearchName from "./SearchName";
import PropertiesContext from "../../context/Properties/PropertiesContext";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function SearchProperties() {
  const [value, setValue] = React.useState("3");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [name, setname] = useState();
  const [service, setservice] = useState();
  const [category, setcategory] = useState();

  const { SearchProperties } = useContext(PropertiesContext);

  useEffect(() => {
    let data = {};
    data.name = name ?? "";
    data.service = service ?? "";
    data.category = category ?? "";
    SearchProperties(data);
  }, [name, category, service]);

  const renderSearchCategory = service !== undefined && service !== "";

  return (
    <Layout>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid container spacing={2} sx={{ padding: 1 }}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <TabPanel value="3">
                  <Grid
                    container
                    spacing={4}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={2}>
                      <SearchService cambio={setservice} />
                    </Grid>
                    {renderSearchCategory && (
                      <Grid item xs={12} sm={12} md={6} lg={4} xl={2}>
                        <SearchCategory cambio={setcategory} />
                      </Grid>
                    )}
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={2}>
                      <SearchName cambio={setname} />
                    </Grid>
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
