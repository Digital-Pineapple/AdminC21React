/**
 * Componente CardProperties:
 * Muestra una tarjeta que presenta el total de propiedades, utilizando un ícono de ciudad y un contador con el número total de propiedades.
 * La tarjeta tiene un fondo de color naranja y está diseñada para mostrar el total de propiedades de manera destacada.
 * Es útil para mostrar métricas clave en la interfaz de usuario.
 * 
 * Propiedades:
 * - `total_properties`: Número total de propiedades que se mostrarán en la tarjeta.
 * 
 * El componente es responsivo y utiliza Material-UI para los estilos y componentes.
 */
import { Card, Hidden, Typography } from "@mui/material";
import React from "react";
import StoreIcon from "@mui/icons-material/Store";
import { makeStyles } from "@mui/styles";
import LocationCityIcon from "@mui/icons-material/LocationCity";
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
const CardProperties = ({ total_properties }) => {
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
        <LocationCityIcon
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
          {t("totalPropiedades")}
        </Typography>
        <Typography
          sx={{
            fontSize: 23,
            color: "black",
            border: "1px",
            borderColor: "green",
          }}
        >
          {total_properties}
        </Typography>
      </div>
    </Card>
  );
};

export default CardProperties;
