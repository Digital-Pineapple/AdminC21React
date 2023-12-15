import Layout from "../../components/layout/Layout";
import { Grid, Typography } from "@mui/material";
import CardVisit from "../../components/Cards/CardVisit";
import LoadingComponent from "../../components/loading/LoadingComponent";
import React, { useContext, useEffect } from "react";
import VisitContext from "../../context/Visits/VisitContext";
import NoDataComponent from "../../components/loading/NoDataComponent";

const VisitProperty = () => {
  const { visits, GetVisit, success } = useContext(VisitContext);
  useEffect(() => {
    GetVisit();
  }, []);
  return (
    <Layout>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
          <Typography fontWeight="bold" fontFamily="monospace" variant="h4">
            Visitas Agendadas
          </Typography>
        </Grid>
        {success && visits.length ? (
          visits.map((visit) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CardVisit visit={visit} />
            </Grid>
          ))
        ) : success && visits.length <= 0 ? (
          <NoDataComponent />
        ) : success === false ? (
          <LoadingComponent />
        ) : (
          ""
        )}
      </Grid>
    </Layout>
  );
};

export default VisitProperty;
