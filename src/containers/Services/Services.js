import { Button, Grid, Paper, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import AddService from "./AddService";
import ServicesContext from "../../context/Services/ServicesContext";
import CardServices from "../../components/Cards/CardServices";
import NoDataComponent from "../../components/loading/NoDataComponent";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
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
            {t("servicios")}
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
        {services.length > 0 ? (
          services.map((service) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CardServices service={service} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <NoDataComponent />
          </Grid>
        )}
      </Grid>
      <AddService modal={openModal} handleClose={handleClose} />
    </Layout>
  );
};

export default Services;
