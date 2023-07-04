import { Grid, Typography } from "@mui/material";
import React from "react";

const GeneralPropery = ({ name, description, rules, category }) => {
  if (rules !== undefined) {
    let detail = rules.map((rule) => rule.detail);
    var final_price = detail.map((det) => det.final_price);
  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography fontWeight="bold" variant="body1" textAlign="center">
          Detalles generales
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
        Propiedad: {name}
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
        Categoria: {category?.name}
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
        Precio: {final_price}
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        Descripcion: {description}
      </Grid>
    </Grid>
  );
};

export default GeneralPropery;
