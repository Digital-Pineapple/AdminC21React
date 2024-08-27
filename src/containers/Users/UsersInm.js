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
    </Layout>
  );
};

export default UsersInm;
