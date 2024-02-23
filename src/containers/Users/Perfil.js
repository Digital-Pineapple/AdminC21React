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
import React, { useEffect, useContext, useState } from "react";
import Layout from "../../components/layout/Layout";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ResetPassword from "./ResetPassword";
import AttachFileMultimedia from "./AddMultimediaUser";
import EditInfo from "./EditInfo";

const Perfil = () => {
  const User = JSON.parse(localStorage.getItem("usuaio"));
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

  const [openModalInfo, setOpenModalInfo] = React.useState(false);
  const handleClickOpenInfo = () => {
    setOpenModalInfo(true);
  };
  const handleCloseInfo = () => {
    setOpenModalInfo(false);
  };

  const [saludo, setSaludo] = useState("");
  useEffect(() => {
    const obtenerSaludo = () => {
      const horaActual = new Date().getHours();

      if (horaActual >= 6 && horaActual < 12) {
        setSaludo("Buenos días");
      } else if (horaActual >= 12 && horaActual < 18) {
        setSaludo("Buenas tardes");
      } else {
        setSaludo("Buenas noches");
      }
    };

    obtenerSaludo();
  }, []);

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
                  Hola de nuevo, {saludo} {User && User.name}
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
                  <img
                    src={
                      User.image.includes("blob") ||
                      User.image.includes("www.pacifictrellisfruit")
                        ? User.image
                        : `https://mibien.s3.us-east-2.amazonaws.com/production/profile/${User.id}`
                    }
                    width={250}
                    height={200}
                  />

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
                    sx={{ color: "#662549" }}
                  >
                    Detalles de mi cuenta...
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Typography
                        fontFamily="monospace"
                        fontWeight="bold"
                        variant="subtitle1"
                        sx={{ color: "#662549" }}
                      >
                        Nombre(s): {User.name}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Typography
                        fontFamily="monospace"
                        fontWeight="bold"
                        variant="subtitle1"
                        sx={{ color: "#662549" }}
                      >
                        Apellido(s): {User.last_name}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Typography
                        fontFamily="monospace"
                        fontWeight="bold"
                        variant="subtitle1"
                        sx={{ color: "#662549" }}
                      >
                        Soy:{" "}
                        {User.type_user === 1
                          ? "Admin"
                          : User.type_user === 2
                          ? "Inmobiliaria"
                          : User.type_user === 3
                          ? "Asesor"
                          : User.type_user === 4 &&
                            "Inquilino (Rentar/Comprar)"}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Typography
                        fontFamily="monospace"
                        fontWeight="bold"
                        variant="subtitle1"
                        sx={{ color: "#662549" }}
                      >
                        Telefono: {User.phone_number}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Typography
                        fontFamily="monospace"
                        fontWeight="bold"
                        variant="subtitle1"
                        sx={{ color: "#662549" }}
                      >
                        Correo Electrónico: {User.email}
                      </Typography>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Button
                        onClick={handleClickOpenInfo}
                        fullWidth
                        variant="contained"
                        sx={{
                          color: "white",
                          backgroundColor: "#662549",
                          "&:hover": {
                            color: "white",
                            backgroundColor: "#662549",
                          },
                        }}
                      >
                        Editar mi Información{" "}
                        <EditNoteIcon sx={{ marginLeft: 2 }} />
                      </Button>
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
              id_User={User.id}
            />
          )}
          <ResetPassword modal={openModal} handleClose={handleClose} />
          <EditInfo
            User={User}
            modal={openModalInfo}
            handleClose={handleCloseInfo}
          />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Perfil;
