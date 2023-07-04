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
        <label>
          <b>Nombre</b>
        </label>
        <Typography>{user.name}</Typography>
        <label>
          <b>Correo</b>
        </label>
        <Typography>{user.email}</Typography>
        <label>
          <b>Rol</b>
        </label>
        <Typography>{user.roles[0].name}</Typography>
      </CardContent>
      <CardActions>
        <IconButton size="small">
          <EditIcon sx={{ color: "#0277bd" }} />
        </IconButton>
        <IconButton size="small" onClick={() => DeleteUsers(user.id)}>
          <DeleteIcon sx={{ color: "red" }} />
        </IconButton>
      </CardActions>
    </Card>
  );
}
