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
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ResetPassword from "./ResetPassword";
import AttachFileMultimedia from "./AddMultimediaUser";
import EditInfo from "./EditInfo";
import AuthContext from "../../context/auth/AuthContext";
import UsersContext from "../../context/Users/UsersContext";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import BadgeIcon from "@mui/icons-material/Badge";
import { useTranslation } from "react-i18next";

const Perfil = () => {
  const { t } = useTranslation();
  const { UserMe, user_me } = useContext(AuthContext);
  const { DeleteUsers } = useContext(UsersContext);
  useEffect(() => {
    if (user_me === null) {
      UserMe();
    }
  }, []);
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
        setSaludo(t("Buenos_dias"));
      } else if (horaActual >= 12 && horaActual < 18) {
        setSaludo(t("Buenas_tardes"));
      } else {
        setSaludo(t("Buenas_noches"));
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
        {user_me ? (
          <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
            <Card boxShadow={25}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography
                    fontWeight="bold"
                    fontFamily="monospace"
                    variant="h4"
                    textAlign="center"
                    sx={{ color: "black" }}
                  >
                    {t("hola")}, {saludo} {user_me && user_me.name}
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
                    <img src={user_me.image} width={250} height={200} />
                    <CardActions>
                      <Button
                        onClick={() => handleOpenMultimedia(user_me.id)}
                        fullWidth
                        variant="contained"
                        sx={{
                          color: "black",
                          backgroundColor: "#ffb734",
                          "&:hover": {
                            color: "black",
                            backgroundColor: "#ffb734",
                          },
                        }}
                      >
                        {t("cambiarFoto")}
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
                      sx={{ color: "black", padding: 2 }}
                    >
                     {t("detalles")}
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography
                          fontFamily="monospace"
                          fontWeight="bold"
                          variant="subtitle1"
                          sx={{
                            color: "black",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <PersonIcon
                            sx={{ color: "black", marginRight: "8px" }}
                          />
                          {t("nombre")} {user_me.name}
                        </Typography>
                      </Grid>

                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography
                          fontFamily="monospace"
                          fontWeight="bold"
                          variant="subtitle1"
                          sx={{
                            color: "black",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <BadgeIcon
                            sx={{ color: "black", marginRight: "8px" }}
                          />
                          {t("apellido")} {user_me.last_name}
                        </Typography>
                      </Grid>

                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography
                          fontFamily="monospace"
                          fontWeight="bold"
                          variant="subtitle1"
                          sx={{
                            color: "black",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <BadgeIcon
                            sx={{ color: "black", marginRight: "8px" }}
                          />
                          {t("soy")} {""}
                          {user_me.type_user === 1
                            ? "Admin"
                            : user_me.type_user === 2
                            ? "Inmobiliaria"
                            : user_me.type_user === 3
                            ? "Asesor (Individual)"
                            : user_me.type_user === 4
                            ? "Inquilino (Rentar/Comprar)"
                            : user_me.type_user === 5 &&
                              "Asesor (Inmobiliaria)"}
                        </Typography>
                      </Grid>

                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography
                          fontFamily="monospace"
                          fontWeight="bold"
                          variant="subtitle1"
                          sx={{
                            color: "black",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <PhoneIcon
                            sx={{ color: "black", marginRight: "8px" }}
                          />
                          {t("telefono")} {user_me.phone_number}
                        </Typography>
                      </Grid>

                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography
                          fontFamily="monospace"
                          fontWeight="bold"
                          variant="subtitle1"
                          sx={{
                            color: "black",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <EmailIcon
                            sx={{ color: "black", marginRight: "8px" }}
                          />
                          {t("email")} {user_me.email}
                        </Typography>
                      </Grid>

                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Button
                          onClick={handleClickOpenInfo}
                          fullWidth
                          variant="contained"
                          sx={{
                            color: "black",
                            backgroundColor: "#ffb734",
                            "&:hover": {
                              color: "black",
                              backgroundColor: "#ffb734 ",
                            },
                          }}
                        >
                          {t("editarInformación")}
                          <EditNoteIcon sx={{ marginLeft: 2 }} />
                        </Button>
                      </Grid>

                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Button
                          onClick={handleClickOpen}
                          fullWidth
                          variant="contained"
                          sx={{
                            color: "#ffb734",
                            backgroundColor: "black",
                            "&:hover": {
                              color: "#ffb734",
                              backgroundColor: "black",
                            },
                          }}
                        >
                          {t("cambiarContraseña")}
                          <LockResetIcon sx={{ marginLeft: 2 }} />
                        </Button>
                      </Grid>
                      {(user_me.type_user === 1 ||
                        user_me.type_user === 2 ||
                        user_me.type_user === 3 ||
                        user_me.type_user === 4) && (
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                          <Button
                            onClick={() => DeleteUsers(user_me.id)}
                            fullWidth
                            variant="contained"
                            sx={{
                              color: "white",
                              backgroundColor: "#d84545",
                              "&:hover": {
                                color: "white",
                                backgroundColor: "#d84545",
                              },
                            }}
                          >
                            {t("eliminarCuenta")}
                            <DeleteIcon sx={{ marginLeft: 2 }} />
                          </Button>
                        </Grid>
                      )}
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
                id_User={user_me.id}
              />
            )}
            <ResetPassword modal={openModal} handleClose={handleClose} />
            <EditInfo
              User={user_me}
              modal={openModalInfo}
              handleClose={handleCloseInfo}
            />
          </Grid>
        ) : (
          ""
        )}
      </Grid>
    </Layout>
  );
};
export default Perfil;
