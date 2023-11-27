import { Button, Grid, Paper, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import TabsPropertiesPending from "./TabsPropertiesPending";
import AddProperty from "./AddProperty";

const Properties = () => {
  const [modal, openModal] = useState(false);
  const handleClickCloseModal = () => {
    openModal(false);
  };
  return (
    <Layout>
      {/* <Paper elevation={3} sx={{ margin: 5 }}> */}
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid container spacing={2} sx={{ padding: 1 }}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TabsPropertiesPending />
          </Grid>
        </Grid>
      </Grid>
      {/* </Paper> */}
      <AddProperty modal={modal} handleClose={handleClickCloseModal} />
    </Layout>
  );
};

export default Properties;
