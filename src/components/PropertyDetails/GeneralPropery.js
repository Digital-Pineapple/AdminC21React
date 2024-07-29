import { Grid, Typography } from "@mui/material";
import React from "react";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DescriptionIcon from "@mui/icons-material/Description";

const GeneralProperty = ({ name, description, rules, category }) => {
  const detail = rules?.map((rule) => rule.detail) || [];
  const final_price = detail.map((det) => det.final_price) || [];
  const ruleNames = rules?.map((rul) => rul.name) || [];

  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#1f3473",
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          fontFamily="monospace"
          sx={{ color: "#1f3473" }}
        >
          Detalles generales
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
        >
          <DescriptionIcon sx={{ marginRight: 1 }} />
          Descripción:
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#1f3473",
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          fontFamily="monospace"
          sx={{ color: "#1f3473" }}
        >
          Precios
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
        >
          <AttachMoneyIcon sx={{ marginRight: 1 }} />
          Tipo de operación:
        </Typography>
        <Typography variant="body1">{ruleNames.join(", ")}</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
        >
          <AttachMoneyIcon sx={{ marginRight: 1 }} />
          Precio de {ruleNames.join(", ")}:
        </Typography>
        <Typography variant="body1">$ {final_price.join(", ")} MXN</Typography>
      </Grid>
    </Grid>
  );
};

export default GeneralProperty;
