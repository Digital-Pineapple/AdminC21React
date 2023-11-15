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
import { makeStyles } from "@mui/styles";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import image from "../../assets/img/bg.jpg";
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
    background: "rgba(20, 20, 20, 0.30)",
    borderRadius: "20px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
    border: "1px solid rgba(20, 20, 20, 0.3)",
    width: "50vh",
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
    setValue("lastname", "", { shouldDirty: true });
    setValue("phone", "", { shouldDirty: true });
    setValue("email", "", { shouldDirty: true });
    setValue("password", "", { shouldDirty: true });
    setValue("password_confirmation", "", { shouldDirty: true });
  };
  const onSubmit = (data, e) => {
    data.role_id = role;
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

  const [role, saveRole] = React.useState(null);
  const detectarCambiosRole = (value) => {
    saveRole(value);
    console.log(value);
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
                padding: 5,
                position: "relative",
                marginTop: 0,
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
                {/* <img
                  src={require("../../assets/img/logo.png")}
                  alt=" "
                  className={classes.logo}
                /> */}
                <div
                  style={{
                    textAlign: "center",
                    color: "white",
                    marginBottom: "10px",
                    fontSize: "60px",
                  }}
                >
                  MiBien
                </div>
              </Box>
              <div
                style={{
                  textAlign: "center",
                  color: "white",
                  marginBottom: "30px",
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
                <Grid item xs={12} md={12} lg={12} xl={12}>
                  <TextField
                    type="text"
                    fullWidth
                    name="lastname"
                    label="Apellido(s):"
                    error={errors.lastname ? true : false}
                    helperText={errors?.lastname?.message}
                    {...register("lastname", {
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
                    name="phone"
                    label="Teléfono:"
                    error={errors.phone ? true : false}
                    helperText={errors?.phone?.message}
                    {...register("phone", {
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

                <Grid item xs={12} md={12} lg={12} xl={12}>
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
                  backgroundColor: "orange",
                  color: "white",
                  fontWeight: "bold",
                  mt: 3,
                  mb: 2,
                  "&:hover": {
                    backgroundColor: "orange",
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
                    backgroundColor: "orange",
                    color: "white",
                    fontWeight: "bold",
                    mt: 0,
                    mb: 6,
                    "&:hover": {
                      backgroundColor: "orange",
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
