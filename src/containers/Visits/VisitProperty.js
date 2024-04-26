import Layout from "../../components/layout/Layout";
import { Grid, Typography } from "@mui/material";
import TableVisit from "../../components/Cards/TableVisit";
import React, { useContext, useEffect } from "react";
import VisitContext from "../../context/Visits/VisitContext";
import NoDataComponent from "../../components/loading/NoDataComponent";

const VisitProperty = () => {
  const { visits, GetVisit } = useContext(VisitContext);
  useEffect(() => {
    GetVisit();
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
            Visitas Agendadas de mis Propiedades
          </Typography>
        </Grid>
        {visits.length > 0 ? (
          visits.map((visit) => (
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TableVisit visit={visit} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <NoDataComponent />
          </Grid>
        )}
      </Grid>
    </Layout>
  );
};

export default VisitProperty;
