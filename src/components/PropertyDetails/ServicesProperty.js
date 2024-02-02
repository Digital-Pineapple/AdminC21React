import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import ImageIcon from "@mui/icons-material/Image";
import SettingsIcon from "@mui/icons-material/Settings";
const ServicesProperty = ({ services }) => {
  return (
    <Grid container spacing={2}>
      {services && (
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" fontWeight="bold" fontFamily="monospace">
              Servicios de la propiedad:
            </Typography>
          </Grid>
        </Grid>
      )}
      {services.map((service) => (
        <>
          <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
            <ListItem>
              <SettingsIcon sx={{ color: "#757575" }} />
              <ListItemText primary={service.name} />
            </ListItem>
          </Grid>
        </>
      ))}
    </Grid>
  );
};

export default ServicesProperty;
