import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useForm } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import AuthContext from "../../context/auth/AuthContext";
import RolesSelect from "../../containers/SelectOptions/RolesSelect";

const useStyles = makeStyles({
  textlogin: {
    fontSize: "15px",
    color: "black",
    fontWeight: "bold",
    fontStyle: "oblique",
    letterSpacing: "1px",
  },
  backgroundLogin: {
    height: "100%",
    minHeight: "100vh",
    boxSizing: "content-box",
    width: "100%",
    backgroundImage: "url(https://source.unsplash.com/random/2560x1440)",
    backgroundRepeat: "no-repeat",
    opacity: 1,
    overflowY: "none",
    overflowX: "none",
  },
  caja: {
    background: "rgba(255, 255, 255, 0.46)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    margin: "auto",
    width: "60%",
  },
});

const Register = () => {
  const classes = useStyles();
  const { AddUser } = React.useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  const reset = () => {
    setValue("name", "", { shouldDirty: true });
    setValue("last_name", "", { shouldDirty: true });
    setValue("phone_number", "", { shouldDirty: true });
    setValue("email", "", { shouldDirty: true });
    setValue("password", "", { shouldDirty: true });
    setValue("password_confirmation", "", { shouldDirty: true });
  };
  const [role, saveRole] = React.useState(null);
  const detectarCambiosRole = (value) => {
    saveRole(value);
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
    data.type_user = role;
    AddUser(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      onKeyDown={(e) => {
        if (e.code === "Enter" || e.code === "NumpadEnter") e.preventDefault();
      }}
    >
      <div className={classes.backgroundLogin}>
        <Grid container justifyContent="center">
          <div
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                boxShadow: 3,
                m: 5,
                padding: 4,
                position: "relative",
                marginTop: 5,
              }}
              className={classes.caja}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    color: "#1F3473",
                    marginBottom: "10px",
                    fontSize: "40px",
                    fontFamily: "monospace",
                    fontWeight: "bold",
                  }}
                >
                  Yo Comparto
                </div>
              </Box>
              <div
                style={{
                  textAlign: "center",
                  color: "#1F3473",
                  marginBottom: "25px",
                  fontFamily: "monospace",
                  fontWeight: "bold",
                }}
              >
                ¡Regístrate gratis!
              </div>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <TextField
                    type="text"
                    fullWidth
                    name="name"
                    label="Nombre(s):"
                    error={errors.name ? true : false}
                    helperText={errors?.name?.message}
                    {...register("name", {
                      required: {
                        value: true,
                        message: "El nombre es requerido",
                      },
                      maxLength: {
                        value: 255,
                        message: "Maximo 255 caracteres",
                      },
                    })}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <TextField
                    type="text"
                    fullWidth
                    name="last_name"
                    label="Apellido(s):"
                    error={errors.last_name ? true : false}
                    helperText={errors?.last_name?.message}
                    {...register("last_name", {
                      required: {
                        value: true,
                        message: "El apellido es requerido",
                      },
                      maxLength: {
                        value: 255,
                        message: "Maximo 255 caracteres",
                      },
                    })}
                  />
                </Grid>
                <Grid item xs={12} md={12} lg={12} xl={12}>
                  <RolesSelect detectarCambiosRole={detectarCambiosRole} />
                </Grid>
                <Grid item xs={12} md={12} lg={12} xl={12}>
                  <TextField
                    type="number"
                    fullWidth
                    name="phone_number"
                    label="Teléfono:"
                    error={errors.phone_number ? true : false}
                    helperText={errors?.phone_number?.message}
                    {...register("phone_number", {
                      required: {
                        value: true,
                        message: "El teléfono es requerido",
                      },
                      maxLength: {
                        value: 10,
                        message: "Maximo 10 caracteres",
                      },
                    })}
                  />
                </Grid>
                <Grid item xs={12} md={12} lg={12} xl={12}>
                  <TextField
                    type="email"
                    fullWidth
                    name="email"
                    label="Correo Electrónico:"
                    error={errors.email ? true : false}
                    helperText={errors?.email?.message}
                    {...register("email", {
                      required: {
                        value: true,
                        message: "El email es requerido",
                      },
                      maxLength: {
                        value: 255,
                        message: "Maximo 255 caracteres",
                      },
                    })}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
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
                        value: 255,
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
                    label="Confirma la Contraseña:"
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#8ED5E1",
                  color: "#1F3473",
                  fontWeight: "bold",
                  mt: 3,
                  mb: 2,
                  "&:hover": {
                    backgroundColor: "#8ED5E1 ",
                    color: "#1F3473",
                  },
                }}
              >
                Registrarme
              </Button>
              <Link to="iniciar-sesion">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: "#1F3473",
                    color: "#8ED5E1",
                    fontWeight: "bold",
                    mt: 0,
                    mb: 6,
                    "&:hover": {
                      backgroundColor: "#1F3473",
                      color: "#ED5E1",
                    },
                  }}
                >
                  Regresar
                </Button>
              </Link>
            </Box>
          </div>
        </Grid>
      </div>
    </form>
  );
};

export default Register;
