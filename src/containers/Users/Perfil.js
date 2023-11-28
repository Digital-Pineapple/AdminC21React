import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Paper,
  Typography,
  colors,
} from "@mui/material";
import FlipCameraIosIcon from "@mui/icons-material/FlipCameraIos";
import LockResetIcon from "@mui/icons-material/LockReset";
import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import logo from "../../assets/img/C21.webp";
import AuthContext from "../../context/auth/AuthContext";
const Perfil = () => {
  const { usuario } = useContext(AuthContext);
  console.log(usuario);
  return (
    <Layout>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}
      >
        <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
          <Card boxShadow={25}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography
                  fontWeight="bold"
                  fontFamily="monospace"
                  fontSize="55px"
                  textAlign="center"
                  sx={{ color: "#662549" }}
                >
                  Hola, {""} {usuario && usuario.name}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                sx={{ margin: 2, display: "flex", justifyContent: "center" }}
              >
                <Card>
                  <img src={logo} width={250} height={200} />
                  <CardActions>
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        color: "white",
                        backgroundColor: "#451952",
                        "&:hover": {
                          color: "white",
                          backgroundColor: "#451952",
                        },
                      }}
                    >
                      Cambiar foto <FlipCameraIosIcon sx={{ marginLeft: 2 }} />
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={7}
                xl={7}
                sx={{ margin: 2 }}
              >
                <Card sx={{ padding: 4 }}>
                  <Typography
                    fontFamily="monospace"
                    fontWeight="bold"
                    variant="h5"
                    sx={{ color: "#AE445A" }}
                  >
                    Detalles de mi cuenta...
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Typography
                        fontFamily="monospace"
                        fontWeight="bold"
                        variant="subtitle1"
                        sx={{ color: "#AE445A" }}
                      >
                        Correo: {usuario.email}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Typography
                        fontFamily="monospace"
                        fontWeight="bold"
                        variant="subtitle1"
                        sx={{ color: "#AE445A" }}
                      >
                        Telefono: {usuario.phone}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Typography
                        fontFamily="monospace"
                        fontWeight="bold"
                        variant="subtitle1"
                        sx={{ color: "#AE445A" }}
                      >
                        Mi perfil:{" "}
                        {usuario.type_user === 1
                          ? "SuperAdmin"
                          : usuario.type_user === 2
                          ? "Inmobiliaria"
                          : usuario.type_user === 3
                          ? "Asesor"
                          : usuario.type_user === 4 && "Independiente"}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Button
                        fullWidth
                        variant="contained"
                        sx={{
                          color: "white",
                          backgroundColor: "#451952",
                          "&:hover": {
                            color: "white",
                            backgroundColor: "#451952",
                          },
                        }}
                      >
                        Cambiar contraseña{" "}
                        <LockResetIcon sx={{ marginLeft: 2 }} />
                      </Button>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Perfil;
