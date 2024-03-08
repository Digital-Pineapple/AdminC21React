import * as React from "react";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import PropertiesPublish from "./PropertiesPublish";
import { Grid, Typography } from "@mui/material";
export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
        <Typography
          fontWeight="bold"
          fontFamily="monospace"
          variant="h4"
          sx={{ color: "#1F3473" }}
        >
          Propiedades Aprobadas
        </Typography>
      </Grid>
      <TabContext value={value}>
        <TabPanel value="1">
          <PropertiesPublish />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
