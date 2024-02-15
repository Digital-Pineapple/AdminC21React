import { Button, Grid, Paper, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import TableUsers from "./TableUsers";
import LoadingComponent from "../../components/loading/LoadingComponent";
import UsersContext from "../../context/Users/UsersContext";
import AddUser from "./AddUser";
import CardUser from "../../components/Cards/CardUser";
const Users = () => {
  const { GetUsers, users } = useContext(UsersContext);
  useEffect(() => {
    GetUsers();
  }, []);
  const [openModal, setOpenModal] = React.useState(false);

  const handleClickOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };
  console.log(users);
  return (
    <Layout>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
          <Typography fontWeight="bold" fontFamily="monospace" variant="h4">
            Usuarios
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
          <Button
            variant="contained"
            fullWidth
            onClick={handleClickOpen}
            sx={{
              backgroundColor: "#451952",
              "&:hover": { backgroundColor: "#451952" },
            }}
          >
            Agregar
          </Button>
        </Grid>
        {users.length ? (
          users.map((user) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CardUser user={user} />
            </Grid>
          ))
        ) : (
          <LoadingComponent />
        )}
      </Grid>
      <AddUser modal={openModal} handleClose={handleClose} />
    </Layout>
  );
};

export default Users;
