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
import IframeProperty from "../PropertyDetails/IframeProperty";
import PlaceIcon from "@mui/icons-material/Place";
import AddService from "../PropertyDetails/AddService";
import AddView3D from "../PropertyDetails/AddView3D";
import PropertiesContext from "../../context/Properties/PropertiesContext";
import AttachFileMultimedia from "../../containers/Properties/AddMultimedia";
import image from "../../assets/img/default.png";
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
  const [id_property, saveProperty] = useState(null);
  const { DeleteProperty } = React.useContext(PropertiesContext);

  const [addreesProperty, saveAddressProperty] = useState(null);
  const [IframePropertyModal, OpenIframeProperty] = useState(false);
  const handleClickOpenIframe = (id) => {
    saveAddressProperty(id);
    OpenIframeProperty(true);
  };
  const handleClickCloseIframe = () => {
    OpenIframeProperty(false);
  };
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
  const { PublishProperty, BackPendingProperty } =
    useContext(PropertiesContext);
  return (
    <>
      <Card className={classes.card}>
        {property.status === 2 ? (
          <Alert
            icon={false}
            severity="info"
            sx={{ backgroundColor: "#662549", color: "white" }}
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
        ) : (
          property.status === 3 && (
            <Alert
              icon={false}
              severity="success"
              sx={{ backgroundColor: "#451952", color: "white" }}
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
          )
        )}

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

        {/* ))} */}
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
              <Tooltip title="Editar Propiedad" placement="top">
                <Link to={`/EditProperty/${property.id}`}>
                  <IconButton>
                    <EditIcon sx={{ color: "orange" }} />
                  </IconButton>
                </Link>
              </Tooltip>

              <Tooltip title="Detalle de Propiedad" placement="top">
                <Link to={`/Propertydetail/${property.id}`}>
                  <IconButton>
                    <VisibilityIcon sx={{ color: "blue" }} />
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
              <Tooltip title="Eliminar Propiedad" placement="top">
                <IconButton
                  size="small"
                  onClick={() => DeleteProperty(property.id)}
                >
                  <DeleteIcon sx={{ color: "red" }} />
                </IconButton>
              </Tooltip>

              {property.status === 3 && (
                <Tooltip title="Deshacer publicación" placement="top">
                  <IconButton onClick={() => BackPendingProperty(property.id)}>
                    <CancelIcon sx={{ color: "red" }} />
                  </IconButton>
                </Tooltip>
              )}

              {/* <Tooltip title="Ubicación de Propiedad" placement="top">
                <IconButton onClick={() => handleClickOpenIframe(property.id)}>
                  <PlaceIcon sx={{ color: "black" }} />
                </IconButton>
              </Tooltip> */}
              {property.status === 2 && (
                <>
                  <Tooltip title="Agregar Multimedia" placement="top">
                    <IconButton
                      onClick={() => handleOpenMultimedia(property.id)}
                    >
                      <AddPhotoAlternateIcon sx={{ color: "green" }} />
                    </IconButton>
                  </Tooltip>

                  {/* <Tooltip title="Agregar Vista 3D" placement="top">
                    <IconButton
                      onClick={() => handleClickOpenAddView3D(property.id)}
                    >
                      <HomeIcon sx={{ color: "orange" }} />{" "}
                    </IconButton>
                  </Tooltip> */}

                  <Tooltip title="Publicar Propiedad" placement="top">
                    <IconButton onClick={() => PublishProperty(property.id)}>
                      <CheckCircleOutlineIcon
                        sx={{ color: "rgb(46, 255, 75)" }}
                      />
                    </IconButton>
                  </Tooltip>
                </>
              )}
              {/* {property.status === 3 && (
                <Tooltip title="Actualizar Multimedia" placement="top">
                  <IconButton>
                    <CloudSyncIcon sx={{ color: "black" }} />
                  </IconButton>
                </Tooltip>
              )} */}
            </Grid>
          </Grid>
        </CardActions>
      </Card>
      {addreesProperty !== null && (
        <IframeProperty
          modal={IframePropertyModal}
          handleClose={handleClickCloseIframe}
          iframe={addreesProperty}
        />
      )}
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
