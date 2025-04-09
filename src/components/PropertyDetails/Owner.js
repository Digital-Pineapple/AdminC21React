/**
 * El componente `Owner` muestra la información de contacto de un propietario, como su nombre, apellido, 
 * correo electrónico y número de teléfono. Los datos se presentan en un diseño de cuadrícula utilizando 
 * los componentes de MUI (Material-UI) y están acompañados de iconos correspondientes para cada tipo de 
 * información, como el nombre, correo electrónico y teléfono.
 * 
 * El componente recibe un objeto `owner` como propiedad, que debe contener las claves `name`, `last_name`, 
 * `email` y `phone_number`. Estos datos se despliegan en una serie de tarjetas con iconos para mejorar la 
 * accesibilidad y el diseño visual. Además, se utiliza la librería `react-i18next` para traducir los textos 
 * a diferentes idiomas.
 * 
 * Propiedades recibidas:
 * - `owner`: Un objeto que contiene la información del propietario, que incluye:
 *    - `name`: El nombre del propietario.
 *    - `last_name`: El apellido del propietario.
 *    - `email`: El correo electrónico del propietario.
 *    - `phone_number`: El número de teléfono del propietario.
 * 
 * El componente presenta la información en un formato responsivo, mostrando una cuadrícula que se adapta 
 * a diferentes tamaños de pantalla, con íconos coloridos para facilitar la lectura y la interacción del usuario.
 */
import React from "react";
import { Grid, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import BadgeIcon from "@mui/icons-material/Badge";
import { useTranslation } from "react-i18next";

const Owner = ({ owner }) => {
  const { t } = useTranslation();
  const { name, email, last_name, phone_number } = owner || {};
  return (
    <Grid container spacing={2}>
      {owner && (
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
              sx={{ color: "#ffb300", marginBottom: 2 }}
            >
              {t("contacto")}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
            >
              <BadgeIcon sx={{ marginRight: 1, color: "#1e88e5" }} />
              {t("nombre")}
            </Typography>
            <Typography variant="body1">{name}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
            >
              <BadgeIcon sx={{ marginRight: 1, color: "#1e88e5" }} />
              {t("apellido")}
            </Typography>
            <Typography variant="body1">{last_name}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
            >
              <EmailIcon sx={{ marginRight: 1, color: "#d32f2f" }} />
              {t("email")}
            </Typography>
            <Typography variant="body1">{email}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
            >
              <PhoneIcon sx={{ marginRight: 1, color: "#388e3c" }} />
              {t("telefono")}
            </Typography>
            <Typography variant="body1">{phone_number}</Typography>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Owner;
