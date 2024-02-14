import { Grid } from "@mui/material";
import Layout from "../../components/layout/Layout";
import TabsProperties from "./TabsProperties";

const Properties = () => {
  return (
    <Layout>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid container spacing={2} sx={{ padding: 1 }}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TabsProperties />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Properties;
