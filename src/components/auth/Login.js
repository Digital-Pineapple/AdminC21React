/**
 * Componente de Login
 *
 * Este componente permite a los usuarios iniciar sesión en la aplicación.
 * Utiliza React, Material-UI, Formik y Yup para manejar el formulario y su validación.
 *
 * Funcionalidades:
 * - Validación de email y contraseña.
 * - Mostrar/ocultar contraseña.
 * - Cambio de idioma (español / chino).
 * - Enlaces a registro y recuperación de contraseña.
 * - Uso del contexto de autenticación (AuthContext).
 */
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import * as Yup from "yup";
import { makeStyles, styled } from "@mui/styles";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useForm } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import AuthContext from "../../context/auth/AuthContext";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
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
    // backgroundImage: "url(https://source.unsplash.com/random/2560x1440)",
    background: "rgb(255,255,255)",
    background:
      "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(241,173,49,1) 100%)",
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
  },
});

const Login = () => {
  const { t } = useTranslation();

  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const classes = useStyles();
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const { iniciarSesion, autenticado } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (formData) => {
      iniciarSesion(formData);
    },
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  return (
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
                  color: "black",
                  marginBottom: "10px",
                  fontSize: "40px",
                  fontFamily: "monospace",
                  fontWeight: "bold",
                }}
              >
                {t("logo")}
              </div>
            </Box>
            <div
              style={{
                textAlign: "center",
                color: "black",
                marginBottom: "25px",
                fontFamily: "monospace",
                fontWeight: "bold",
              }}
            >
              {t("login")}
            </div>
            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              sx={{
                mt: 3,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} md={12} lg={12} xl={12}>
                  <TextField
                    fullWidth
                    id="email"
                    label={t("email")}
                    name="email"
                    autoComplete="off"
                    onChange={formik.handleChange}
                    error={formik.errors?.email ? true : false}
                  />
                </Grid>
                <Grid item xs={12} md={12} lg={12} xl={12}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel
                      htmlFor="password"
                      error={formik.errors?.password ? true : false}
                    >
                      {t("password")}
                    </InputLabel>
                    <OutlinedInput
                      error={formik.errors?.password ? true : false}
                      id="password"
                      name="password"
                      type={values.showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={(event) => {
                        setValues({ ...values, password: event.target.value });
                        formik.handleChange(event);
                      }}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      label={t("password")}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#FFB734",
                  color: "black",
                  fontWeight: "bold",
                  mt: 3,
                  mb: 2,
                  "&:hover": {
                    backgroundColor: "#FFB734 ",
                    color: "black",
                  },
                }}
              >
                <Typography
                  fontFamily="monospace"
                  fontWeight="bold"
                  variant="subtitle1"
                >
                  {t("Ingresar")}
                </Typography>
              </Button>
              <Link to="/registrarme">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: "black",
                    color: "#FFB734",
                    fontWeight: "bold",
                    mt: 0,
                    mb: 6,
                    "&:hover": {
                      backgroundColor: "black",
                      color: "#ED5E1",
                    },
                  }}
                >
                  <Typography
                    fontFamily="monospace"
                    fontWeight="bold"
                    variant="subtitle1"
                  >
                    {t("register")}
                  </Typography>
                </Button>
              </Link>
              <Link to="/Olvide-mi-Acceso" style={{ textDecoration: "none" }}>
                <h3
                  style={{
                    textAlign: "center",
                    color: "black",
                  }}
                >
                  {t("ForgotPassword")}
                </h3>
              </Link>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={1}
              >
                <Button onClick={() => changeLanguage("es")}>
                  <img
                    src="https://flagcdn.com/mx.svg"
                    alt="Español (México)"
                    width="30"
                  />
                </Button>
                <Button onClick={() => changeLanguage("zh")}>
                  <img src="https://flagcdn.com/cn.svg" alt="中文" width="30" />
                </Button>
              </Box>
            </Box>
          </Box>
        </div>
      </Grid>
    </div>
  );
};

export default Login;
function initialValues() {
  return {
    email: "",
    password: "",
  };
}

function validationSchema() {
  return {
    email: Yup.string().email(true).required("Correo requerido"),
    password: Yup.string().min(8).required("Contraseña requerida"),
  };
}
