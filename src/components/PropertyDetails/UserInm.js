/**
 * `UserInm` muestra la información de un asesor, como nombre, apellido, email y teléfono.
 * Utiliza Material-UI para la disposición y traducción de textos con `react-i18next`.
 * 
 * Propiedades:
 * - `user_inm`: objeto que contiene los datos del asesor bajo la propiedad `owner`.
 */
import React from "react";
import { Grid, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import BadgeIcon from "@mui/icons-material/Badge";
import { useTranslation } from "react-i18next";

const UserInm = (user_inm) => {
  const { t } = useTranslation();
  const { owner } = user_inm;
  const { name, email, last_name, phone_number } = owner;

  return (
    <Grid container spacing={2}>
      {user_inm && (
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
              {t("Asesor")}
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

export default UserInm;
