import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import VisitContext from "../../context/Visits/VisitContext";
import bg from "../../assets/img/visit.png";

export default function CardVisit({ visit }) {
  const { DeleteVisit } = React.useContext(VisitContext);

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140, opacity: "0.2" }}
          image={bg}
          title="green iguana"
        />
        <CardContent>
          <label>
            <b>Nombre</b>
          </label>
          <Typography>{visit.bookings[0].name}</Typography>
          <label>
            <b>Telefono</b>
          </label>
          <Typography>{visit.bookings[0].phone}</Typography>
          <label>
            <b>Correo Electronico</b>
          </label>
          <Typography>{visit.bookings[0].email}</Typography>
          <label>
            <b>Mensaje</b>
          </label>
          <Typography>{visit.bookings[0].message}</Typography>
          <label>
            <b>Propiedad</b>
          </label>
          <Typography>{visit.name}</Typography>
          <IconButton
            size="small"
            onClick={() => DeleteVisit(visit.bookings[0].id)}
          >
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        </CardContent>
      </Card>
    </>
  );
}
