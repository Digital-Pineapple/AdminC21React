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
      {visit.bookings.map((item) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140, opacity: "0.2" }}
            image={bg}
            title="citas"
          />
          <CardContent sx={{ marginTop: -15 }}>
            <Typography
              sx={{
                color: "#1F3473",
              }}
            >
              <b>Nombre:</b>
            </Typography>{" "}
            <b>{item.name}</b>
            <Typography
              sx={{
                color: "#1F3473",
              }}
            >
              <b>Telefono:</b>
            </Typography>
            <b>{item.phone}</b>
            <Typography
              sx={{
                color: "#1F3473",
              }}
            >
              <b>Correo Electronico:</b>
            </Typography>
            <b>{item.email}</b>
            <Typography
              sx={{
                color: "#1F3473",
              }}
            >
              <b>Fecha:</b>
            </Typography>
            <b>{item.datetime}</b>
            <Typography
              sx={{
                color: "#1F3473",
              }}
            >
              <b>Mensaje:</b>
            </Typography>
            <b>{item.message}</b>
            <Typography
              sx={{
                color: "#1F3473",
              }}
            >
              {" "}
              <b>Propiedad:</b>
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
