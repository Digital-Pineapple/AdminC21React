/**
 * Componente TotalUsersInm:
 * Muestra una tarjeta que presenta el total de asesores inmobiliarios registrados en la plataforma.
 * Esta tarjeta incluye un ícono visual de "Grupo" para representar a los asesores y muestra la cantidad total de asesores inmobiliarios registrados en la interfaz.
 * Los datos son pasados como una propiedad `total_usersInm`.
 * 
 * El componente utiliza Material-UI para el diseño de la tarjeta y la tipografía, y se traduce utilizando la librería `react-i18next` para la internacionalización.
 * 
 * Propiedades:
 * - `total_usersInm`: número total de asesores inmobiliarios registrados a mostrar.
 * 
 * Uso:
 * - Ideal para mostrar un resumen de asesores inmobiliarios registrados en una sección del dashboard.
 * - El diseño es adaptativo y responde bien en diferentes tamaños de pantalla, gracias al uso de `sx` para el estilo y `makeStyles` para personalización.
 */
import { Card, Grid, Hidden, Typography } from "@mui/material";
import React from "react";
import GroupIcon from "@mui/icons-material/Group";
import { makeStyles } from "@mui/styles";
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
const TotalUsersInm = ({ total_usersInm }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <Card
      style={{ backgroundColor: "#FFB734" }}
      sx={{
        boxShadow: 4,
        display: "flex",
        alignItems: "center",
        flexDirection: "row ",
      }}
    >
      <div>
        <GroupIcon
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
          {t("totalAsesores")}
        </Typography>
        <Typography
          sx={{
            fontSize: 23,
            color: "black",
            border: "1px",
            borderColor: "green",
          }}
        >
          {total_usersInm}
        </Typography>
      </div>
    </Card>
  );
};

export default TotalUsersInm;
