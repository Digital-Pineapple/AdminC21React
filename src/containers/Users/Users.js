/**
 * Componente `Users` que muestra una lista de usuarios y permite agregar nuevos usuarios.
 * - Muestra el título "Mis Usuarios" y un botón para abrir un modal de adición de usuarios.
 * - Los usuarios se obtienen del contexto `UsersContext` y se muestran en tarjetas (`CardUser`).
 * - Si no hay usuarios, muestra un componente `NoDataComponent` para indicar la ausencia de datos.
 * - El modal de agregar usuario se controla con el estado `openModal` y se cierra al ejecutar `handleClose`.
 */
import { Button, Grid, Paper, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import UsersContext from "../../context/Users/UsersContext";
import AddUser from "./AddUser";
import CardUser from "../../components/Cards/CardUser";
import NoDataComponent from "../../components/loading/NoDataComponent";
import { useTranslation } from "react-i18next";

const Users = () => {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = React.useState(false);

  const handleClickOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };
  const { GetUsers, users } = useContext(UsersContext);
  useEffect(() => {
    GetUsers();
  }, []);

  return (
    <Layout>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
          <Typography
            fontWeight="bold"
            fontFamily="monospace"
            variant="h5"
            sx={{ color: "black" }}
          >
            {t("misUsuarios")}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
          <Button
            variant="contained"
            fullWidth
            onClick={handleClickOpen}
            sx={{
              color: "black",
              backgroundColor: "#ffb734",
              "&:hover": {
                color: "black",
                backgroundColor: "#ffb734 ",
              },
            }}
          >
            {t("agregar")}
          </Button>
        </Grid>
        {users.length > 0 ? (
          users.map((user) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CardUser user={user} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <NoDataComponent />
          </Grid>
        )}
      </Grid>
      <AddUser modal={openModal} handleClose={handleClose} />
    </Layout>
  );
};

export default Users;
