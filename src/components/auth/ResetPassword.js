import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useForm } from "react-hook-form";
import React, { useContext, useState } from "react";
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
    height: "100%",
    minHeight: "100vh",
    boxSizing: "content-box",
    width: "100%",
    // backgroundImage: "url(https://source.unsplash.com/random/2560x1440)",
    background: "rgb(197,224,228)",
    background:
      "radial-gradient(circle, rgba(197,224,228,1) 0%, rgba(88,129,255,1) 100%)",
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
  const { ResetPassword } = React.useContext(AuthContext);

  const reset = () => {
    setValue("email", "", { shouldDirty: true });
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  const onSubmit = (data, e) => {
    ResetPassword(data);
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

export default ResetPassword;
