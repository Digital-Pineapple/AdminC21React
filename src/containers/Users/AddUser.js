import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import RolesSelect from "../SelectOptions/RolesSelect";
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

export default function NewUser({ modal, handleClose }) {
  const { NewUser } = React.useContext(AuthContext);
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
    setValue("name", "", { shouldDirty: true });
  };
  const onSubmit = (data, e) => {
    data.role_id = role;
    NewUser(data);
    handleClose();
    reset();
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
          Registrar nuevo usuario
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
                  label="Nombre Completo:"
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
                  type="email"
                  fullWidth
                  name="email"
                  label="Correo Electronico:"
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
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <RolesSelect detectarCambiosRole={detectarCambiosRole} />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField
                  type={passwordValues.showPassword ? "text" : "password"}
                  id="password"
                  fullWidth
                  name="password"
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
                  label="Contraseña:"
                  error={errors.password ? true : false}
                  helperText={errors?.password?.message}
                  {...register("password", {
                    required: {
                      value: true,
                      message: "La contraseña es requerida",
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
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField
                  type={
                    confirmPasswordValues.showPassword ? "text" : "password"
                  }
                  fullWidth
                  name="password_confirmation"
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
                  label="Confirma la Contraseña::"
                  error={errors.password_confirmation ? true : false}
                  helperText={errors?.password_confirmation?.message}
                  {...register("password_confirmation", {
                    required: {
                      value: true,
                      message: "Es requerido Confirmar la contraseña",
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
            <Button autoFocus variant="contained" type="submit" fullWidth>
              Guardar
            </Button>
          </DialogActions>
        </form>
      </BootstrapDialog>
    </div>
  );
}
