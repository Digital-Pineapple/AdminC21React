import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import bg from "../../assets/img/category.png";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Grid, IconButton } from "@mui/material";
import UsersContext from "../../context/Users/UsersContext";
import img from "../../assets/img/user.png";
export default function CardUser({ user }) {
  const { DeleteUsers } = React.useContext(UsersContext);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140, opacity: "0.2" }}
        image={img}
        title="users"
      />
      <CardContent sx={{ marginTop: -15 }}>
        <Typography
          sx={{
            color: "#662549",
          }}
        >
          Nombre(s):
        </Typography>
        <b>{user.name}</b>

        <Typography
          sx={{
            color: "#662549",
          }}
        >
          {" "}
          Correo Electronico:
        </Typography>
        <b>{user.email}</b>

        <Typography
          sx={{
            color: "#662549",
          }}
        >
          {" "}
          Tipo de Usuario:
        </Typography>
        <b>
          {" "}
          {user.type_user === 1
            ? "Admin"
            : user.type_user === 2
            ? "Inmobiliaria"
            : user.type_user === 3
            ? "Asesor (Broker)"
            : user.type_user === 4 && "Inquilino (Rentar/Comprar)"}
        </b>
      </CardContent>
      <CardActions>
        {/* <IconButton size="small">
          <EditIcon sx={{ color: "#0277bd" }} />
        </IconButton> */}
        <IconButton size="small" onClick={() => DeleteUsers(user.id)}>
          <DeleteIcon sx={{ color: "red" }} />
        </IconButton>
      </CardActions>
    </Card>
  );
}
