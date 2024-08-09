import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { format } from "date-fns";
import { es } from "date-fns/locale/es";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelIcon from "@mui/icons-material/Cancel";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddIcon from "@mui/icons-material/Add";
import React, { useContext, useState } from "react";
import VisitContext from "../../context/Visits/VisitContext";
import AddReport from "../../containers/Visits/AddReport";

const statusColors = {
  1: "red",
  2: "green",
  3: "blue",
  4: "black",
  default: "gray",
};

const StyledTableCell = styled(TableCell)(({ theme, status }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#8ED5E1",
    color: "#1F3473",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
    color: statusColors[status] || statusColors.default,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const TableContainerResponsive = styled(TableContainer)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    "& thead": {
      display: "none",
    },
    "& tbody tr": {
      display: "block",
      marginBottom: "15px",
    },
    "& td": {
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 5px",
      borderBottom: "1px solid #ddd",
      "&:before": {
        content: "attr(data-label)",
        fontWeight: "bold",
        textTransform: "uppercase",
      },
      "&:last-child": {
        borderBottom: 0,
      },
    },
  },
}));

export default function TableVisit({ visits }) {  
  const { DeleteVisit, AcceptVisit, BackPendingVisit } =
    useContext(VisitContext);

  const [openModal, setOpenModal] = useState(false);
  const [selectedVisitId, setSelectedVisitId] = useState(null);

  const handleClickOpen = (visitId) => {
    setSelectedVisitId(visitId);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
    setSelectedVisitId(null);
  };

  return (
    <TableContainerResponsive component={Paper} sx={{ overflowX: "auto" }}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nombre(s):</StyledTableCell>
            <StyledTableCell>Telefono:</StyledTableCell>
            <StyledTableCell>Correo Electronico:</StyledTableCell>
            <StyledTableCell>Fecha Registrada:</StyledTableCell>
            <StyledTableCell>Mensaje:</StyledTableCell>
            <StyledTableCell>Status:</StyledTableCell>
            <StyledTableCell>Acciones:</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {visits.map((visit) => (
            <StyledTableRow key={visit.id}>
              <StyledTableCell data-label="Nombre(s)">
                {visit.name} {visit.last_name}
              </StyledTableCell>
              <StyledTableCell data-label="Telefono">
                {visit.phone}
              </StyledTableCell>
              <StyledTableCell data-label="Correo Electronico">
                {visit.email}
              </StyledTableCell>
              <StyledTableCell data-label="Fecha Registrada">
                {format(
                  new Date(visit.created_at),
                  "dd 'de' MMMM 'de' yyyy 'a las' HH:mm",
                  { locale: es }
                )}
              </StyledTableCell>
              <StyledTableCell data-label="Mensaje">
                {visit.message}
              </StyledTableCell>
              <StyledTableCell data-label="Status:" status={visit.status}>
                {visit.status === 4
                  ? "Has visitado al cliente, pero él no asistió a la reunión."
                  : visit.status === 3
                  ? "Has visitado al cliente y han alcanzado un acuerdo."
                  : visit.status === 2
                  ? "Visita Aprobada."
                  : visit.status === 1
                  ? "Visita No Aprobada."
                  : "Status Desconocido"}
              </StyledTableCell>
              <StyledTableCell data-label="Acciones">
                <Link to={`/DetailVisits/${visit.id}`}>
                  <IconButton size="small">
                    <Tooltip title="Detalle de Visita" placement="top">
                      <VisibilityIcon sx={{ color: "blue" }} />
                    </Tooltip>
                  </IconButton>
                </Link>

                {visit.status === 1 && (
                  <IconButton
                    size="small"
                    onClick={() => AcceptVisit(visit.id)}
                  >
                    <Tooltip title="Aceptar Visita" placement="top">
                      <CheckCircleOutlineIcon sx={{ color: "#0AC309" }} />
                    </Tooltip>
                  </IconButton>
                )}

                {visit.status === 2 && (
                  <IconButton
                    size="small"
                    onClick={() => BackPendingVisit(visit.id)}
                  >
                    <Tooltip title="Cancelar Visita" placement="top">
                      <CancelIcon sx={{ color: "red" }} />
                    </Tooltip>
                  </IconButton>
                )}

                {visit.status === 3 && (
                  <IconButton
                    size="small"
                    onClick={() => handleClickOpen(visit.id)}
                  >
                    <Tooltip title="Crear Reporte" placement="top">
                      <AddIcon sx={{ color: "black" }} />
                    </Tooltip>
                  </IconButton>
                )}

                <IconButton size="small" onClick={() => DeleteVisit(visit.id)}>
                  <Tooltip title="Eliminar Visita" placement="top">
                    <DeleteIcon sx={{ color: "#FF0000" }} />
                  </Tooltip>
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      {selectedVisitId && (
        <AddReport
          modal={openModal}
          handleClose={handleClose}
          bookingData={selectedVisitId}
        />
      )}
    </TableContainerResponsive>
  );
}
