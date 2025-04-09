/**
 * Componente CardUser:
 * Este componente representa una tarjeta para mostrar los detalles de un usuario (asesor), con opciones para editar o eliminar el usuario.
 * 
 * La tarjeta muestra información clave del asesor, como su nombre, apellido, tipo de usuario, teléfono y correo electrónico.
 * Dependiendo del tipo de usuario, se muestran los detalles del asesor, incluyendo su correo electrónico, teléfono y otros datos relevantes.
 * 
 * Al hacer clic en el ícono de editar, se abre un modal que permite editar los detalles del asesor seleccionado. 
 * La función `handleClickOpen` se encarga de abrir el modal y guardar el ID del usuario para poder editarlo.
 * Al hacer clic en el ícono de eliminar, el asesor seleccionado es eliminado mediante la función `DeleteUsersInm` del contexto `UsersContext`.
 * 
 * El componente utiliza Material-UI para la estructura de la tarjeta y los iconos, y el componente `EditUser` maneja la edición de los detalles del asesor.
 * También se utiliza la librería `react-i18next` para traducir las etiquetas del componente.
 * 
 * Propiedades:
 * - `user`: Objeto que contiene los detalles del asesor, como su nombre, apellido, tipo de usuario, teléfono y correo electrónico.
 */
import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Grid, IconButton, Tooltip } from "@mui/material";
import EditUser from "../../containers/AseUsers/EditUser";
import UsersContext from "../../context/Users/UsersContext";
import img from "../../assets/img/user.png";
import { Person, Email, Phone, Work } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

export default function CardUser({ user }) {
  const { t } = useTranslation();
  const { DeleteUsersInm } = React.useContext(UsersContext);

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
            <b>{t("nombre")}</b>
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
            <b>{t("apellido")}</b>
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
            <b>{t("tipodeUsuario")}</b>
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
            {user.owner.email}
          </Typography>
          <Typography
            sx={{
              color: "black",
              display: "flex",
              alignItems: "center",
            }}
          >
            <b>{t("telefono")}</b>
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
            <b>{t("email")}</b>
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
          <IconButton size="small" onClick={() => handleClickOpen(user.id)}>
            <Tooltip title="Editar Asesor" placement="right">
              <EditIcon sx={{ color: "#0277bd" }} />
            </Tooltip>
          </IconButton>
          <IconButton size="small" onClick={() => DeleteUsersInm(user.id)}>
            <Tooltip title="Eliminar Asesor" placement="right">
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
