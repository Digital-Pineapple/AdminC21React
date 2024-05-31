import React from "react";
import { Grid, Typography } from "@mui/material";

const UserInm = (user_inm) => {
  const { owner } = user_inm;
  const { name, email, last_name, phone_number } = owner;

  return (
    <Grid container spacing={2}>
      {user_inm !== null && (
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
            <Typography variant="h6" fontWeight="bold" fontFamily="monospace">
              Asesor:
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Typography variant="h6" fontWeight="bold">
              Nombre:
            </Typography>
            {name}
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Typography variant="h6" fontWeight="bold">
              Correo Electronico:
            </Typography>
            {email}
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Typography variant="h6" fontWeight="bold">
              Numero de Telefono:
            </Typography>
            {phone_number}
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Typography variant="h6" fontWeight="bold">
              Apellido:
            </Typography>
            {last_name}
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default UserInm;
