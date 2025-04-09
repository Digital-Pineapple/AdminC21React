/**
 * Componente PropertiesSold:
 * Muestra una tarjeta que presenta el total de propiedades vendidas.
 * Esta tarjeta incluye un ícono visual de "Venta" para representar las propiedades vendidas y muestra la cantidad total de propiedades vendidas en la interfaz.
 * Los datos son pasados como una propiedad `total_properties_sold`.
 * 
 * El componente utiliza Material-UI para el diseño de la tarjeta y la tipografía, y se traduce utilizando la librería `react-i18next` para internacionalización.
 * 
 * Propiedades:
 * - `total_properties_sold`: número total de propiedades vendidas a mostrar.
 * 
 * Uso:
 * - Ideal para mostrar un resumen de propiedades vendidas en una sección del dashboard.
 * - El diseño se adapta bien en pantallas grandes y pequeñas, gracias al uso de `sx` para estilo y `makeStyles` para personalización.
 */
import { Card, Hidden, Typography } from "@mui/material";
import React from "react";
import DataThresholdingIcon from "@mui/icons-material/DataThresholding";
import { makeStyles } from "@mui/styles";
import SellIcon from "@mui/icons-material/Sell";
import { useTranslation } from "react-i18next";
const useStyles = makeStyles(() => ({
  dollar: {
    objectFit: "cover",
  },
  div_ganancias: {
    marginRight: "5%",
    marginLeft: "5%",
  },
}));
const PropertiesSold = ({ total_properties_sold }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <Card
      style={{ backgroundColor: "#FFB734" }}
      sx={{
        boxShadow: 4,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <div>
        <SellIcon
          style={{
            fontSize: 60,
            marginLeft: 10,
            marginTop: 10,
            marginBottom: 10,
            color: "black",
          }}
        />
      </div>
      <div className={classes.div_ganancias}>
        <Typography
          component="div"
          variant="h5"
          sx={{
            fontWeight: "bold",
            fontSize: 20,
            color: "black",
            border: "1px",
            borderColor: "green",
          }}
        >
          {t("inmueblesVenta")}
        </Typography>
        <Typography
          sx={{
            fontSize: 23,
            color: "black",
            border: "1px",
            borderColor: "green",
          }}
        >
          {total_properties_sold}
        </Typography>
      </div>
    </Card>
  );
};

export default PropertiesSold;
