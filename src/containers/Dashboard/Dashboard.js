/**
 * `Dashboard` es el componente principal que muestra las estadísticas generales del panel de administración.
 * Presenta información de usuarios, propiedades vendidas, propiedades en alquiler y gráficos, con diferentes vistas según el tipo de usuario.
 * Utiliza el contexto `DashboardContext` para obtener datos y actualizarlos mediante hooks de efecto (`useEffect`).
 * 
 * Funcionalidades:
 * - Muestra componentes como `TotalUsers`, `PropertiesSold`, `PropertiesRent`, `CardProperties` y `TotalUsersInm` para cada tipo de dato.
 * - Utiliza `Graphics` para mostrar gráficos sobre tendencias.
 * - Controla la visibilidad de ciertos datos en función del tipo de usuario (`type_user`).
 */
import React, { useEffect, useContext } from "react";
import Layout from "../../components/layout/Layout";
import TotalUsers from "../../components/Dashboard/TotalUsers";
import PropertiesSold from "../../components/Dashboard/PropertiesSold";
import PropertiesRent from "../../components/Dashboard/PropertiesRent";
import CardProperties from "../../components/Dashboard/CardProperties";
import DashboardContext from "../../context/Dashboard/DashboardContext";
import Graphics from "../../components/Dashboard/Graphics";
import { Grid, Typography } from "@mui/material";
import TotalUsersInm from "../../components/Dashboard/TotalUsersInm";
import CategoryContext from "../../context/Categories/CategoryContext";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { t } = useTranslation();
  let type_user = localStorage.getItem("type_user");

  const {
    total_users,
    GetTotalUsers,

    total_usersInm,
    GetTotalUsersInm,

    total_properties_sold,
    TotalPropertiesSold,

    total_properties_rent,
    TotalPropertiesRent,

    total_properties,
    TotalProperties,
  } = useContext(DashboardContext);
  useEffect(() => {
    GetTotalUsers();
    GetTotalUsersInm();
    TotalPropertiesSold();
    TotalPropertiesRent();
    TotalProperties();
  }, []);

  return (
    <Layout>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          display="flex"
          justifyContent="start"
        >
          <Typography
            fontWeight="bold"
            fontFamily="monospace"
            variant="h5"
            sx={{ color: "black" }}
          >
            {t("vistazoGeneral")}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        {type_user === "1" && (
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <TotalUsers total_users={total_users} />
          </Grid>
        )}
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
          <TotalUsersInm total_usersInm={total_usersInm} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
          <PropertiesSold total_properties_sold={total_properties_sold} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
          <PropertiesRent total_properties_rent={total_properties_rent} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
          <CardProperties total_properties={total_properties} />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          display="flex"
          justifyContent="start"
        >
          <Typography
            fontWeight="bold"
            fontFamily="monospace"
            variant="h5"
            sx={{ color: "black" }}
          >
            {t("resumenTendencias")}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
          display="flex"
          justifyContent="start"
        >
          <Graphics />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Dashboard;
