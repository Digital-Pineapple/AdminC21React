import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDebounce } from "use-debounce";
import { useState } from "react";
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
    // boxShadow: "5px 5px #289FED",
    objectFit: "cover",
  },
});
export default function AttachFileMultimedia({
  open,
  handleClose,
  id,
  //   GetEvidence,
  //   evidence,
}) {
  const classes = useStyles();
  const [image, saveImage] = useState({
    urlPhoto:
      "https://www.pacifictrellisfruit.com/wp-content/uploads/2016/04/default-placeholder-300x300.png",
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
      //console.log(data);
      AddMultimediaProperty(data);
      //   Swal.fire({
      //     title: "Agregar Evidencia",
      //     text: "¿Estas seguro de Agregar esta imagen como evidencia?",
      //     icon: "question",
      //     showCancelButton: true,
      //     confirmButtonColor: "#3085d6",
      //     cancelButtonColor: "#d33",
      //     confirmButtonText: "Si, Aceptar",
      //     cancelButtonText: "No, cancelar",
      //   }).then((result) => {
      //     if (result.value) {
      //       const formData = new FormData();
      //       formData.append("image", data.image);
      //       let url = `/orders/upload-evidences/${data.order_id}`;
      //       MethodPost(url, formData, { headerConfig })
      //         .then((res) => {
      //           GetEvidence(res.data.evidences);
      //           Swal.fire({
      //             title: "Agregado",
      //             text: res.data.message,
      //             showConfirmButton: false,
      //             timer: 1000,
      //             icon: "success",
      //           });
      //         })
      //         .catch((error) => {
      //           Swal.fire({
      //             title: "Error",
      //             text: error.response.data.message,
      //             icon: "error",
      //             showConfirmButton: false,
      //             timer: 1500,
      //           });
      //         });
      //       // AddFileEvidence(data);

      //       saveImage({
      //         urlPhoto:
      //           "https://cdn.pngsumo.com/index-of-areaedu-wp-content-uploads-2016-02-default-png-600_600.png",
      //         image: "",
      //       });
      //     } else {
      //       saveImage({
      //         urlPhoto:
      //           "https://cdn.pngsumo.com/index-of-areaedu-wp-content-uploads-2016-02-default-png-600_600.png",
      //         image: "",
      //       });
      //     }
      //   });
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Adjunta foto de la propiedad"}
      </DialogTitle>
      <DialogContent>
        {/* <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            paddingTop: 4,
            p: 3,
          }}
        > */}
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
              Selecciona imagen :
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
