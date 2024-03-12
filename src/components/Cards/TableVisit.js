import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { IconButton } from "@mui/material";
import moment from 'moment';
import DeleteIcon from "@mui/icons-material/Delete";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function TableVisit({ visit, item }) {
  console.log(visit);
  const formattedDate = moment(item.created_at).format('DD/MM/YYYY HH:mm:ss');

  const { DeleteVisit } = React.useContext(VisitContext);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nombre(s):</StyledTableCell>
            <StyledTableCell align="right">Apellido(s):</StyledTableCell>
            <StyledTableCell align="right">Telefono:</StyledTableCell>
            <StyledTableCell align="right">Correo Electronico:</StyledTableCell>
            <StyledTableCell align="right">Fecha Registrada:</StyledTableCell>
            <StyledTableCell align="right">Mensaje:</StyledTableCell>
            <StyledTableCell align="right">Propiedad:</StyledTableCell>
            <StyledTableCell align="right">Acciones:</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {visit.bookings.map((item) => (
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                {item.name}
              </StyledTableCell>
              <StyledTableCell align="right">{item.last_name}</StyledTableCell>
              <StyledTableCell align="right"> {item.phone} </StyledTableCell>
              <StyledTableCell align="right"> {item.email} </StyledTableCell>
              {/* <StyledTableCell align="right">{item.created_at}</StyledTableCell> */}
              <StyledTableCell align="right">{formattedDate}</StyledTableCell>
              <StyledTableCell align="right"> {item.message} </StyledTableCell>
              <StyledTableCell align="right"> {visit.name} </StyledTableCell>
              <StyledTableCell align="right">
                <IconButton
                  size="small"
                  onClick={() => DeleteVisit(visit.bookings[0].id)}
                >
                  <DeleteIcon sx={{ color: "red" }} />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
