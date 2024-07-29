import React from "react";
import { Grid, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import BadgeIcon from "@mui/icons-material/Badge";

const UserInm = (user_inm) => {
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
              color: "#1f3473",
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              fontFamily="monospace"
              sx={{ color: "#1f3473", marginBottom: 2 }}
            >
              Asesor:
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
            >
              <BadgeIcon sx={{ marginRight: 1 }} />
              Nombre:
            </Typography>
            <Typography variant="body1">{name}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
            >
              <BadgeIcon sx={{ marginRight: 1 }} />
              Apellido:
            </Typography>
            <Typography variant="body1">{last_name}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
            >
              <EmailIcon sx={{ marginRight: 1 }} />
              Correo Electrónico:
            </Typography>
            <Typography variant="body1">{email}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
            >
              <PhoneIcon sx={{ marginRight: 1 }} />
              Número de Teléfono:
            </Typography>
            <Typography variant="body1">{phone_number}</Typography>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default UserInm;
