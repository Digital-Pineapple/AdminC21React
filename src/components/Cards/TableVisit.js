import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelIcon from "@mui/icons-material/Cancel";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { format } from "date-fns";
import { es } from "date-fns/locale/es";
import React, { useContext } from "react";
import VisitContext from "../../context/Visits/VisitContext";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#8ED5E1",
    color: "#1F3473",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
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
              <StyledTableCell data-label="Status:">
                {visit.status === 2
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
                    <Tooltip title="Aprovar Visita" placement="top">
                      <CheckCircleOutlineIcon sx={{ color: "#0AC309" }} />
                    </Tooltip>
                  </IconButton>
                )}
                {visit.status === 2 && (
                  <IconButton onClick={() => BackPendingVisit(visit.id)}>
                    <Tooltip title="Cancelar Visita" placement="top">
                      <CancelIcon sx={{ color: "red" }} />
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
    </TableContainerResponsive>
  );
}
