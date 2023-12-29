import { Button, Grid, Paper, Typography } from "@mui/material";
import Layout from "../../components/layout/Layout";
import TabsProperties from "./TabsProperties";

const SearchProperties = () => {
  return (
    <Layout>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
          <Typography fontWeight="bold" fontFamily="monospace" variant="h4">
            Buscar Propiedades
          </Typography>
        </Grid>
        <Grid container spacing={2} sx={{ padding: 1 }}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TabsProperties />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default SearchProperties;
