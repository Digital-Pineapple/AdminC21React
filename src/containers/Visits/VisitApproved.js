import Layout from "../../components/layout/Layout";
import { Grid, Typography } from "@mui/material";
import TableApproved from "../../components/Cards/TableApproved";
import React, { useContext, useEffect } from "react";
import VisitContext from "../../context/Visits/VisitContext";
import NoDataComponent from "../../components/loading/NoDataComponent";

const VisitApproved = () => {
  const { visitsApproved, GetVisitApproved } = useContext(VisitContext);

  useEffect(() => {
    GetVisitApproved();
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
            Visitas Aprobadas de mis Propiedades
          </Typography>
        </Grid>
        {visitsApproved && visitsApproved.length > 0 ? (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TableApproved visitsApproved={visitsApproved} />
          </Grid>
        ) : (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <NoDataComponent />
          </Grid>
        )}
      </Grid>
    </Layout>
  );
};

export default VisitApproved;
