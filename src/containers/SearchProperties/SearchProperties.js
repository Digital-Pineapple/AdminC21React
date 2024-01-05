import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabsProperties from "./TabsProperties";
import TabPanel from "@mui/lab/TabPanel";
import Layout from "../../components/layout/Layout";
import { Grid } from "@mui/material";
import SearchService from "./SearchService";
import SearchCategory from "./SearchCategory";
import SearchName from "./SearchName";

export default function SearchProperties() {
  const [value, setValue] = React.useState("3");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid container spacing={2} sx={{ padding: 1 }}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    textColor="white"
                    aria-label="lab API tabs example"
                    sx={{ backgroundColor: "#AE445A", color: "white" }}
                  >
                    <Tab label="Buscar Propiedades" value="3" />
                  </TabList>
                </Box>
                <TabPanel value="3">
                  <Grid
                    container
                    spacing={4}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={2}>
                      <SearchService />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={2}>
                      <SearchCategory />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={2}>
                      <SearchName />
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
