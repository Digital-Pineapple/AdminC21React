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
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloudSyncIcon from "@mui/icons-material/CloudSync";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DetailProperty from "../../containers/Properties/DetailProperty";
import { useState } from "react";
import IframeProperty from "../PropertyDetails/IframeProperty";
import PlaceIcon from "@mui/icons-material/Place";
import AddService from "../PropertyDetails/AddService";
import PropertiesContext from "../../context/Properties/PropertiesContext";
import AttachFileMultimedia from "../../containers/Properties/AddMultimedia";
import image from "../../assets/img/default.png";
const useStyles = makeStyles({
  titleProduct: {
    color: "white",
  },
  ojito: {
    color: "red",
  },
  imgproduct: {
    top: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
  },
  card: {
    w: "400px",
    h: "400px",
  },
  cardHeader: {
    position: "absolute",
    borderTop: "$borderWeights$light solid $gray800",
    marginBottom: 0,
    zIndex: 1,
    background: " rgba(255, 255, 255, 0.2)",
    justifyContent: "normal",
    textAlign: "justify",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(8px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    height: "auto",
  },
  cardBody: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    alt: "Relaxing app background",
  },
  cardFooter: {
    borderTop: "$borderWeights$light solid $gray800",
    marginTop: "85%",
    background: " rgba(255, 255, 255, 0.2)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    width: "auto",
    height: "auto",
    justifyContent: "space-between",
  },
});

const CardProperty = ({ property }) => {
  const { images, address } = property;

  const [detailProperty, openDetailProperty] = useState(false);
  const [id_property, saveProperty] = useState(null);
  const handleClickOpenDetail = (id) => {
    openDetailProperty(true);
    saveProperty(id);
  };
  const handleCloseDetail = () => {
    openDetailProperty(false);
    saveProperty(null);
  };
  const [addreesProperty, saveAddressProperty] = useState(null);
  const [IframePropertyModal, OpenIframeProperty] = useState(false);
  const handleClickOpenIframe = (address) => {
    saveAddressProperty(address);
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
          <Alert icon={false} severity="info">
            <Typography
              fontWeight="bold"
              fontFamily="monospace"
              textAlign="center"
            >
              {property.name}
            </Typography>
          </Alert>
        ) : (
          property.status === 3 && (
            <Alert icon={false} severity="success">
              <Typography
                fontWeight="bold"
                fontFamily="monospace"
                textAlign="center"
              >
                {property.name}
              </Typography>
            </Alert>
          )
        )}
        {/* {images?.map((image) => (
          <li>image.url</li>
        ))} */}
        {/* {images.map((image) => ( */}

        <Box sx={{ width: "100%", display: "flex" }}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Box sx={{ pt: "100%", position: "relative" }}>
                {images.length > 0 ? (
                  <ModalImage
                    className={classes.imgproduct}
                    small={images[0].url}
                    large={images[0].url}
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
              {/* <Tooltip title="Editar Propiedad" placement="top">
                <IconButton>
                  <EditIcon sx={{ color: "black" }} />
                </IconButton>
              </Tooltip> */}
              <Tooltip title="Detalle de Propiedad" placement="top">
                <IconButton onClick={() => handleClickOpenDetail(property.id)}>
                  <VisibilityIcon sx={{ color: "black" }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Ubicación de Propiedad" placement="top">
                <IconButton
                  onClick={() => handleClickOpenIframe(property.address)}
                >
                  <PlaceIcon sx={{ color: "black" }} />
                </IconButton>
              </Tooltip>
              {property.status === 2 && (
                <>
                  <Tooltip title="Agregar Multimedia" placement="top">
                    <IconButton
                      onClick={() => handleOpenMultimedia(property.id)}
                    >
                      <AddPhotoAlternateIcon sx={{ color: "black" }} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Agregar Servicios" placement="top">
                    <IconButton
                      onClick={() => handleClickOpenAddService(property.id)}
                    >
                      <SettingsIcon sx={{ color: "black" }} />
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
              {property.status === 3 && (
                <Tooltip title="Eliminar Propiedad" placement="top">
                  <IconButton onClick={() => BackPendingProperty(property.id)}>
                    <DeleteIcon sx={{ color: " black" }} />
                  </IconButton>
                </Tooltip>
              )}
              {property.status === 2 && (
                <Tooltip title="Publicar Propiedad" placement="top">
                  <IconButton onClick={() => PublishProperty(property.id)}>
                    <CheckCircleOutlineIcon sx={{ color: " green" }} />
                  </IconButton>
                </Tooltip>
              )}
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
        <DetailProperty
          modal={detailProperty}
          handleClose={handleCloseDetail}
          id={id_property}
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
    </>
  );
};

export default CardProperty;
