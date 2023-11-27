import { Button, Grid, Paper, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import AddService from "./AddService";
import LoadingComponent from "../../components/loading/LoadingComponent";
import ServicesContext from "../../context/Services/ServicesContext";

import CardServices from "../../components/Cards/CardServices";
const Services = () => {
  const [openModal, setOpenModal] = React.useState(false);

  const handleClickOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };
  const { GetServices, services } = useContext(ServicesContext);
  useEffect(() => {
    GetServices();
  }, []);

  return (
    <Layout>
      {/* <Paper elevation={3} sx={{ margin: 5 }}> */}
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
          <Typography fontWeight="bold" fontFamily="monospace" variant="h4">
            Servicios
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
        {services.length ? (
          services.map((service) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CardServices service={service} />
            </Grid>
          ))
        ) : (
          <LoadingComponent />
        )}
      </Grid>
      {/* </Paper> */}
      <AddService modal={openModal} handleClose={handleClose} />
    </Layout>
  );
};

export default Services;
