/**
 * El componente `VisitPending` muestra la lista de visitas pendientes de aprobación.
 * 
 * Funcionalidad:
 * 1. Recupera las visitas pendientes mediante el contexto `VisitContext` al cargar el componente.
 * 2. Muestra el título "Solicitudes Visitas" utilizando `react-i18next` para la traducción.
 * 3. Si existen visitas pendientes, las muestra en una tabla con el componente `TableVisit`.
 * 4. Si no hay visitas pendientes, muestra un componente de carga `NoDataComponent`.
 */
import Layout from "../../components/layout/Layout";
import { Grid, Typography } from "@mui/material";
import TableVisit from "../../components/Cards/TableVisit";
import React, { useContext, useEffect } from "react";
import VisitContext from "../../context/Visits/VisitContext";
import NoDataComponent from "../../components/loading/NoDataComponent";
import { useTranslation } from "react-i18next";

const VisitPending = () => {
  const { t } = useTranslation();
  const { visits, GetVisitPending } = useContext(VisitContext);

  useEffect(() => {
    GetVisitPending();
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
            {t("solicitudesVisitas")}
          </Typography>
        </Grid>
        {visits && visits.length > 0 ? (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TableVisit visits={visits} />
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

export default VisitPending;
