import { Grid, Typography } from "@mui/material";
import React from "react";

const GeneralPropery = ({ name, description, rules, category }) => {
  if (rules !== undefined) {
    let detail = rules.map((rule) => rule.detail);
    var final_price = detail.map((det) => det.final_price);
    var name = rules.map((rul) => rul.name);
  }
  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
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
          Detalles generales:
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={10}>
        <Typography variant="h6" fontWeight="bold">
          Descripcion:
        </Typography>
        {description}
      </Grid>

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
          Precios:
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
        <Typography variant="h6" fontWeight="bold">
          Tipo de operación:
        </Typography>
        {name}
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
        <Typography variant="h6" fontWeight="bold">
          Precio de {name}:
        </Typography>
        $ {final_price} MXN
      </Grid>
    </Grid>
  );
};

export default GeneralPropery;
