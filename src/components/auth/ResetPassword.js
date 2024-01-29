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
const useStyles = makeStyles({
  textlogin: {
    fontSize: "15px",
    color: "black",
    fontWeight: "bold",
    fontStyle: "oblique",
    letterSpacing: "1px",
  },
  backgroundLogin: {
    height: "100vh",
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
  },
});

const ResetPassword = () => {
  const classes = useStyles();

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
                Yo Comparto
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
              Recupera tu cuenta
            </div>
            <div
              style={{
                textAlign: "center",
                color: "black",
                marginBottom: "25px",
                fontFamily: "monospace",
                fontWeight: "bold",
              }}
            >
              Ingrese su correo electrónico para enviar el código de
              verificación y recuperar su cuenta.
            </div>

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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#AE445A",
                color: "white",
                fontWeight: "bold",
                mt: 3,
                mb: 2,
                "&:hover": {
                  backgroundColor: "#AE445A",
                },
              }}
            >
              <Typography
                fontFamily="monospace"
                fontWeight="bold"
                variant="subtitle1"
              >
                Enviar
              </Typography>
            </Button>
            <Link to="iniciar-sesion">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#451952",
                  color: "white",
                  fontWeight: "bold",
                  mt: 0,
                  mb: 1,
                  "&:hover": {
                    backgroundColor: "#451952",
                  },
                }}
              >
                Regresar recordé mi acceso
              </Button>
            </Link>
          </Box>
        </div>
      </Grid>
    </div>
  );
};

export default ResetPassword;
