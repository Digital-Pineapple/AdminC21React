import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PorpertiesPending from "./PorpertiesPending";
export default function LabTabs() {
  const [value, setValue] = React.useState("2");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            textColor="white"
            aria-label="lab API tabs example"
            sx={{ backgroundColor: "#662549", color: "white" }}
          >
            <Tab label="Mis Propiedades Por aprobar" value="2" />
          </TabList>
        </Box>
        <TabPanel value="2">
          <PorpertiesPending />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
