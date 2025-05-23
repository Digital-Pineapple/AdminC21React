/**
 * El componente `EditVisit` muestra un modal para editar los detalles de una visita. 
 * Al cargar, obtiene los datos de la visita a través de una solicitud GET (`MethodGet`) usando el `id` de la visita.
 * 
 * Funcionalidad:
 * 1. Recupera los datos de la visita mediante la API y los guarda en el estado `visitsClien`.
 * 2. Usa `react-hook-form` para gestionar el formulario y validar los campos (nombre, apellido, teléfono, email, mensaje).
 * 3. Al enviar el formulario, los datos modificados se envían a través del contexto `VisitContext` utilizando la función `EditVisit`.
 * 4. El modal se controla con el prop `modal`, mostrando u ocultando el formulario de edición.
 */
import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import MethodGet from "../../config/service";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import VisitContext from "../../context/Visits/VisitContext";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function EditVisit({ modal, handleClose, id }) {
  const [visitsClien, saveVisitsClien] = useState(null);

  const { bookingData } = visitsClien || {};

  const { EditVisit } = React.useContext(VisitContext);
  useEffect(() => {
    let url = `/showVisit/${id}`;
    MethodGet(url)
      .then((res) => {
        saveVisitsClien(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    data.status = bookingData.status;
    data.id = bookingData.id;
    data.property_id = bookingData.property_id;
    data.user_id = bookingData.user_id;
    EditVisit(data);
    handleClose();
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={modal}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Editar la Información de mi visita
        </BootstrapDialogTitle>
        <form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
          onKeyDown={(e) => {
            if (e.code === "Enter" || e.code === "NumpadEnter")
              e.preventDefault();
          }}
        >
          <DialogContent dividers>
            {bookingData !== undefined && (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <TextField
                    type="text"
                    defaultValue={bookingData.name}
                    fullWidth
                    name="name"
                    label="Mi Nombre"
                    error={errors.name ? true : false}
                    helperText={errors?.name?.message}
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                      minLength: {
                        value: 4,
                        message: "Minimo 4 caracteres",
                      },
                      maxLength: {
                        value: 50,
                        message: "Maximo 50 caracteres",
                      },
                    })}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <TextField
                    type="text"
                    defaultValue={bookingData.last_name}
                    fullWidth
                    name="last_name"
                    label="Mi Apellido"
                    error={errors.last_name ? true : false}
                    helperText={errors?.last_name?.message}
                    {...register("last_name", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                      minLength: {
                        value: 1,
                        message: "Minimo 1 caracteres",
                      },
                      maxLength: {
                        value: 50,
                        message: "Maximo 50 caracteres",
                      },
                    })}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <TextField
                    type="number"
                    fullWidth
                    defaultValue={bookingData.phone}
                    name="phone"
                    label="Mi Telefono:"
                    error={errors.phone ? true : false}
                    helperText={errors?.phone?.message}
                    {...register("phone", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                      minLength: {
                        value: 10,
                        message: "Minimo 10 caracteres",
                      },
                      maxLength: {
                        value: 15,
                        message: "Maximo 15 caracteres",
                      },
                    })}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <TextField
                    type="email"
                    fullWidth
                    name="email"
                    defaultValue={bookingData.email}
                    label="Mi Correo Electrónico:"
                    error={errors.email ? true : false}
                    helperText={errors?.email?.message}
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                      minLength: {
                        value: 4,
                        message: "Minimo 4 caracteres",
                      },
                      maxLength: {
                        value: 100,
                        message: "Maximo 100 caracteres",
                      },
                    })}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <TextField
                    type="text"
                    defaultValue={bookingData.message}
                    fullWidth
                    multiline
                    rows={6}
                    name="message"
                    label="Mi Mensaje:"
                    error={errors.message ? true : false}
                    helperText={errors?.message?.message}
                    {...register("message", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                      minLength: {
                        value: 4,
                        message: "Minimo 4 caracteres",
                      },
                      maxLength: {
                        value: 200,
                        message: "Maximo 200 caracteres",
                      },
                    })}
                  />
                </Grid>
              </Grid>
            )}
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              variant="contained"
              type="submit"
              fullWidth
              sx={{
                color: "black",
                backgroundColor: "#ffb300",
                "&:hover": {
                  color: "black",
                  backgroundColor: "#ffb300",
                },
              }}
            >
              Guardar
            </Button>
          </DialogActions>
        </form>
      </BootstrapDialog>
    </div>
  );
}
