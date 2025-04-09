/**
 * Componente EditInfo:
 * Este componente muestra un formulario dentro de un cuadro de diálogo para editar la información del usuario (nombre, apellido, teléfono, email).
 * Utiliza `react-hook-form` para gestionar la validación de los campos y `AuthContext` para actualizar los datos del usuario.
 * Los campos están validados para asegurar que se ingresen correctamente y los errores se muestran al usuario.
 * También usa `react-i18next` para traducir los textos.
 * 
 * Props:
 * - **modal**: Controla si el cuadro de diálogo está visible.
 * - **handleClose**: Función para cerrar el cuadro de diálogo.
 * - **User**: Datos del usuario a editar.
 */
import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { useTranslation } from "react-i18next";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import AuthContext from "../../context/auth/AuthContext";
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

export default function EditInfo({ modal, handleClose, User }) {
  const { t } = useTranslation();
  const { EditInfo } = React.useContext(AuthContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  const reset = () => {
    setValue("name", "");
    setValue("last_name", "");
    setValue("phone_number", "");
    setValue("email", "");
  };

  const onSubmit = (data) => {
    EditInfo(data);
    handleClose();
    reset();
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
          {t("editarInformación")}
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
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField
                  type="text"
                  fullWidth
                  name="name"
                  defaultValue={User.name}
                  label={t("nombre")}
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
                      value: 255,
                      message: "Maximo 255 caracteres",
                    },
                  })}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField
                  type="text"
                  fullWidth
                  defaultValue={User.last_name}
                  name="last_name"
                  label={t("apellido")}
                  error={errors.last_name ? true : false}
                  helperText={errors?.last_name?.message}
                  {...register("last_name", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                    minLength: {
                      value: 4,
                      message: "Minimo 4 caracteres",
                    },
                    maxLength: {
                      value: 255,
                      message: "Maximo 255 caracteres",
                    },
                  })}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField
                  type="number"
                  fullWidth
                  name="phone_number"
                  defaultValue={User.phone_number}
                  label={t("telefono")}
                  error={errors.phone_number ? true : false}
                  helperText={errors?.phone_number?.message}
                  {...register("phone_number", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                    minLength: {
                      value: 10,
                      message: "Minimo 10 caracteres",
                    },
                    maxLength: {
                      value: 255,
                      message: "Maximo 255 caracteres",
                    },
                  })}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField
                  type="email"
                  fullWidth
                  defaultValue={User.email}
                  name="email"
                  label={t("email")}
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
                      value: 255,
                      message: "Maximo 255 caracteres",
                    },
                  })}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              variant="contained"
              type="submit"
              fullWidth
              sx={{
                color: "black",
                backgroundColor: "#ffb734",
                "&:hover": {
                  color: "black",
                  backgroundColor: "#ffb734",
                },
              }}
            >
              {t("guardar")}
            </Button>
          </DialogActions>
        </form>
      </BootstrapDialog>
    </div>
  );
}
