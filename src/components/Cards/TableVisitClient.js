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
import { es } from "date-fns/locale";
import React, { useContext } from "react";
import VisitContext from "../../context/Visits/VisitContext";
import EditVisit from "../../containers/Visits/EditVisit";
import { useTranslation } from "react-i18next";

const statusColors = {
  1: "red",
  2: "green",
  3: "blue",
  4: "black",
  default: "gray",
};

const StyledTableCell = styled(TableCell)(({ theme, status }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F7CE82",
    color: "black",
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

export default function TableVisitClient({ visitsClient }) {
  const { t } = useTranslation();
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
            <StyledTableCell>{t("miNombre")}</StyledTableCell>
            <StyledTableCell>{t("miTelefono")}</StyledTableCell>
            <StyledTableCell>{t("miEmail")}</StyledTableCell>
            <StyledTableCell>{t("fechaVisita")}</StyledTableCell>
            <StyledTableCell>{t("miMensaje")}</StyledTableCell>
            <StyledTableCell>{t("status")}</StyledTableCell>
            <StyledTableCell>{t("acciones")}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {visitsClient.map((visit) => (
            <StyledTableRow key={visit.id}>
              <StyledTableCell data-label="Mi Nombre:">
                {visit.name} {visit.last_name}
              </StyledTableCell>
              <StyledTableCell data-label="Mi Teléfono:">
                {visit.phone}
              </StyledTableCell>
              <StyledTableCell data-label="Mi Correo Electrónico:">
                {visit.email}
              </StyledTableCell>
              <StyledTableCell data-label="Fecha Registrada:">
                {format(
                  new Date(visit.created_at),
                  "dd 'de' MMMM 'de' yyyy 'a las' HH:mm",
                  { locale: es }
                )}
              </StyledTableCell>
              <StyledTableCell data-label="Mi Men   saje:">
                {visit.message}
              </StyledTableCell>
              <StyledTableCell data-label="Status:" status={visit.status}>
                {visit.status === 4
                  ? "No has Asistido a la Visita."
                  : visit.status === 3
                  ? "Has Asistido a la Visita."
                  : visit.status === 2
                  ? "Visita Aprobada. Pronto se comunicarán contigo."
                  : visit.status === 1
                  ? "Visita No Aprobada. Espera a que sea aprobada tu visita."
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
                  <>
                    <Tooltip title="Editar mi Visita" placement="top">
                      <IconButton
                        onClick={() => handleClickOpenVisit(visit.id)}
                      >
                        <EditIcon sx={{ color: "orange" }} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Cancelar mi Visita" placement="top">
                      <IconButton onClick={() => DeleteVisitClient(visit.id)}>
                        <DeleteIcon sx={{ color: "red" }} />
                      </IconButton>
                    </Tooltip>
                  </>
                )}
              </StyledTableCell>
              {idVisit === visit.id && (
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
