import { Button, Grid, Paper, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import AddService from "./AddService";
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
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
          <Typography
            fontWeight="bold"
            fontFamily="monospace"
            variant="h5"
            sx={{ color: "black" }}
          >
            Servicios
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
        {services.length > 0
          ? services.map((service) => (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                <CardServices service={service} />
              </Grid>
            ))
          : null}
      </Grid>
      <AddService modal={openModal} handleClose={handleClose} />
    </Layout>
  );
};

export default Services;
