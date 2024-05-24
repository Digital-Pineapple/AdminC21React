import React, { useEffect, useContext } from "react";
import DashboardContext from "../../context/Dashboard/DashboardContext";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Grid } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function Bars() {
  let type_user = localStorage.getItem("type_user");

  const {
    total_properties,
    total_properties_sold,
    total_properties_rent,
    total_users,
    total_usersInm,
    TotalProperties,
    TotalPropertiesSold,
    TotalPropertiesRent,
    GetTotalUsers,
    GetTotalUsersInm,
  } = useContext(DashboardContext);
  useEffect(() => {
    TotalProperties();
    TotalPropertiesSold();
    TotalPropertiesRent();
    GetTotalUsers();
    GetTotalUsersInm();
  }, []);

  var beneficios = [
    total_properties,
    total_properties_sold,
    total_properties_rent,
    total_usersInm,
    ...(type_user === "1" ? [total_users] : []),
  ];
  var meses = [
    "Total de Inmuebles",
    "Inmuebles en Venta",
    "Inmuebles en Renta",
    "Total Asesores",
    ...(type_user === "1" ? ["Total de Usuarios"] : []),
  ];

  var misoptions = {
    responsive: true,
    animation: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 0,
      },
      x: {
        ticks: { color: "#001F3F" },
      },
    },
  };

  var midata = {
    labels: meses,
    datasets: [
      {
        label: "Total:",
        data: beneficios,
        backgroundColor: "#8ED5E1",
      },
    ],
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Bar data={midata} options={misoptions} />
      </Grid>
    </Grid>
  );
}
