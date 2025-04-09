/**
 * El componente `Amenidades` muestra una serie de características de una propiedad,
 * tales como antigüedad, habitaciones, estacionamiento, remodelación, baños completos,
 * medios baños y dimensiones, todo esto usando Material-UI.
 *
 * Cada atributo se presenta con un ícono y texto, además de estar traducido
 * dinámicamente usando `react-i18next` para soportar múltiples idiomas.
 *
 * El componente recibe las propiedades de `details`, que contienen la información
 * que se mostrará en la interfaz. Si los detalles están disponibles, se genera
 * un `Grid` de Material-UI con los distintos atributos de la propiedad.
 *
 * Los atributos presentados incluyen:
 * - Edad de la propiedad
 * - Número de habitaciones
 * - Disponibilidad de estacionamiento
 * - Si la propiedad ha sido remodelada
 * - Número de baños completos y medios baños
 * - Tamaños de la propiedad (metros construidos y metros totales)
 */
import { Grid, Typography, Chip } from "@mui/material";
import React from "react";
import EventIcon from "@mui/icons-material/Event";
import BedroomParentIcon from "@mui/icons-material/BedroomParent";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import BuildIcon from "@mui/icons-material/Build";
import BathtubIcon from "@mui/icons-material/Bathtub";
import StraightenIcon from "@mui/icons-material/Straighten";
import { useTranslation } from "react-i18next";

const Amenidades = ({ details }) => {
  const { t } = useTranslation();
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
              color: "#ffb300",
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              fontFamily="monospace"
              sx={{ color: "#ffb300" }}
            >
              {t("amenidades")}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
            >
              <EventIcon sx={{ marginRight: 1, color: "#4caf50" }} />
              {t("añosDeAntiguedad")}
            </Typography>
            <Typography variant="body1">{age}</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
            >
              <BedroomParentIcon sx={{ marginRight: 1, color: "#ff9800" }} />
              {t("habitaciones")}
            </Typography>
            <Typography variant="body1">{rooms}</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
            >
              <DirectionsCarIcon sx={{ marginRight: 1, color: "#2196f3" }} />
              {t("estacionamiento")}
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
              <BuildIcon sx={{ marginRight: 1, color: "#ff5722" }} />
              {t("remodelación")}
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
              <BathtubIcon sx={{ marginRight: 1, color: "#3f51b5" }} />
              {t("bañosCompletos")}
            </Typography>
            <Typography variant="body1">{bathroom}</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
            >
              <BathtubIcon sx={{ marginRight: 1, color: "#673ab7" }} />
              {t("mediosBaños")}
            </Typography>
            <Typography variant="body1">{half_bath}</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
            >
              <StraightenIcon sx={{ marginRight: 1, color: "#009688" }} />
              {t("metrosTotales")}
            </Typography>
            <Typography variant="body1">{size_total} m²</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
            >
              <StraightenIcon sx={{ marginRight: 1, color: "#795548" }} />
              {t("metrosConstruidos")}
            </Typography>
            <Typography variant="body1">{size} m²</Typography>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Amenidades;
