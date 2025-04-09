/**
 * El componente `AttachFileMultimedia` permite a los usuarios seleccionar y cargar una imagen.
 * Utiliza `useDebounce` para retrasar la actualización del archivo seleccionado antes de realizar la acción de carga.
 * El componente muestra una imagen de vista previa y permite seleccionar una nueva imagen desde el sistema de archivos.
 * 
 * Propiedades:
 * - `open`: Controla la visibilidad del cuadro de diálogo.
 * - `handleClose`: Función para cerrar el cuadro de diálogo.
 * - `id`: ID de la propiedad asociada a la imagen.
 * 
 * Al seleccionar una imagen, esta se envía al contexto de autenticación para su procesamiento.
 */
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { useDebounce } from "use-debounce";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import AuthContext from "../../context/auth/AuthContext";
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
  const { t } = useTranslation();
  const classes = useStyles();
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

  const { ChangePhoto } = useContext(AuthContext);

  useEffect(() => {
    ExistImage();
  }, [debouncedFile]);
  const ExistImage = () => {
    if (image.image !== "") {
      handleClose();
      var data = {};
      data.property_id = id;
      data.image = image.image;
      ChangePhoto(data);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
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
