import React, { useContext } from "react";
import { Card, Grid, Typography, Button } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import EditReport from "./EditReport";
import VisitContext from "../../context/Visits/VisitContext";

const ReportBooking = ({ report_booking, bookingData }) => {
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
    <div>
      <Card sx={{ padding: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography
              fontFamily="monospace"
              fontWeight="bold"
              variant="h5"
              sx={{ color: "#1F3473" }}
            >
              Información de Reporte:
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Typography
              fontFamily="monospace"
              fontWeight="bold"
              variant="subtitle1"
              sx={{ color: "black" }}
            >
              Ubicación:
            </Typography>
            {report.location === 1
              ? "Muy Bien"
              : report.location === 2
              ? "Bien"
              : report.location === 3
              ? "Regular"
              : report.location === 4 && "Mal"}
            <Typography
              fontFamily="monospace"
              fontWeight="bold"
              variant="subtitle1"
              sx={{ color: "black" }}
            >
              Espacios:
            </Typography>
            {report.spaces === 1
              ? "Muy Bien"
              : report.spaces === 2
              ? "Bien"
              : report.spaces === 3
              ? "Regular"
              : report.spaces === 4 && "Mal"}
            <Typography
              fontFamily="monospace"
              fontWeight="bold"
              variant="subtitle1"
              sx={{ color: "black" }}
            >
              Estado de conservación:
            </Typography>
            {report.conservation === 1
              ? "Muy Bien"
              : report.conservation === 2
              ? "Bien"
              : report.conservation === 3
              ? "Regular"
              : report.conservation === 4 && "Mal"}
            <Typography
              fontFamily="monospace"
              fontWeight="bold"
              variant="subtitle1"
              sx={{ color: "black" }}
            >
              Distribución:
            </Typography>
            {report.distribution === 1
              ? "Muy Bien"
              : report.distribution === 2
              ? "Bien"
              : report.distribution === 3
              ? "Regular"
              : report.distribution === 4 && "Mal"}
            <Typography
              fontFamily="monospace"
              fontWeight="bold"
              variant="subtitle1"
              sx={{ color: "black" }}
            >
              Funcionalidad:
            </Typography>
            {report.functionality === 1
              ? "Muy Bien"
              : report.functionality === 2
              ? "Bien"
              : report.functionality === 3
              ? "Regular"
              : report.functionality === 4 && "Mal"}
            <Typography
              fontFamily="monospace"
              fontWeight="bold"
              variant="subtitle1"
              sx={{ color: "black" }}
            >
              Precio:
            </Typography>
            {report.price === 1
              ? "Muy Bien"
              : report.price === 2
              ? "Bien"
              : report.price === 3
              ? "Regular"
              : report.price === 4 && "Mal"}
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Typography
              fontFamily="monospace"
              fontWeight="bold"
              variant="subtitle1"
              sx={{ color: "black" }}
            >
              Comentarios:
            </Typography>
            {report.comments}

            <Typography
              fontFamily="monospace"
              fontWeight="bold"
              variant="subtitle1"
              sx={{ color: "black" }}
            >
              Considera esta propiedad como una alternativa de compra/renta?
            </Typography>
            {report.purchase_rent === 1
              ? "Sí"
              : report.purchase_rent === 2
              ? "No"
              : "Valor no especificado"}
            <Typography
              fontFamily="monospace"
              fontWeight="bold"
              variant="subtitle1"
              sx={{ color: "black" }}
            >
              ¿Por qué?
            </Typography>
            {report.because}
            <Typography
              fontFamily="monospace"
              fontWeight="bold"
              variant="subtitle1"
              sx={{ color: "black" }}
            >
              El servicio que ha recibido es:
            </Typography>
            {report.service === 1
              ? "Muy Bien"
              : report.service === 2
              ? "Bien"
              : report.service === 3
              ? "Regular"
              : report.service === 4 && "Mal"}
            <Typography
              fontFamily="monospace"
              fontWeight="bold"
              variant="subtitle1"
              sx={{ color: "black" }}
            >
              Observaciones:
            </Typography>
            {report.observations}
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleClickOpen(report.id)}
              sx={{
                color: "#1F3473",
                backgroundColor: "#8ED5E1",
                "&:hover": {
                  color: "#1F3473",
                  backgroundColor: "#8ED5E1 ",
                },
              }}
            >
              Editar Reporte <EditNoteIcon sx={{ marginLeft: 2 }} />
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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
              Descargar Reporte
              <CloudDownloadIcon sx={{ marginLeft: 2 }} />
            </Button>
          </Grid>
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
      </Card>
    </div>
  );
};

export default ReportBooking;
