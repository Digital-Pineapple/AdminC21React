import { Grid, Typography, Chip } from "@mui/material";
import React from "react";
import EventIcon from "@mui/icons-material/Event";
import BedroomParentIcon from "@mui/icons-material/BedroomParent";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import BuildIcon from "@mui/icons-material/Build";
import BathtubIcon from "@mui/icons-material/Bathtub";
import StraightenIcon from "@mui/icons-material/Straighten";

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
  } = details || {};

  return (
    <Grid container spacing={2}>
      {details && (
        <>
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
              Amenidades:
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
            >
              <EventIcon sx={{ marginRight: 1 }} />
              Años de antigüedad:
            </Typography>
            <Typography variant="body1">{age}</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
            >
              <BedroomParentIcon sx={{ marginRight: 1 }} />
              Habitaciones:
            </Typography>
            <Typography variant="body1">{rooms}</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
            >
              <DirectionsCarIcon sx={{ marginRight: 1 }} />
              Estacionamiento:
            </Typography>
            <Typography variant="body1">
              {parking === 1 ? "Sí" : "No"}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
            >
              <BuildIcon sx={{ marginRight: 1 }} />
              En remodelación:
            </Typography>
            <Typography variant="body1">
              {remodel === 1 ? "Sí" : "No"}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
            >
              <BathtubIcon sx={{ marginRight: 1 }} />
              Baños:
            </Typography>
            <Typography variant="body1">{bathroom}</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
            >
              <BathtubIcon sx={{ marginRight: 1 }} />
              Medios Baños:
            </Typography>
            <Typography variant="body1">{half_bath}</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
            >
              <StraightenIcon sx={{ marginRight: 1 }} />
              Metros Totales:
            </Typography>
            <Typography variant="body1">{size_total} m²</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
            >
              <StraightenIcon sx={{ marginRight: 1 }} />
              Metros Construidos:
            </Typography>
            <Typography variant="body1">{size} m²</Typography>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Amenidades;
