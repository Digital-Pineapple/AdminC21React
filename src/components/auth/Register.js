import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import * as Yup from "yup";
import { makeStyles } from "@mui/styles";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import image from "../../assets/img/bg.jpg";
import { useForm } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import AuthContext from "../../context/auth/AuthContext";
import { useFormik } from "formik";

const useStyles = makeStyles({
  textlogin: {
    fontSize: "15px",
    color: "black",
    fontWeight: "bold",
    fontStyle: "oblique",
    letterSpacing: "1px",
  },
  logo: {
    margin: "auto",
  },
  backgroundLogin: {
    height: "150vh",
    width: "100%",
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    opacity: 1,
    overflowY: "none",
  },
  caja: {
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(1.5px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    width: "500px",
    margin: "auto",
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
    setValue("email", "", { shouldDirty: true });
    setValue("password", "", { shouldDirty: true });
    setValue("password_confirmation", "", { shouldDirty: true });
  };
  const onSubmit = (data, e) => {
    AddUser(data);
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
                marginTop: 13,
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
                <img
                  src={require("../../assets/img/logo.png")}
                  alt=" "
                  className={classes.logo}
                />
              </Box>
              <div
                style={{
                  textAlign: "center",
                  color: "white",
                  marginBottom: "20px",
                }}
              >
                ¡Regístrate gratis!
              </div>

              <Grid container spacing={2}>
                <Grid item xs={12} md={12} lg={12} xl={12}>
                  <TextField
                    type="text"
                    fullWidth
                    name="name"
                    label="Nombre:"
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
                <Grid item xs={12} md={12} lg={12} xl={12}>
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
                        message: "El email es requerido",
                      },
                      maxLength: {
                        value: 255,
                        message: "Maximo 255 caracteres",
                      },
                    })}
                  />
                </Grid>
                <Grid item xs={12} md={12} lg={12} xl={12}>
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
                      )
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
                        message: "Maximo 255 caracteres",
                      },
                    })}
                  />
                </Grid>

                <Grid item xs={12} md={12} lg={12} xl={12}>
                  <TextField
                    type={confirmPasswordValues.showPassword ? "text" : "password"}
                    fullWidth
                    name="password_confirmation"
                    InputProps={{ 
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => handleClickShowPassword("password_confirmation")}
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
                      )
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
                        value: 255,
                        message: "Maximo 255 caracteres",
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
                  backgroundColor: "#D7A86E",
                  color: "white",
                  fontWeight: "bold",
                  mt: 3,
                  mb: 2,
                  "&:hover": {
                    backgroundColor: "#D7A86E",
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
                    backgroundColor: "#D7A86E",
                    color: "white",
                    fontWeight: "bold",
                    mt: 0,
                    mb: 6,
                    "&:hover": {
                      backgroundColor: "#D7A86E",
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