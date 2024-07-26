import React from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale/es";
import AddReport from "./AddReport";
import { useEffect, useContext } from "react";
import MethodGet from "../../config/service";
import Layout from "../../components/layout/Layout";
import { Card, Grid, Typography, Button } from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";
import ImageList from "@mui/material/ImageList";
import ReportBooking from "./ReportBooking";
import ReportContext from "../../context/ReportVisits/ReportContext";
import MultimediaVisit from "../../components/PropertyDetails/MultimediaVisit";

export default function DetailVisits(props) {
  let type_user = localStorage.getItem("type_user");
  const { id } = props.match.params;
  const { reports, GetReportsVisits } = useContext(ReportContext);
  useEffect(() => {
    GetReportsVisits(id);
  }, [id]);

  const { bookingData, propertyData } = reports || {};
  const { report_booking } = bookingData || {};
  const { images } = propertyData || {};
  const { rules } = propertyData || {};

  if (rules !== undefined) {
    let detail = rules.map((rule) => rule.detail);
    var final_price = detail.map((det) => det.final_price);
    var name = rules.map((rul) => rul.name);
  }
  const [openModal, setOpenModal] = React.useState(false);
  const handleClickOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };

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
            Detalle de Visita
          </Typography>
        </Grid>
        {/* {bookingData && bookingData.status === 2 && (
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
        )} */}
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          {images !== undefined && (
            <ImageList
              sx={{ width: "auto", height: 650 }}
              cols={3}
              rowHeight={164}
            >
              {images.map((item) => (
                <ImageListItem key={item.url}>
                  <img
                    srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          )}
        </Grid>
        {/* <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            {images && <MultimediaVisit images={images} property_id={id} />}
          </Grid>
        </Grid> */}
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          {propertyData !== undefined && (
            <Card sx={{ padding: 4 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography
                    fontFamily="monospace"
                    fontWeight="bold"
                    variant="h5"
                    sx={{ color: "#1F3473" }}
                  >
                    Infromación de la Propiedad:
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography
                    fontFamily="monospace"
                    fontWeight="bold"
                    variant="subtitle1"
                    sx={{ color: "black" }}
                  >
                    {propertyData.name}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography
                    fontFamily="monospace"
                    fontWeight="bold"
                    variant="subtitle1"
                    sx={{ color: "black" }}
                  >
                    De: {propertyData.owner.name} {propertyData.owner.last_name}
                  </Typography>
                </Grid>
                {type_user === "2" && propertyData.user_inm && (
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography
                      fontFamily="monospace"
                      fontWeight="bold"
                      variant="subtitle1"
                      sx={{ color: "black" }}
                    >
                      Asesor: {propertyData.user_inm.name}
                      {propertyData.user_inm.last_name}
                    </Typography>
                  </Grid>
                )}
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography
                    fontFamily="monospace"
                    fontWeight="bold"
                    variant="subtitle1"
                    sx={{ color: "black" }}
                  >
                    En: {name} ${final_price} MXN
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography variant="subtitle1" gutterBottom>
                    {propertyData.description}
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          )}

          {bookingData !== undefined && (
            <Card sx={{ padding: 4 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography
                    fontFamily="monospace"
                    fontWeight="bold"
                    variant="h5"
                    sx={{ color: "#1F3473" }}
                  >
                    Detalles de la Visita:
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography
                    fontFamily="monospace"
                    fontWeight="bold"
                    variant="subtitle1"
                    sx={{ color: "black" }}
                  >
                    Nombre del Cliente: {bookingData.name}{" "}
                    {bookingData.last_name}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography
                    fontFamily="monospace"
                    fontWeight="bold"
                    variant="subtitle1"
                    sx={{ color: "black" }}
                  >
                    Correo Electronico: {bookingData.email}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography
                    fontFamily="monospace"
                    fontWeight="bold"
                    variant="subtitle1"
                    sx={{ color: "black" }}
                  >
                    Numero de Telefono: {bookingData.phone}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography
                    fontFamily="monospace"
                    fontWeight="bold"
                    variant="subtitle1"
                    sx={{ color: "black" }}
                  >
                    Fecha Registrada de la Visita:{" "}
                    {format(
                      new Date(bookingData.created_at),
                      "dd 'de' MMMM 'de' yyyy 'a las' HH:mm",
                      { locale: es }
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography
                    fontFamily="monospace"
                    fontWeight="bold"
                    variant="subtitle1"
                    sx={{ color: "black" }}
                  >
                    Comentarios del Cliente: {bookingData.message}
                  </Typography>
                </Grid>
                <AddReport
                  modal={openModal}
                  handleClose={handleClose}
                  bookingData={bookingData}
                />
              </Grid>
            </Card>
          )}
        </Grid>
        {bookingData && bookingData.status === 2 && (
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            {report_booking !== undefined && report_booking.length > 0 && (
              <ReportBooking
                report_booking={report_booking}
                bookingData={bookingData}
              />
            )}
          </Grid>
        )}
      </Grid>
    </Layout>
  );
}
