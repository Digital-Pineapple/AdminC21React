/**
 * `EditUser` es un componente de diálogo para editar la información de un usuario, incluyendo nombre, apellido, teléfono, email y contraseñas.
 * Utiliza `react-hook-form` para manejar los formularios y `Material-UI` para los componentes UI.
 * Permite mostrar/ocultar contraseñas y valida los campos con mensajes de error.
 * 
 * Propiedades:
 * - `open`: determina si el diálogo está abierto o cerrado.
 * - `handleClose`: función para cerrar el diálogo.
 * - `id`: ID del usuario a editar.
 * - `User`: datos del usuario a editar.
 */
import * as React from "react";
import Button from "@mui/material/Button";
import { Grid, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import UsersContext from "../../context/Users/UsersContext";
import { useTranslation } from "react-i18next";
export default function EditUser({ open, handleClose, id, User }) {
  const { t } = useTranslation();
  const { ChangeUserInm } = useContext(UsersContext);

  const [role, saveRole] = React.useState(null);
  const detectarCambiosRole = (value) => {
    saveRole(value);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  const reset = () => {
    saveRole(null);
    setValue("name", "", { shouldDirty: true });
    setValue("last_name", "", { shouldDirty: true });
    setValue("phone_number", "", { shouldDirty: true });
    setValue("email", "", { shouldDirty: true });
  };

  const [passwordValues, setPasswordValues] = useState({
    password: "",
    showPassword: false,
  });

  const [confirmPasswordValues, setConfirmPasswordValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = (field) => {
    if (field === "password") {
      setPasswordValues({
        ...passwordValues,
        showPassword: !passwordValues.showPassword,
      });
    } else if (field === "password_confirmation") {
      setConfirmPasswordValues({
        ...confirmPasswordValues,
        showPassword: !confirmPasswordValues.showPassword,
      });
    }
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = (data, e) => {
    data.id = id;
    data.type_user = role;
    ChangeUserInm(data);
    handleClose();
    reset();
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{t("editarAsesor")}</DialogTitle>
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
                  label={t("nombre")}
                  defaultValue={User.name}
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
                  name="last_name"
                  defaultValue={User.last_name}
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
                  defaultValue={User.phone_number}
                  name="phone_number"
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
                      value: 10,
                      message: "Maximo 10 caracteres",
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
                  })}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  type={passwordValues.showPassword ? "text" : "password"}
                  fullWidth
                  name="password"
                  label={t("password")}
                  error={errors.password ? true : false}
                  helperText={errors?.password?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => handleClickShowPassword("password")}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {passwordValues.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  {...register("password", {
                    required: {
                      value: true,
                      message: "La nueva contraseña es requerida",
                    },
                    minLength: {
                      value: 8,
                      message: "Minimo 8 caracteres",
                    },
                    maxLength: {
                      value: 16,
                      message: "Maximo 50 caracteres",
                    },
                  })}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  type={
                    confirmPasswordValues.showPassword ? "text" : "password"
                  }
                  fullWidth
                  name="password_confirmation"
                  label={t("confirmarContraseña")}
                  error={errors.password_confirmation ? true : false}
                  helperText={errors?.password_confirmation?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() =>
                            handleClickShowPassword("password_confirmation")
                          }
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {confirmPasswordValues.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  {...register("password_confirmation", {
                    required: {
                      value: true,
                      message: "Es requerido confirmar la contraseña nueva",
                    },
                    minLength: {
                      value: 8,
                      message: "Minimo 8 caracteres",
                    },
                    maxLength: {
                      value: 50,
                      message: "Maximo 50 caracteres",
                    },
                  })}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              sx={{
                backgroundColor: "red",
                color: "white",
                "&:hover": { backgroundColor: "red", color: "white" },
              }}
            >
              {t("cancelar")}
            </Button>
            <Button
              type="submit"
              sx={{
                backgroundColor: "#1565c0",
                color: "white",
                "&:hover": { backgroundColor: "#1565c0", color: "white" },
              }}
            >
              {t("guardar")}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
