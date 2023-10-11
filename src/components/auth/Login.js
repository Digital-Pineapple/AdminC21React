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
import { makeStyles, styled } from "@mui/styles";
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
    background: "rgba(20, 20, 20, 0.20)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
    border: "1px solid rgba(20, 20, 20, 0.3)",
  },
  
});

const Login = () => {
  const classes = useStyles();
  //Contraseña
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
              marginTop: 10,
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
                Inicia sesión
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
                    label="Correo Electronico:"
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
                      Contraseña:
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
                      label="Contraseña:"
                    />
                  </FormControl>
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
                Ingresar
              </Button>
              <Link to="/registrarme">
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
                  Registrarme
                </Button>
              </Link>
              {/* <Link to="/Olvide-mi-Acceso">
                <div style={{ textAlign: "center", color: "white" }}>
                  ¿Has olvidado la contraseña?
                </div>
              </Link> */}
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
