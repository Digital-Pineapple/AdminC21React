import React from "react";
import { Grid, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useTranslation } from "react-i18next";

const ServicesProperty = ({ services }) => {
  const { t } = useTranslation();
  return (
    <Grid container spacing={2}>
      {services.length > 0 && (
        <Grid item xs={12}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#ffb734",
              marginBottom: 2,
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              fontFamily="monospace"
              sx={{ color: "#ffb734" }}
            >
              {t("serviciosPro")}
            </Typography>
          </Grid>
        </Grid>
      )}
      {services.map((service, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: 1,
          }}
        >
          <SettingsIcon sx={{ marginRight: 1, color: "#FF9800" }} />

          <Typography variant="h6" fontWeight="bold">
            {service.name}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default ServicesProperty;
