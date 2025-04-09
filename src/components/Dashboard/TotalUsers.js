/**
 * Componente TotalUsers:
 * Muestra una tarjeta que presenta el total de usuarios registrados en la plataforma.
 * Esta tarjeta incluye un ícono visual de "Grupo" para representar a los usuarios y muestra la cantidad total de usuarios registrados en la interfaz.
 * Los datos son pasados como una propiedad `total_users`.
 * 
 * El componente utiliza Material-UI para el diseño de la tarjeta y la tipografía, y se traduce utilizando la librería `react-i18next` para la internacionalización.
 * 
 * Propiedades:
 * - `total_users`: número total de usuarios registrados a mostrar.
 * 
 * Uso:
 * - Ideal para mostrar un resumen de usuarios registrados en una sección del dashboard.
 * - El diseño se adapta bien en pantallas grandes y pequeñas, gracias al uso de `sx` para estilo y `makeStyles` para personalización.
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
const TotalUsers = ({ total_users }) => {
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
          {t("totalUsuarios")}
        </Typography>
        <Typography
          sx={{
            fontSize: 23,
            color: "black",
            border: "1px",
            borderColor: "green",
          }}
        >
          {total_users}
        </Typography>
      </div>
    </Card>
  );
};

export default TotalUsers;
