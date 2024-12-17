import { Button, Grid, Paper, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import UsersContext from "../../context/Users/UsersContext";
import CardUserInm from "../../components/Cards/CardUserInm";
import AddUser from "../AseUsers/AddUser";
import { useState } from "react";
import MethodGet from "../../config/service";
import NoDataComponent from "../../components/loading/NoDataComponent";

const UsersInm = (props) => {
  const { id } = props.match.params;
  const [users, saveUsers] = useState([]);
  const [openModal, setOpenModal] = React.useState(false);

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    let url = `/indexInm/${id}`;
    MethodGet(url)
      .then((res) => {
        saveUsers(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

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
            {users.length > 0
              ? `Asesores de ${users[0].owner.name}`
              : "No hay Asesores disponibles"}
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
            Agregar Asesor
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
        <AddUser id={id} modal={openModal} handleClose={handleClose} />
      </Grid>
    </Layout>
  );
};

export default UsersInm;
