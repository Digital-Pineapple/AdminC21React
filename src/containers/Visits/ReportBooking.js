import React, { useContext } from "react";
import { Grid, Typography, Button } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import BuildIcon from "@mui/icons-material/Build";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import CommentIcon from "@mui/icons-material/Comment";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import StarIcon from "@mui/icons-material/Star";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditReport from "./EditReport";
import VisitContext from "../../context/Visits/VisitContext";

const ReportBooking = ({ report_booking, bookingData }) => {
  let type_user = localStorage.getItem("type_user");
  const { DownloadPDF } = useContext(VisitContext);
  const id = bookingData.id;
  const report = report_booking[0];
  const [id_report, saveid_report] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);

  const handleClickOpen = (id) => {
    setOpenModal(true);
    saveid_report(id);
  };

  const handleClose = () => {
    setOpenModal(false);
    saveid_report(null);
  };

  return (
    <Grid item xs={12} md={6}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            fontFamily="monospace"
            fontWeight="bold"
            variant="h5"
            sx={{ color: "#1F3473" }}
          >
            Información de Reporte:
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            fontFamily="monospace"
            fontWeight="bold"
            variant="subtitle1"
            sx={{ color: "black", display: "flex", alignItems: "center" }}
          >
            <LocationOnIcon sx={{ color: "#E91E63", marginRight: 1 }} />{" "}
            Ubicación: {getRatingText(report.location)}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            fontFamily="monospace"
            fontWeight="bold"
            variant="subtitle1"
            sx={{ color: "black", display: "flex", alignItems: "center" }}
          >
            <HomeIcon sx={{ color: "#3F51B5", marginRight: 1 }} /> Espacios:{" "}
            {getRatingText(report.spaces)}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            fontFamily="monospace"
            fontWeight="bold"
            variant="subtitle1"
            sx={{ color: "black", display: "flex", alignItems: "center" }}
          >
            <CheckCircleIcon sx={{ color: "#4CAF50", marginRight: 1 }} /> Estado
            de conservación: {getRatingText(report.conservation)}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            fontFamily="monospace"
            fontWeight="bold"
            variant="subtitle1"
            sx={{ color: "black", display: "flex", alignItems: "center" }}
          >
            <GroupWorkIcon sx={{ color: "#FF9800", marginRight: 1 }} />{" "}
            Distribución: {getRatingText(report.distribution)}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            fontFamily="monospace"
            fontWeight="bold"
            variant="subtitle1"
            sx={{ color: "black", display: "flex", alignItems: "center" }}
          >
            <BuildIcon sx={{ color: "#9C27B0", marginRight: 1 }} />{" "}
            Funcionalidad: {getRatingText(report.functionality)}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            fontFamily="monospace"
            fontWeight="bold"
            variant="subtitle1"
            sx={{ color: "black", display: "flex", alignItems: "center" }}
          >
            <PriceCheckIcon sx={{ color: "#FFC107", marginRight: 1 }} /> Precio:{" "}
            {getRatingText(report.price)}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            fontFamily="monospace"
            fontWeight="bold"
            variant="subtitle1"
            sx={{ color: "black", display: "flex", alignItems: "center" }}
          >
            <CommentIcon sx={{ color: "#009688", marginRight: 1 }} />{" "}
            Comentarios: {report.comments}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            fontFamily="monospace"
            fontWeight="bold"
            variant="subtitle1"
            sx={{ color: "black", display: "flex", alignItems: "center" }}
          >
            <ShoppingCartIcon sx={{ color: "#607D8B", marginRight: 1 }} />{" "}
            Considera esta propiedad como una alternativa de compra/renta?{" "}
            {report.purchase_rent === 1
              ? "Sí"
              : report.purchase_rent === 2
              ? "No"
              : "Valor no especificado"}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            fontFamily="monospace"
            fontWeight="bold"
            variant="subtitle1"
            sx={{ color: "black", display: "flex", alignItems: "center" }}
          >
            <QuestionAnswerIcon sx={{ color: "#795548", marginRight: 1 }} />{" "}
            ¿Por qué? {report.because}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            fontFamily="monospace"
            fontWeight="bold"
            variant="subtitle1"
            sx={{ color: "black", display: "flex", alignItems: "center" }}
          >
            <StarIcon sx={{ color: "#FFEB3B", marginRight: 1 }} /> El servicio
            que ha recibido es: {getRatingText(report.service)}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            fontFamily="monospace"
            fontWeight="bold"
            variant="subtitle1"
            sx={{ color: "black", display: "flex", alignItems: "center" }}
          >
            <VisibilityIcon sx={{ color: "#1F3473", marginRight: 1 }} />{" "}
            Observaciones: {report.observations}
          </Typography>
        </Grid>
        {(type_user === "1" ||
          type_user === "2" ||
          type_user === "3" ||
          type_user === "5") && (
          <>
            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => handleClickOpen(report.id)}
                sx={{
                  color: "#1F3473",
                  backgroundColor: "#8ED5E1",
                  "&:hover": {
                    color: "#1F3473",
                    backgroundColor: "#8ED5E1",
                  },
                }}
              >
                Editar Reporte <EditNoteIcon sx={{ marginLeft: 2 }} />
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                onClick={() => DownloadPDF(id)}
                fullWidth
                variant="contained"
                sx={{
                  color: "#8ED5E1",
                  backgroundColor: "#1F3473",
                  "&:hover": {
                    color: "#8ED5E1",
                    backgroundColor: "#1F3473",
                  },
                }}
              >
                Descargar Reporte <CloudDownloadIcon sx={{ marginLeft: 2 }} />
              </Button>
            </Grid>
          </>
        )}
        {id_report !== null && (
          <EditReport
            modal={openModal}
            handleClose={handleClose}
            id={id_report}
            report={report}
            bookingData={bookingData}
          />
        )}
      </Grid>
    </Grid>
  );
};

const getRatingText = (rating) => {
  switch (rating) {
    case 1:
      return "Muy Bien";
    case 2:
      return "Bien";
    case 3:
      return "Regular";
    case 4:
      return "Mal";
    default:
      return "No especificado";
  }
};

export default ReportBooking;
