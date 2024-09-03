import { Grid, Typography } from "@mui/material";
import React from "react";
import PercentIcon from "@mui/icons-material/Percent";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DescriptionIcon from "@mui/icons-material/Description";

const formatPrice = (price) => {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 2,
  }).format(price);
};

const GeneralProperty = ({ name, description, rules, category }) => {
  const detail = rules?.map((rule) => rule.detail) || [];
  const commission = detail.map((det) => det.commission) || [];
  const final_price = detail.map((det) => det.final_price) || [];
  const ruleNames = rules?.map((rul) => rul.name) || [];

  // Calcula las comisiones en base al precio final
  const commissionsInMXN = commission.map((perc, index) => {
    const price = final_price[index];
    return price ? ((price * perc) / 100).toFixed(2) : "0.00";
  });

  // Determina si la propiedad comparte comisión
  const sharesCommission = commission.some((perc) => perc > 0);

  return (
    <Grid container spacing={2}>
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
          Detalles generales
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
        >
          <DescriptionIcon sx={{ marginRight: 1, color: "#4CAF50" }} />
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
          color: "#ffb300",
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          fontFamily="monospace"
          sx={{ color: "#ffb300" }}
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
          <AttachMoneyIcon sx={{ marginRight: 1, color: "#FFC107 " }} />
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
          <AttachMoneyIcon sx={{ marginRight: 1, color: "#FFC107" }} />
          Precio de {ruleNames.join(", ")}:
        </Typography>
        <Typography variant="body1">
          {final_price.map((price) => formatPrice(price)).join(", ")} MXN
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
        >
          <PercentIcon sx={{ marginRight: 1, color: "#FF2530" }} />
          {sharesCommission
            ? "Esta propiedad comparte comisión"
            : "Esta propiedad no comparte comisión"}
        </Typography>
        <Typography variant="body1">
          {sharesCommission ? (
            commission.map((perc, index) => (
              <div key={index}>
                {perc}% de {formatPrice(final_price[index])} ={" "}
                {formatPrice(commissionsInMXN[index])} MXN
              </div>
            ))
          ) : (
            <div>No se aplica comisión.</div>
          )}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default GeneralProperty;
