import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
const ServicesProperty = ({ services }) => {
  return (
    <Grid container spacing={2}>
      {services.length > 0 && (
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#662549",
            }}
          >
            <Typography variant="h6" fontWeight="bold" fontFamily="monospace">
              Servicios agregados de la propiedad:
            </Typography>
          </Grid>
        </Grid>
      )}
      {services.map((service) => (
        <>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Typography variant="h6" fontWeight="bold">
              # {service.name}
            </Typography>
          </Grid>
        </>
      ))}
    </Grid>
  );
};

export default ServicesProperty;
