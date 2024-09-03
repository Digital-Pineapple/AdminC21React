import { Button, Grid, Paper, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import UsersContext from "../../context/Users/UsersContext";
import AddUser from "./AddUser";
import CardUser from "../../components/Cards/CardUser";
import NoDataComponent from "../../components/loading/NoDataComponent";
const Users = () => {
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
            Mis Usuarios
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
            Agregar
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
