import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Layout from "../../components/layout/Layout";

const Perfil = () => {
  return (
    <Layout>
      <Paper elevation={3}>
        <Grid container spacing={2} sx={{ padding: 2 }}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography fontWeight="bold" fontFamily="monospace" variant="h4">
              Perfil
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            Mi Perfil
          </Grid>
        </Grid>
      </Paper>
    </Layout>
  );
};

export default Perfil;
