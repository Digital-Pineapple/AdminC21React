/**
 * Componente CardUser:
 * Este componente representa una tarjeta para mostrar los detalles de un usuario, con opciones para editar o eliminar el usuario.
 *
 * La tarjeta muestra información clave del usuario, como su nombre, apellido, tipo de usuario, teléfono y correo electrónico.
 * Dependiendo del tipo de usuario, si el usuario es de tipo inmobiliaria, se habilita un botón para mostrar a los asesores de la inmobiliaria.
 *
 * Al hacer clic en el ícono de editar, se abre un modal que permite editar los detalles del usuario seleccionado.
 * La función `handleClickOpen` se encarga de abrir el modal y guardar el ID del usuario para poder editarlo.
 * Al hacer clic en el ícono de eliminar, el usuario seleccionado es eliminado mediante la función `DeleteUsers` del contexto `UsersContext`.
 *
 * El componente utiliza Material-UI para la estructura de la tarjeta y los iconos, y el componente `EditUser` maneja la edición de los detalles del usuario.
 *
 * Propiedades:
 * - `user`: Objeto que contiene los detalles del usuario, como su nombre, apellido, tipo de usuario, teléfono y correo electrónico.
 */
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
import { Person, Email, Phone, Work } from "@mui/icons-material";
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
              color: "black",
              display: "flex",
              alignItems: "center",
            }}
          >
            <b>Nombre(s):</b>
          </Typography>
          <Typography
            sx={{
              color: "black",
              display: "flex",
              alignItems: "center",
              padding: 1,
            }}
          >
            <Person sx={{ color: "#e7a62f", marginRight: 1 }} />
            {user.name}
          </Typography>
          <Typography
            sx={{
              color: "black",
              display: "flex",
              alignItems: "center",
            }}
          >
            <b>Apellido(s):</b>
          </Typography>
          <Typography
            sx={{
              color: "black",
              display: "flex",
              alignItems: "center",
              padding: 1,
            }}
          >
            <Person sx={{ color: "#e7a62f", marginRight: 1 }} />
            {user.last_name}
          </Typography>
          <Typography
            sx={{
              color: "black",
              display: "flex",
              alignItems: "center",
            }}
          >
            <b>Tipo de Usuario:</b>
          </Typography>
          <Typography
            sx={{
              color: "black",
              display: "flex",
              alignItems: "center",
              padding: 1,
            }}
          >
            <Work sx={{ color: "#e7a62f", marginRight: 1 }} />
            {user.type_user === 1
              ? "Admin"
              : user.type_user === 2
              ? "Inmobiliaria"
              : user.type_user === 3
              ? "Asesor (Individual)"
              : user.type_user === 4 && "Inquilino (Rentar/Comprar)"}
          </Typography>
          <Typography
            sx={{
              color: "black",
              display: "flex",
              alignItems: "center",
            }}
          >
            <b>Telefono:</b>
          </Typography>
          <Typography
            sx={{
              color: "black",
              display: "flex",
              alignItems: "center",
              padding: 1,
            }}
          >
            <Phone sx={{ color: "#e7a62f", marginRight: 1 }} />
            {user.phone_number}
          </Typography>
          <Typography
            sx={{
              color: "black",
              display: "flex",
              alignItems: "center",
            }}
          >
            <b>Correo Electrónico:</b>
          </Typography>
          <Typography
            sx={{
              color: "black",
              display: "flex",
              alignItems: "center",
              padding: 1,
            }}
          >
            <Email sx={{ color: "#e7a62f", marginRight: 1 }} />
            {user.email}
          </Typography>
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
