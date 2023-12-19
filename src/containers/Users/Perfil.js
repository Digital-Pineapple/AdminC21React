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
import { useState } from "react";
import logo from "../../assets/img/C21.webp";
import ResetPassword from "./ResetPassword";
import AuthContext from "../../context/auth/AuthContext";
import AttachFileMultimedia from "./AddMultimediaUser";

const Perfil = () => {
  //const { User } = useContext(AuthContext);
  const User = JSON.parse(localStorage.getItem("usuaio"));
  console.log(User);
  const [id_property, saveProperty] = useState(null);

  const [modalMultimedia, openModalMultimedia] = useState(false);
  const handleOpenMultimedia = (id) => {
    openModalMultimedia(true);
    saveProperty(id);
  };
  const handleCloseMultimedia = () => {
    openModalMultimedia(false);
    saveProperty(null);
  };

  const [openModal, setOpenModal] = React.useState(false);
  const handleClickOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };
  console.log(User, "userssss");

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
                  fontSize="40px"
                  textAlign="center"
                  sx={{ color: "#662549" }}
                >
                  Hola de nuevo, {""} {User && User.name}
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
                  {console.log(User.image)}
                  <img src={User.image} width={250} height={200} />

                  <CardActions>
                    <Button
                      onClick={() => handleOpenMultimedia(User.id)}
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
                      Cambiar foto{" "}
                      <FlipCameraIosIcon
                        sx={{ marginLeft: 2 }}
                      ></FlipCameraIosIcon>
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
                        Nombre(s): {User.name}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Typography
                        fontFamily="monospace"
                        fontWeight="bold"
                        variant="subtitle1"
                        sx={{ color: "#AE445A" }}
                      >
                        Apellido(s): {User.last_name}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Typography
                        fontFamily="monospace"
                        fontWeight="bold"
                        variant="subtitle1"
                        sx={{ color: "#AE445A" }}
                      >
                        Soy:{" "}
                        {User.type_user === 1
                          ? "Admin"
                          : User.type_user === 2
                          ? "Inmobiliaria"
                          : User.type_user === 3
                          ? "Asesor (Broker)"
                          : User.type_user === 4 &&
                            "Inquilino (Rentar/Comprar)"}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Typography
                        fontFamily="monospace"
                        fontWeight="bold"
                        variant="subtitle1"
                        sx={{ color: "#AE445A" }}
                      >
                        Telefono: {User.phone_number}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Typography
                        fontFamily="monospace"
                        fontWeight="bold"
                        variant="subtitle1"
                        sx={{ color: "#AE445A" }}
                      >
                        Correo Electrónico: {User.email}
                      </Typography>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Button
                        onClick={handleClickOpen}
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
                        Cambiar mi contraseña{" "}
                        <LockResetIcon sx={{ marginLeft: 2 }} />
                      </Button>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </Card>
          {id_property !== null && (
            <AttachFileMultimedia
              open={modalMultimedia}
              handleClose={handleCloseMultimedia}
              id={id_property}
            />
          )}
          <ResetPassword modal={openModal} handleClose={handleClose} />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Perfil;
