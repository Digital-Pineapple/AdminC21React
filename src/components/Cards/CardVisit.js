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
  console.log(visit, "la visita");
  const { DeleteVisit } = React.useContext(VisitContext);

  return (
    <>
      {visit.bookings.map((item) => (
        <Card sx={{ maxWidth: "auto" }}>
          <CardMedia sx={{ height: 130, opacity: "0.7" }} image={bg} />
          <CardContent>
            <Typography
              sx={{
                color: "#662549",
              }}
            >
              Nombre:
            </Typography>{" "}
            <b>{item.name}</b>
            <Typography
              sx={{
                color: "#662549",
              }}
            >
              Telefono:
            </Typography>
            <b>{item.phone}</b>
            <Typography
              sx={{
                color: "#662549",
              }}
            >
              Correo Electronico:
            </Typography>
            <b>{item.email}</b>
            <Typography
              sx={{
                color: "#662549",
              }}
            >
              Fecha:
            </Typography>
            <b>{item.datetime}</b>
            <Typography
              sx={{
                color: "#662549",
              }}
            >
              Mensaje:
            </Typography>
            <b>{item.message}</b>
            <Typography
              sx={{
                color: "#662549",
              }}
            >
              {" "}
              Propiedad
            </Typography>
            <b>{visit.name}</b>
          </CardContent>
          <IconButton
            size="small"
            onClick={() => DeleteVisit(visit.bookings[0].id)}
          >
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        </Card>
      ))}
    </>
  );
}
