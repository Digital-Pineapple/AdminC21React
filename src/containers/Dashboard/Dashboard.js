import React, { useEffect, useContext } from "react";
import Layout from "../../components/layout/Layout";
import TotalUsers from "../../components/Dashboard/TotalUsers";
import PropertiesSold from "../../components/Dashboard/PropertiesSold";
import PropertiesRent from "../../components/Dashboard/PropertiesRent";
import CardProperties from "../../components/Dashboard/CardProperties";
import DashboardContext from "../../context/Dashboard/DashboardContext";
import Graphics from "../../components/Dashboard/Graphics";
import Logout from "../../components/Dashboard/Logout";
import { Grid, Typography } from "@mui/material";

const Dashboard = () => {
  const {
    total_properties,
    total_properties_sold,
    total_properties_rent,
    total_users,
    TotalProperties,
    TotalPropertiesSold,
    TotalPropertiesRent,
    GetTotalUsers,
  } = useContext(DashboardContext);
  useEffect(() => {
    TotalProperties();
    TotalPropertiesSold();
    TotalPropertiesRent();
    GetTotalUsers();
  }, []);

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
          <Typography variant="h4" fontWeight="bold" fontFamily="monospace" sx={{color: "#1F3473"}}>
            Vistazo General
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
          <TotalUsers total_users={total_users} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
          <PropertiesSold total_properties_sold={total_properties_sold} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
          <PropertiesRent total_properties_rent={total_properties_rent} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
          <CardProperties total_properties={total_properties} />
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
          <Typography variant="h4" fontWeight="bold" fontFamily="monospace" sx={{color: "#1F3473"}}>
            Resumen de Tendencias
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          display="flex"
          justifyContent="start"
        >
          <Graphics />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Dashboard;
