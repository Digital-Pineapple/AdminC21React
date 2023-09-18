import React, { useEffect, useContext } from "react";
import DashboardContext from "../../context/Dashboard/DashboardContext";
import { Bar } from 'react-chartjs-2';
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
} from 'chart.js';

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
    const {
        total_properties,
        total_properties_sold,
        total_properties_rent,
        total_users,
        TotalProperties,
        TotalPropertiesSold,
        TotalPropertiesRent,
        GetTotalUsers,
    } = useContext(DashboardContext);

    useEffect(() => {
        TotalProperties();
        TotalPropertiesSold();
        TotalPropertiesRent();
        GetTotalUsers();
    }, []);

    var beneficios = [total_properties, total_properties_sold, total_properties_rent, total_users];
    var meses = ["Total de Inmuebles", "Inmuebles en Venta", "Inmuebles en Renta", "Total de Usuarios"];

    var misoptions = {
        responsive: true,
        animation: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                min: -10,
                max: 50
            },
            x: {
                ticks: { color: 'rgb(215, 168, 110)' }
            }
        }
    };

    var midata = {
        labels: meses,
        datasets: [
            {
                label: 'Total:',
                data: beneficios,
                backgroundColor: 'rgb(215, 168, 110)'
            }
        ]
    };

    return <Bar data={midata} options={misoptions} />;
}
