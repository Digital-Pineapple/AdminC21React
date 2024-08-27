import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { Grid, IconButton, Tooltip } from "@mui/material";
import EditUser from "../../containers/Users/EditUser";
import UsersContext from "../../context/Users/UsersContext";
import img from "../../assets/img/user.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
export default function CardUser({ user }) {
  const { DeleteUsers } = React.useContext(UsersContext);

  const [id_user, saveIdUser] = useState(null);
  const [modalUpdate, OpenModalUpdate] = useState(false);
  const handleClickOpen = (id) => {
    OpenModalUpdate(true);
    saveIdUser(id);
  };
  const handleClickClose = () => {
    OpenModalUpdate(false);
    saveIdUser(null);
  };
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140, opacity: "0.2" }}
          image={img}
          title="users"
        />
        <CardContent sx={{ marginTop: -15 }}>
          <Typography
            sx={{
              color: "#1F3473",
            }}
          >
            <b>Nombre(s):</b>
          </Typography>
          <b>{user.name}</b>
          <Typography
            sx={{
              color: "#1F3473",
            }}
          >
            <b>Apellido(s):</b>
          </Typography>
          <b>{user.last_name}</b>
          <Typography
            sx={{
              color: "#1F3473",
            }}
          >
            {" "}
            <b>Tipo de Usuario:</b>
          </Typography>{" "}
          <b>
            {user.type_user === 1
              ? "Admin"
              : user.type_user === 2
              ? "Inmobiliaria"
              : user.type_user === 3
              ? "Asesor (Individual)"
              : user.type_user === 4 && "Inquilino (Rentar/Comprar)"}
          </b>
          <Typography
            sx={{
              color: "#1F3473",
            }}
          >
            <b>Telefono:</b>
          </Typography>
          <b>{user.phone_number}</b>
          <Typography
            sx={{
              color: "#1F3473",
            }}
          >
            {" "}
            <b>Correo Electronico:</b>
          </Typography>
          <b>{user.email}</b>
        </CardContent>
        <CardActions>
          {user.type_user === 2 && (
            <Tooltip title="Mostrar Asesores" placement="top">
              <Link to={`/UsersInm/${user.id}`}>
                <IconButton>
                  <VisibilityIcon sx={{ color: "blue" }} />
                </IconButton>
              </Link>
            </Tooltip>
          )}
          <IconButton size="small" onClick={() => handleClickOpen(user.id)}>
            <Tooltip title="Editar Usuario" placement="right">
              <EditIcon sx={{ color: "#0277bd" }} />
            </Tooltip>
          </IconButton>
          <IconButton size="small" onClick={() => DeleteUsers(user.id)}>
            <Tooltip title="Eliminar Usuario" placement="right">
              <DeleteIcon sx={{ color: "red" }} />
            </Tooltip>
          </IconButton>
        </CardActions>
      </Card>
      {id_user !== null && (
        <EditUser
          open={modalUpdate}
          handleClose={handleClickClose}
          id={id_user}
          User={user}
        />
      )}
    </>
  );
}
