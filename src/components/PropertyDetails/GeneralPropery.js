/**
 * El componente `GeneralProperty` muestra los detalles generales de una propiedad, 
 * incluyendo descripción, precios, y comisiones asociadas a la operación. 
 * 
 * Utiliza Material-UI para organizar y presentar la información de manera estructurada. 
 * Los detalles son traducidos utilizando `react-i18next` para soportar múltiples idiomas.
 * 
 * El componente recibe las siguientes propiedades:
 * - `name`: Nombre de la propiedad (aunque no se usa explícitamente en este código).
 * - `description`: Descripción de la propiedad.
 * - `rules`: Reglas relacionadas con la propiedad, incluyendo comisiones y precios.
 * - `category`: Categoría de la propiedad (aunque no se usa explícitamente en este código).
 * 
 * Los elementos presentados incluyen:
 * - Descripción de la propiedad.
 * - Tipo de operación (venta, renta, etc.).
 * - Precio de renta o venta.
 * - Cálculo de comisiones, si existe alguna. Si la propiedad comparte comisión, se muestra un cálculo con el porcentaje y el monto.
 * 
 * El componente también maneja el formato adecuado para los precios utilizando `Intl.NumberFormat` para dar formato en pesos mexicanos (MXN).
 */
import { Grid, Typography } from "@mui/material";
import React from "react";
import PercentIcon from "@mui/icons-material/Percent";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DescriptionIcon from "@mui/icons-material/Description";
import { useTranslation } from "react-i18next";

const formatPrice = (price) => {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 2,
  }).format(price);
};

const GeneralProperty = ({ name, description, rules, category }) => {
  const { t } = useTranslation();
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
          {t("detallesGenerales")}
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
        >
          <DescriptionIcon sx={{ marginRight: 1, color: "#4CAF50" }} />
          {t("descripción")}
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
          {t("precios")}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
        >
          <AttachMoneyIcon sx={{ marginRight: 1, color: "#FFC107 " }} />
          {t("TipoOperación")}
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
         {t("PrecioRenta")} {ruleNames.join(", ")}:
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
            ? t("comision")
            : t("nocomision")}
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
            <div>{t("nocomisioon")}</div>
          )}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default GeneralProperty;
