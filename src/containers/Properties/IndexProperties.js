import { Button, Grid, Paper, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import TabsProperties from "./TabsProperties";
import AddProperty from "./AddProperty";

const Properties = () => {
  const [modal, openModal] = useState(false);
  const handleClickOpenModal = () => {
    openModal(true);
  };
  const handleClickCloseModal = () => {
    openModal(false);
  };
  return (
    <Layout>
      {/* <Paper elevation={3} sx={{ margin: 5 }}> */}
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography fontWeight="bold" fontFamily="monospace" variant="h4">
            Propiedades
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          display="flex"
          justifyContent="end"
          sx={{ margin: 1 }}
        >
          <Button
            variant="contained"
            // fullWidth
            sx={{
              backgroundColor: "#D7A86E",
              "&:hover": { backgroundColor: "#D7A86E" },
            }}
            onClick={handleClickOpenModal}
          >
            Agregar
          </Button>
        </Grid>
        <Grid container spacing={2} sx={{ padding: 1 }}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TabsProperties />
          </Grid>
        </Grid>
      </Grid>
      {/* </Paper> */}
      <AddProperty modal={modal} handleClose={handleClickCloseModal} />
    </Layout>
  );
};

export default Properties;
