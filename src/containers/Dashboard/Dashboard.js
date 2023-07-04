import React from "react";
import Layout from "../../components/layout/Layout";
import { Grid, Typography } from "@mui/material";
import TotalUsers from "../../components/Dashboard/TotalUsers";
import PropertiesSold from "../../components/Dashboard/PropertiesSold";
import PropertiesRent from "../../components/Dashboard/PropertiesRent";
import CardProperties from "../../components/Dashboard/CardProperties";
const Dashboard = () => {
  return (
    <Layout>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          display="flex"
          justifyContent="start"
        >
          <Typography variant="h4" fontWeight="bold" fontFamily="monospace">
            Vistazo General
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
          <TotalUsers />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
          <PropertiesSold />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
          <PropertiesRent />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
          <CardProperties />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          display="flex"
          justifyContent="start"
        >
          <Typography variant="h4" fontWeight="bold" fontFamily="monospace">
            Resumen de tendencias
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Dashboard;
