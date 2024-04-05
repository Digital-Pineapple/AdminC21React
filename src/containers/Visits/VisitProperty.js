import Layout from "../../components/layout/Layout";
import { Grid, Typography } from "@mui/material";
import TableVisit from "../../components/Cards/TableVisit";
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
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography
            fontWeight="bold"
            fontFamily="monospace"
            variant="h4"
            sx={{ color: "#1F3473", padding: 1 }}
          >
            Visitas Agendadas de mis Propiedades
          </Typography>
        </Grid>
        {success && visits.length ? (
          visits.map((visit) => (
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TableVisit visit={visit} />
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
