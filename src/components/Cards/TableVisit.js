import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { format } from "date-fns";
import { es } from "date-fns/locale/es";
import React, { useContext, useEffect } from "react";
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

export default function TableVisit({ visit }) {
  const { DeleteVisit } = useContext(VisitContext);

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
            <StyledTableCell>Acciones:</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {visit.bookings.map((item) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell data-label="Nombre(s)">
                {item.name} {item.last_name}
              </StyledTableCell>
              <StyledTableCell data-label="Telefono">
                {item.phone}
              </StyledTableCell>
              <StyledTableCell data-label="Correo Electronico">
                {item.email}
              </StyledTableCell>
              <StyledTableCell data-label="Fecha Registrada">
                {format(
                  new Date(item.created_at),
                  "dd 'de' MMMM 'de' yyyy 'a las' HH:mm",
                  { locale: es }
                )}
              </StyledTableCell>
              <StyledTableCell data-label="Mensaje">
                {item.message}
              </StyledTableCell>
              <StyledTableCell data-label="Acciones">
                <Link to={`/DetailVisits/${item.id}`}>
                  <IconButton size="small">
                    <Tooltip title="Detalle de Visita" placement="top">
                      <VisibilityIcon sx={{ color: "blue" }} />
                    </Tooltip>
                  </IconButton>
                </Link>
                <a
                  href={`https://wa.me/${item.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton size="small">
                    <Tooltip title="Contactar al Cliente" placement="top">
                      <WhatsAppIcon sx={{ color: "#00A884" }} />
                    </Tooltip>
                  </IconButton>
                </a>
                <IconButton size="small" onClick={() => DeleteVisit(item.id)}>
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
