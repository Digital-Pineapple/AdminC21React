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
    <div>
      {visit.bookings.map((item) => (
        <Card sx={{ maxWidth: "auto", marginTop: 3 }}>
          <CardMedia
            sx={{ height: "auto", opacity: "0.6" }}
            image={bg}
            title="green iguana"
          >
            <CardContent>
              <label>
                <b>Nombre</b>
              </label>
              <Typography>{item.name}</Typography>
              <label>
                <b>Telefono</b>
              </label>
              <Typography>{item.phone}</Typography>
              <label>
                <b>Correo Electronico</b>
              </label>
              <Typography>{item.email}</Typography>
              <label>
                <b>Mensaje</b>
              </label>
              <Typography>{item.message}</Typography>
              <label>
                <b>Propiedad</b>
              </label>
              <Typography>{visit.name}</Typography>
            </CardContent>
            <CardActions>
              <IconButton
                size="small"
                onClick={() => DeleteVisit(visit.bookings[0].id)}
              >
                <DeleteIcon sx={{ color: "red" }} />
              </IconButton>
            </CardActions>
          </CardMedia>
        </Card>
      ))}
    </div>
  );
}
