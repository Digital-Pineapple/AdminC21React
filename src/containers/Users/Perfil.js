import { Avatar, Box, Card, Grid, Paper, Typography, colors } from "@mui/material";
import React from "react";
import Layout from "../../components/layout/Layout";
import logo from "../../assets/img/C21.webp";
const Perfil = () => {
  return (
    <Layout>
      <Grid
        container
        spacing={2}
        sx={{ padding: 2 }}
        display="flex"
        justifyContent="center"
      >
        <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
          <Card sx={{ boxShadow: 4 }}>
            <Grid container spacing={2} sx={{ padding: 2 }}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography
                  variant="h3"
                  fontFamily="monospace"
                  fontWeight="bold"
                  sx={{ display: "flex", justifyContent: "center", color: "#662549",  }}
                >
                  Hola, USER
                </Typography>
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={4}
                xl={4}

                display="flex"
                justifyContent="center"
              >
                <Avatar
                  sx={{ width: 250, height: 300 }}
                  variant="square"
                  src={logo}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={8} xl={8}>
                <Paper>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Typography
                        variant="h6"
                        fontFamily="monospace"
                        fontWeight="bold"
                        noWrap
                        component="div"
                        sx={{color: "#662549"}}
                      >
                        Datos de Usuario
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                      NOMBRE
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                      APELLIDO
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                      CORREO ELECTRÓNICO
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                      CONTRASEÑA
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                      TELÉFONO CELULAR
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Perfil;
