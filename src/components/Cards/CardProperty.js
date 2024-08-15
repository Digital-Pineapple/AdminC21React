import {
  Alert,
  Box,
  Card,
  CardActions,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useContext } from "react";
import ModalImage from "react-modal-image-responsive";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelIcon from "@mui/icons-material/Cancel";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import AddService from "../PropertyDetails/AddService";
import AddView3D from "../PropertyDetails/AddView3D";
import PropertiesContext from "../../context/Properties/PropertiesContext";
import AttachFileMultimedia from "../../containers/Properties/AddMultimedia";
import image from "../../assets/img/default.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const useStyles = makeStyles({
  imgproduct: {
    top: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
  },
});

const CardProperty = ({ property }) => {
  const { images } = property;
  const { rules } = property;
  const id = rules.map((rul) => rul.id) || [];

  const [id_property, saveProperty] = useState(null);
  const { DeleteProperty } = React.useContext(PropertiesContext);
  let type_user = localStorage.getItem("type_user");

  const [AddServiceModal, openAddServiceModal] = useState(false);
  const handleClickOpenAddService = (id) => {
    openAddServiceModal(true);
    saveProperty(id);
  };
  const handleCloseAddServiceProperty = () => {
    openAddServiceModal(false);
    saveProperty(null);
  };

  const [AddView3DModal, openAddView3DModal] = useState(false);
  const handleClickOpenAddView3D = (id) => {
    openAddView3DModal(true);
    saveProperty(id);
  };
  const handleCloseAddView3D = () => {
    openAddView3DModal(false);
    saveProperty(null);
  };

  const [modalMultimedia, openModalMultimedia] = useState(false);
  const handleOpenMultimedia = (id) => {
    openModalMultimedia(true);
    saveProperty(id);
  };
  const handleCloseMultimedia = () => {
    openModalMultimedia(false);
    saveProperty(null);
  };
  const classes = useStyles();
  const {
    PublishProperty,
    BackPendingProperty,
    SoldProperty,
    RentProperty,
    SoldToPublished,
    RentedToPublished,
  } = useContext(PropertiesContext);
  return (
    <>
      <Card className={classes.card}>
        <Alert
          icon={false}
          severity="info"
          sx={{ backgroundColor: "#8ED5E1", color: "#1F3473" }}
        >
          <Typography
            fontWeight="bold"
            fontFamily="monospace"
            textOverflow={"ellipsis"}
            minHeight={"3rem"}
            textAlign="center"
            sx={{ textOverflow: "ellipsis" }}
          >
            {property.name}
          </Typography>
        </Alert>

        <Box sx={{ width: "100%", display: "flex" }}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Box sx={{ pt: "100%", position: "relative" }}>
                {images === undefined ? (
                  <ModalImage
                    className={classes.imgproduct}
                    small={image}
                    large={image}
                    alt={property.name}
                  />
                ) : images.length > 0 ? (
                  <ModalImage
                    className={classes.imgproduct}
                    small={`${images[0].url}`}
                    large={`${images[0].url}`}
                    alt={property.name}
                  />
                ) : (
                  <ModalImage
                    className={classes.imgproduct}
                    small={image}
                    large={image}
                    alt={property.name}
                  />
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>
        <CardActions>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              display="flex"
              justifyContent="space-between"
            >
              {/* Ambos Status */}
              {(property.status === 2 || property.status === 3) && (
                <>
                  <Tooltip title="Detalle de Propiedad" placement="top">
                    <Link to={`/Propertydetail/${property.id}`}>
                      <IconButton>
                        <VisibilityIcon sx={{ color: "blue" }} />
                      </IconButton>
                    </Link>
                  </Tooltip>
                  <Tooltip title="Editar Propiedad" placement="top">
                    <Link to={`/EditProperty/${property.id}`}>
                      <IconButton>
                        <EditIcon sx={{ color: "orange" }} />
                      </IconButton>
                    </Link>
                  </Tooltip>
                  <Tooltip title="Agregar Servicios" placement="top">
                    <IconButton
                      onClick={() => handleClickOpenAddService(property.id)}
                    >
                      <SettingsIcon sx={{ color: "grey" }} />
                    </IconButton>
                  </Tooltip>
                  {(type_user === "1" || type_user === "2") && (
                    <Tooltip title="Eliminar Propiedad" placement="top">
                      <IconButton
                        size="small"
                        onClick={() => DeleteProperty(property.id)}
                      >
                        <DeleteIcon sx={{ color: "red" }} />
                      </IconButton>
                    </Tooltip>
                  )}
                </>
              )}

              {/* Status 2 = Por Aprobar */}
              {property.status === 2 && (
                <>
                  <Tooltip title="Agregar Multimedia" placement="top">
                    <IconButton
                      onClick={() => handleOpenMultimedia(property.id)}
                    >
                      <AddPhotoAlternateIcon sx={{ color: "green" }} />
                    </IconButton>
                  </Tooltip>
                  {(type_user === "1" || type_user === "2") && (
                    <Tooltip title="Publicar Propiedad" placement="top">
                      <IconButton onClick={() => PublishProperty(property.id)}>
                        <CheckCircleOutlineIcon
                          sx={{ color: "rgb(46, 255, 75)" }}
                        />
                      </IconButton>
                    </Tooltip>
                  )}
                </>
              )}

              {/* Status 3 = Publicadas */}
              {property.status === 3 && (
                <>
                  {id.join() === "1" && (
                    <Tooltip title="Propiedad Rentada" placement="top">
                      <IconButton onClick={() => RentProperty(property.id)}>
                        <MonetizationOnIcon sx={{ color: "#E99B00" }} />
                      </IconButton>
                    </Tooltip>
                  )}
                  {id.join() === "2" && (
                    <Tooltip title="Propiedad Vendida" placement="top">
                      <IconButton onClick={() => SoldProperty(property.id)}>
                        <CheckCircleIcon sx={{ color: "#2EFF4B" }} />
                      </IconButton>
                    </Tooltip>
                  )}
                  {(type_user === "1" || type_user === "2") && (
                    <Tooltip title="Deshacer publicación" placement="top">
                      <IconButton
                        onClick={() => BackPendingProperty(property.id)}
                      >
                        <CancelIcon sx={{ color: "red" }} />
                      </IconButton>
                    </Tooltip>
                  )}
                </>
              )}

              {/* Status 4 = Vendidas */}
              {property.status === 4 && (
                <>
                  <Tooltip title="Detalle de Propiedad" placement="top">
                    <Link to={`/Propertydetail/${property.id}`}>
                      <IconButton>
                        <VisibilityIcon sx={{ color: "blue" }} />
                      </IconButton>
                    </Link>
                  </Tooltip>
                  <Tooltip title="Cancelar Venta" placement="top">
                    <IconButton onClick={() => SoldToPublished(property.id)}>
                      <CancelIcon sx={{ color: "red" }} />
                    </IconButton>
                  </Tooltip>
                </>
              )}

              {/* Status 5 = Rentadas  */}
              {property.status === 5 && (
                <>
                  <Tooltip title="Detalle de Propiedad" placement="top">
                    <Link to={`/Propertydetail/${property.id}`}>
                      <IconButton>
                        <VisibilityIcon sx={{ color: "blue" }} />
                      </IconButton>
                    </Link>
                  </Tooltip>
                  <Tooltip title="Cancelar Renta" placement="top">
                    <IconButton onClick={() => RentedToPublished(property.id)}>
                      <CancelIcon sx={{ color: "red" }} />
                    </IconButton>
                  </Tooltip>
                </>
              )}
            </Grid>
          </Grid>
        </CardActions>
      </Card>
      {id_property !== null && (
        <AttachFileMultimedia
          open={modalMultimedia}
          handleClose={handleCloseMultimedia}
          id={id_property}
        />
      )}
      {id_property !== null && (
        <AddService
          modal={AddServiceModal}
          handleClose={handleCloseAddServiceProperty}
          id={id_property}
        />
      )}
      {id_property !== null && (
        <AddView3D
          modal={AddView3DModal}
          handleClose={handleCloseAddView3D}
          id={id_property}
        />
      )}
    </>
  );
};

export default CardProperty;
