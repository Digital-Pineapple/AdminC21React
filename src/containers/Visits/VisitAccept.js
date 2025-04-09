/**
 * El componente `VisitAccept` muestra la lista de visitas solicitadas por el cliente.
 * 
 * Funcionalidad:
 * 1. Recupera las visitas solicitadas mediante el contexto `VisitContext` al cargar el componente.
 * 2. Muestra el título "Visita Solicitada" utilizando `react-i18next` para la traducción.
 * 3. Si existen visitas, las muestra en una tabla con el componente `TableVisitClient`.
 * 4. Si no hay visitas disponibles, muestra un componente de carga `NoDataComponent`.
 */
import Layout from "../../components/layout/Layout";
import { Grid, Typography } from "@mui/material";
import TableVisitClient from "../../components/Cards/TableVisitClient";
import React, { useContext, useEffect } from "react";
import VisitContext from "../../context/Visits/VisitContext";
import NoDataComponent from "../../components/loading/NoDataComponent";
import { useTranslation } from "react-i18next";

const VisitAccept = () => {
  const { t } = useTranslation();
  const { visitsClient, GetVisitClient } = useContext(VisitContext);

  useEffect(() => {
    GetVisitClient();
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
            {t("visitaSolicitada")}
          </Typography>
        </Grid>
        {visitsClient && visitsClient.length > 0 ? (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TableVisitClient visitsClient={visitsClient} />
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

export default VisitAccept;
