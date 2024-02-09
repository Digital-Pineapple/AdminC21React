import { Chip, Grid, Typography } from "@mui/material";
import React from "react";
import { Stack } from "react-bootstrap";

const Amenidades = ({ details }) => {
  const {
    age,
    rooms,
    parking,
    remodel,
    bathroom,
    size,
    size_total,
    half_bath,
  } = details;
  return (
    <Grid container spacing={2}>
      {details !== null && (
        <>
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
              Amenidades:
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Typography variant="h6" fontWeight="bold">
              Años de antiguedad:
            </Typography>
            {age}
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Typography variant="h6" fontWeight="bold">
              Habitaciones:
            </Typography>
            {rooms}
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Typography variant="h6" fontWeight="bold">
              Estacionamiento:
            </Typography>
            {parking === 1 ? `Si` : "No"}
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Typography variant="h6" fontWeight="bold">
              En remodelacion:
            </Typography>
            {remodel === 1 ? `Si` : "No"}
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Typography variant="h6" fontWeight="bold">
              Baños:
            </Typography>
            {bathroom}
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Typography variant="h6" fontWeight="bold">
              Medios Baños
            </Typography>
            {half_bath}
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Typography variant="h6" fontWeight="bold">
              Metros Totales
            </Typography>
            {size_total}M²
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Typography variant="h6" fontWeight="bold">
              Metros Construidos
            </Typography>
            {size}M
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Amenidades;
