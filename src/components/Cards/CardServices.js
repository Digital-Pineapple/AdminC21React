/**
 * Componente CardServices:
 * Este componente representa una tarjeta para mostrar un servicio con opciones para editar o eliminar el servicio.
 * 
 * La tarjeta muestra el nombre del servicio en un formato destacado, junto con una imagen de fondo. 
 * Al hacer clic en el ícono de editar, se abre un modal que permite editar los detalles del servicio seleccionado. 
 * La función `handleClickOpen` se encarga de abrir el modal y guardar el ID del servicio para poder editarlo.
 * Al hacer clic en el ícono de eliminar, el servicio seleccionado es eliminado mediante la función `DeleteService` del contexto `ServicesContext`.
 * 
 * El componente utiliza Material-UI para la estructura de la tarjeta, y el `EditService` es un contenedor que maneja la edición del servicio.
 * 
 * Propiedades:
 * - `service`: Objeto que contiene los detalles del servicio, como su nombre e ID.
 */
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import bg from "../../assets/img/services.png";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import ServicesContext from "../../context/Services/ServicesContext";
import EditService from "../../containers/Services/EditService";
import { useState } from "react";
export default function CardServices({ service }) {
  const { DeleteService } = React.useContext(ServicesContext);
  const [modalUpdate, OpenModalUpdate] = useState(false);
  const [id_service, saveIdService] = useState(null);
  const handleClickOpen = (id) => {
    OpenModalUpdate(true);
    saveIdService(id);
  };
  const handleClickClose = () => {
    OpenModalUpdate(false);
    saveIdService(null);
  };
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140, opacity: "0.2" }}
          image={bg}
          title="green iguana"
        />
        <CardContent sx={{ marginTop: -15 }}>
          <Typography
            fontWeight="bold"
            fontFamily="inherit"
            variant="h5"
            sx={{
              color: "black",
            }}
          >
            {service.name}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton size="small" onClick={() => handleClickOpen(service.id)}>
            <Tooltip title="Editar Servicio" placement="right">
              <EditIcon sx={{ color: "#0277bd" }} />
            </Tooltip>
          </IconButton>
          <IconButton size="small" onClick={() => DeleteService(service.id)}>
            <Tooltip title="Eliminar Servicio" placement="right">
              <DeleteIcon sx={{ color: "red" }} />
            </Tooltip>
          </IconButton>
        </CardActions>
      </Card>
      {id_service !== null && (
        <EditService
          open={modalUpdate}
          handleClose={handleClickClose}
          id={id_service}
        />
      )}
    </>
  );
}
