/**
 * El componente `AttachFileMultimedia` permite al usuario adjuntar una imagen para una propiedad.
 * 
 * Funcionalidad:
 * 1. Abre un cuadro de diálogo que permite seleccionar y cargar una imagen.
 * 2. La imagen seleccionada se muestra en una vista previa antes de enviarla.
 * 3. Usa un `useDebounce` para gestionar el cambio de la imagen y evitar solicitudes innecesarias.
 * 4. Al seleccionar la imagen, se guarda y se envía a través del contexto `PropertiesContext` usando el método `AddMultimediaProperty`.
 * 5. Si se selecciona una imagen, se cierra el diálogo automáticamente y se sube la imagen.
 */
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDebounce } from "use-debounce";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import PropertiesContext from "../../context/Properties/PropertiesContext";
import { useContext, useEffect } from "react";
import { Box, Grid, IconButton, InputLabel, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
const useStyles = makeStyles({
  input: {
    display: "none",
  },
  logoimagen: {
    height: "400px",
    width: "400px",
    objectFit: "cover",
  },
});
export default function AttachFileMultimedia({ open, handleClose, id }) {
  const classes = useStyles();
  const { t } = useTranslation();
  const [image, saveImage] = useState({
    urlPhoto:
      "https://yocomparto.com.mx/wp-content/uploads/2024/02/placeholder.png",
    image: "",
  });
  const [debouncedFile] = useDebounce(image.image, 500);
  const handleChangeImage = (e) => {
    saveImage({
      ...image,
      urlPhoto: URL.createObjectURL(e.target.files[0]),
      image: e.target.files[0],
    });
  };

  const { AddMultimediaProperty } = useContext(PropertiesContext);

  useEffect(() => {
    ExistImage();
  }, [debouncedFile]);
  const ExistImage = () => {
    if (image.image !== "") {
      handleClose();
      var data = {};
      data.property_id = id;
      data.image = image.image;
      AddMultimediaProperty(data);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{t("AdjuntaFoto")}</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div>
                <img
                  src={image.urlPhoto}
                  className={classes.logoimagen}
                  alt="agrega evidencia"
                />
              </div>
            </Box>
            <input
              className={classes.input}
              id="icon-button-file-first"
              type="file"
              name="image"
              accept="image/png, image/jpg, image/jpeg, image/webp"
              onChange={handleChangeImage}
            />
            <InputLabel sx={{ textAlign: "center" }}>
              {t("seleccionaImagen")}
              <label htmlFor="icon-button-file-first">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <Tooltip
                    title="seleccionar imagen"
                    aria-label="seleccionar imagen"
                    placement="top"
                  >
                    <PhotoCameraIcon />
                  </Tooltip>
                </IconButton>
              </label>
            </InputLabel>
          </Grid>
        </Grid>
        {/* </Box> */}
      </DialogContent>
    </Dialog>
  );
}
