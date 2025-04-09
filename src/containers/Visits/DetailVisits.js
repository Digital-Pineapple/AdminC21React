/**
 * Componente DetailVisits:
 * Muestra los detalles de una visita a una propiedad, incluyendo la información de la propiedad, el cliente y la visita.
 * Permite marcar la visita como asistida o no asistida si el usuario tiene los permisos adecuados (admin, asesor, agencia, cliente final).
 * Utiliza `useEffect` para cargar los datos de la visita y `useContext` para obtener los reportes desde el contexto de ReportContext.
 * 
 * Dependencias:
 * - MUI para los componentes de interfaz.
 * - Date-fns para formateo de fechas.
 * - i18next para traducciones.
 */
import React, { useEffect, useContext } from "react";
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
import ReportBooking from "./ReportBooking";
import { useTranslation } from "react-i18next";

const formatPrice = (price) => {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 2,
  }).format(price);
};

export default function DetailVisits(props) {
  const { t } = useTranslation();
  const type_user = localStorage.getItem("type_user");
  const { id } = props.match.params;
  const { reports, GetReportsVisits, AcceptVisit, NotAcceptVisit } =
    useContext(ReportContext);

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
                  sx={{ color: "#ffb300" }}
                >
                  {t("informacionProp")}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  fontFamily="monospace"
                  fontWeight="bold"
                  variant="subtitle1"
                  sx={{ color: "black", display: "flex", alignItems: "center" }}
                >
                  <HomeIcon sx={{ color: "#3F51B5", marginRight: 1 }} />
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
                  <PersonIcon sx={{ color: "#4CAF50", marginRight: 1 }} />
                  {t("de")} {propertyData.owner.name}{" "}
                  {propertyData.owner.last_name}
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
                    <PersonIcon sx={{ color: "#FF9800", marginRight: 1 }} />
                    {t("asesorI")} {propertyData.user_inm.name}{" "}
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
                  <AttachMoneyIcon sx={{ color: "#FFC107", marginRight: 1 }} />
                  {t("en")} {name} {formatPrice(final_price)} MXN
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
                  sx={{ color: "#ffb300" }}
                >
                  {t("detalleVisita")}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  fontFamily="monospace"
                  fontWeight="bold"
                  variant="subtitle1"
                  sx={{ color: "black", display: "flex", alignItems: "center" }}
                >
                  <PersonIcon sx={{ color: "#3F51B5", marginRight: 1 }} />
                  {t("nombreCliente")} {bookingData.name}{" "}
                  {bookingData.last_name}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  fontFamily="monospace"
                  fontWeight="bold"
                  variant="subtitle1"
                  sx={{ color: "black", display: "flex", alignItems: "center" }}
                >
                  <EmailIcon sx={{ color: "#4CAF50", marginRight: 1 }} />
                  {t("email")} {bookingData.email}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  fontFamily="monospace"
                  fontWeight="bold"
                  variant="subtitle1"
                  sx={{ color: "black", display: "flex", alignItems: "center" }}
                >
                  <PhoneIcon sx={{ color: "#FF9800", marginRight: 1 }} />
                  {t("numeroTelefono")} {bookingData.phone}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  fontFamily="monospace"
                  fontWeight="bold"
                  variant="subtitle1"
                  sx={{ color: "black", display: "flex", alignItems: "center" }}
                >
                  <CalendarTodayIcon
                    sx={{ color: "#E91E63", marginRight: 1 }}
                  />
                  {t("fechaVisita")}
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
                  <CommentIcon sx={{ color: "#009688", marginRight: 1 }} />
                  {t("comentariosCliete")} {bookingData.message}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                {(type_user === "1" ||
                  type_user === "2" ||
                  type_user === "3" ||
                  type_user === "5") && (
                  <Stack direction="row" spacing={2}>
                    {bookingData.status === 2 && (
                      <Button
                        onClick={() => AcceptVisit(bookingData.id)}
                        variant="outlined"
                        color="success"
                        startIcon={<DoneAllIcon />}
                      >
                        {t("siAsistioVisita")}
                      </Button>
                    )}
                    {bookingData.status === 2 && (
                      <Button
                        onClick={() => NotAcceptVisit(bookingData.id)}
                        variant="outlined"
                        color="error"
                        startIcon={<CloseIcon />}
                      >
                        {t("noAsistioVisita")}
                      </Button>
                    )}
                  </Stack>
                )}
              </Grid>
            </Grid>
          </Grid>
        )}
        {report_booking !== undefined && report_booking.length > 0 && (
          <ReportBooking
            report_booking={report_booking}
            bookingData={bookingData}
          />
        )}
      </Grid>
    </Layout>
  );
}
