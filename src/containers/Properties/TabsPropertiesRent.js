import * as React from "react";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import PropertiesPublishRent from "./PropertiesPublishRent";
import { Grid, Typography } from "@mui/material";
export default function TabsPropertiesRent() {
  const [value, setValue] = React.useState("4");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
        <Typography
          fontWeight="bold"
          fontFamily="monospace"
          variant="h5"
          sx={{ color: "black" }}
        >
          Propiedades Rentadas
        </Typography>
      </Grid>
      <TabContext value={value}>
        <TabPanel value="4">
          <PropertiesPublishRent />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
