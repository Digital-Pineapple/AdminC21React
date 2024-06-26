import { Button, Grid, Paper, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import UsersContext from "../../context/Users/UsersContext";
import CardUserInm from "../../components/Cards/CardUserInm";
import AddUser from "../AseUsers/AddUser";
import NoDataComponent from "../../components/loading/NoDataComponent";
const AseUsers = () => {
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
            Mis Asesores
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
          <Button
            variant="contained"
            fullWidth
            onClick={handleClickOpen}
            sx={{
              color: "#1F3473",
              backgroundColor: "#8ED5E1",
              "&:hover": {
                color: "#1F3473",
                backgroundColor: "#8ED5E1 ",
              },
            }}
          >
            Agregar
          </Button>
        </Grid>
        {users.length > 0 ? (
          users.map((user) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CardUserInm user={user} />
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

export default AseUsers;
