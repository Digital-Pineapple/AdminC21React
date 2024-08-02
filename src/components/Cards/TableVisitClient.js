import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { format } from "date-fns";
import { es } from "date-fns/locale/es";
import React, { useContext } from "react";
import VisitContext from "../../context/Visits/VisitContext";
import EditVisit from "../../containers/Visits/EditVisit";

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

export default function TableVisitClient({ visitsClient }) {
  const { DeleteVisitClient } = useContext(VisitContext);

  const [openModalVisit, setOpenModalVisit] = React.useState(false);
  const [idVisit, saveIdVisit] = React.useState(null);
  const handleClickOpenVisit = (id) => {
    setOpenModalVisit(true);
    saveIdVisit(id);
  };
  const handleCloseVisit = () => {
    setOpenModalVisit(false);
    saveIdVisit(null);
  };

  return (
    <TableContainerResponsive component={Paper} sx={{ overflowX: "auto" }}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Mi Nombre:</StyledTableCell>
            <StyledTableCell>Mi Telefono:</StyledTableCell>
            <StyledTableCell>Mi Correo Electronico:</StyledTableCell>
            <StyledTableCell>Fecha Registrada:</StyledTableCell>
            <StyledTableCell>Mi Mensaje:</StyledTableCell>
            <StyledTableCell>Status:</StyledTableCell>
            <StyledTableCell>Acciones:</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {visitsClient.map((visitsClien) => (
            <StyledTableRow key={visitsClien.id}>
              <StyledTableCell data-label="Mi Nombre:">
                {visitsClien.name} {visitsClien.last_name}
              </StyledTableCell>
              <StyledTableCell data-label="Mi Telefono:">
                {visitsClien.phone}
              </StyledTableCell>
              <StyledTableCell data-label="Mi Correo Electronico:">
                {visitsClien.email}
              </StyledTableCell>
              <StyledTableCell data-label="Fecha Registrada:">
                {format(
                  new Date(visitsClien.created_at),
                  "dd 'de' MMMM 'de' yyyy 'a las' HH:mm",
                  { locale: es }
                )}
              </StyledTableCell>
              <StyledTableCell data-label="Mi Mensaje:">
                {visitsClien.message}
              </StyledTableCell>
              <StyledTableCell data-label="Status:">
                {visitsClien.status === 4
                  ? "No has Asistido a la Visita."
                  : visitsClien.status === 3
                  ? "Has Asistido a la Visita."
                  : visitsClien.status === 2
                  ? "Visita Aprobada. Pronto se comunicarán contigo."
                  : visitsClien.status === 1
                  ? "Visita No Aprobada. Espera a que sea aprobada tu visita."
                  : "Status Desconocido"}
              </StyledTableCell>
              <StyledTableCell data-label="Acciones">
                <Link to={`/DetailVisits/${visitsClien.id}`}>
                  <IconButton size="small">
                    <Tooltip title="Detalle de Visita" placement="top">
                      <VisibilityIcon sx={{ color: "blue" }} />
                    </Tooltip>
                  </IconButton>
                </Link>
                {visitsClien.status === 1 && (
                  <Tooltip title="Editar mi Visita" placement="top">
                    <IconButton
                      onClick={() => handleClickOpenVisit(visitsClien.id)}
                    >
                      <EditIcon sx={{ color: "orange" }} />
                    </IconButton>
                  </Tooltip>
                )}

                {visitsClien.status === 1 && (
                  <Tooltip title="Cancelar mi Visita" placement="top">
                    <IconButton
                      onClick={() => DeleteVisitClient(visitsClien.id)}
                    >
                      <DeleteIcon sx={{ color: "red" }} />
                    </IconButton>
                  </Tooltip>
                )}
              </StyledTableCell>
              {idVisit !== null && (
                <EditVisit
                  modal={openModalVisit}
                  handleClose={handleCloseVisit}
                  id={idVisit}
                />
              )}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainerResponsive>
  );
}
