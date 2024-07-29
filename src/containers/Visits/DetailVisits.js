import React, { useEffect, useContext, useState } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import AddReport from "./AddReport";
import Layout from "../../components/layout/Layout";
import { Card, Grid, Typography, Button, Stack } from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import CloseIcon from "@mui/icons-material/Close";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CommentIcon from "@mui/icons-material/Comment";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ReportContext from "../../context/ReportVisits/ReportContext";
import MultimediaProperty from "../../components/PropertyDetails/MultimediaProperty";

export default function DetailVisits(props) {
  const type_user = localStorage.getItem("type_user");
  const { id } = props.match.params;
  const { reports, GetReportsVisits } = useContext(ReportContext);

  useEffect(() => {
    GetReportsVisits(id);
  }, [id]);

  const { bookingData, propertyData } = reports || {};
  const { report_booking } = bookingData || {};
  const { images } = propertyData || {};
  const { rules } = propertyData || {};

  const detail = rules?.map((rule) => rule.detail) || [];
  const final_price = detail.map((det) => det.final_price) || [];
  const name = rules?.map((rul) => rul.name) || [];

  const [openModal, setOpenModal] = useState(false);
  const handleClickOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <Layout>
      <Grid container spacing={2}>
        {images && (
          <Grid item xs={12}>
            <MultimediaProperty
              name={propertyData.name}
              images={images}
              property_id={propertyData.id}
            />
          </Grid>
        )}
      </Grid>

      <Grid container spacing={2} sx={{ padding: 2 }}>
        {propertyData && (
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  fontFamily="monospace"
                  fontWeight="bold"
                  variant="h5"
                  sx={{ color: "#1F3473" }}
                >
                  Información de la Propiedad:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  fontFamily="monospace"
                  fontWeight="bold"
                  variant="subtitle1"
                  sx={{ color: "black", display: "flex", alignItems: "center" }}
                >
                  <HomeIcon sx={{ marginRight: 1 }} />
                  {propertyData.name}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  fontFamily="monospace"
                  fontWeight="bold"
                  variant="subtitle1"
                  sx={{ color: "black", display: "flex", alignItems: "center" }}
                >
                  <PersonIcon sx={{ marginRight: 1 }} />
                  De: {propertyData.owner.name} {propertyData.owner.last_name}
                </Typography>
              </Grid>
              {propertyData.user_inm && (
                <Grid item xs={12}>
                  <Typography
                    fontFamily="monospace"
                    fontWeight="bold"
                    variant="subtitle1"
                    sx={{
                      color: "black",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <PersonIcon sx={{ marginRight: 1 }} />
                    Asesor: {propertyData.user_inm.name}{" "}
                    {propertyData.user_inm.last_name}
                  </Typography>
                </Grid>
              )}
              <Grid item xs={12}>
                <Typography
                  fontFamily="monospace"
                  fontWeight="bold"
                  variant="subtitle1"
                  sx={{ color: "black", display: "flex", alignItems: "center" }}
                >
                  <AttachMoneyIcon sx={{ marginRight: 1 }} />
                  En: {name} ${final_price} MXN
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom>
                  {propertyData.description}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        )}
        {bookingData && (
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  fontFamily="monospace"
                  fontWeight="bold"
                  variant="h5"
                  sx={{ color: "#1F3473" }}
                >
                  Detalles de la Visita:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  fontFamily="monospace"
                  fontWeight="bold"
                  variant="subtitle1"
                  sx={{ color: "black", display: "flex", alignItems: "center" }}
                >
                  <PersonIcon sx={{ marginRight: 1 }} />
                  Nombre del Cliente: {bookingData.name} {bookingData.last_name}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  fontFamily="monospace"
                  fontWeight="bold"
                  variant="subtitle1"
                  sx={{ color: "black", display: "flex", alignItems: "center" }}
                >
                  <EmailIcon sx={{ marginRight: 1 }} />
                  Correo Electrónico: {bookingData.email}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  fontFamily="monospace"
                  fontWeight="bold"
                  variant="subtitle1"
                  sx={{ color: "black", display: "flex", alignItems: "center" }}
                >
                  <PhoneIcon sx={{ marginRight: 1 }} />
                  Número de Teléfono: {bookingData.phone}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  fontFamily="monospace"
                  fontWeight="bold"
                  variant="subtitle1"
                  sx={{ color: "black", display: "flex", alignItems: "center" }}
                >
                  <CalendarTodayIcon sx={{ marginRight: 1 }} />
                  Fecha Registrada de la Visita:{" "}
                  {format(
                    new Date(bookingData.created_at),
                    "dd 'de' MMMM 'de' yyyy 'a las' HH:mm",
                    { locale: es }
                  )}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  fontFamily="monospace"
                  fontWeight="bold"
                  variant="subtitle1"
                  sx={{ color: "black", display: "flex", alignItems: "center" }}
                >
                  <CommentIcon sx={{ marginRight: 1 }} />
                  Comentarios del Cliente: {bookingData.message}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Stack direction="row" spacing={2}>
                  {bookingData.status === 2 &&
                    (type_user === "1" ||
                      type_user === "2" ||
                      type_user === "3") && (
                      <Button
                        variant="outlined"
                        color="success"
                        startIcon={<DoneAllIcon />}
                      >
                        ¿Si asistió a la visita?
                      </Button>
                    )}
                  {bookingData.status === 2 &&
                    (type_user === "1" ||
                      type_user === "2" ||
                      type_user === "3") && (
                      <Button
                        variant="outlined"
                        color="error"
                        startIcon={<CloseIcon />}
                      >
                        ¿No asistió a la visita?
                      </Button>
                    )}
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Layout>
  );
}

{
  /*
          <Grid item xs={12}>
                    <AddReport
                      modal={openModal}
                      handleClose={handleClose}
                      bookingData={bookingData}
                    />
                  </Grid> {bookingData && bookingData.status === 2 && (
                <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
                  {(report_booking === undefined || report_booking.length === 0) && (
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={handleClickOpen}
                      sx={{
                        color: "#1F3473",
                        backgroundColor: "#8ED5E1",
                        "&:hover": {
                          color: "#1F3473",
                          backgroundColor: "#8ED5E1 ",
                        },
                      }}
                    > 
                      Crear reporte
                    </Button>
                  )}
                </Grid>
              )} 
            {bookingData && bookingData.status === 2 && (
              <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                {report_booking !== undefined && report_booking.length > 0 && (
                  <ReportBooking
                    report_booking={report_booking}
                    bookingData={bookingData}
                  />
                )}
              </Grid>
            )}*/
}
