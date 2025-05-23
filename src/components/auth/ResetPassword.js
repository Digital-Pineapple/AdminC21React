/**
 * Componente ResetPassword:
 * Este componente permite a los usuarios restablecer su contraseña mediante un formulario que solicita su correo electrónico.
 * Utiliza `react-hook-form` para la validación del formulario y se conecta con el `AuthContext` para realizar el restablecimiento.
 * Los errores de validación se muestran en tiempo real y el formulario es reseteado después de un intento exitoso.
 */
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useForm } from "react-hook-form";
import React, { useContext, useState } from "react";
import AuthContext from "../../context/auth/AuthContext";
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

const ResetPassword = () => {
  const { t } = useTranslation();
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
                {t("recuperar")}
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
                {t("recuperarTuCuenta")}
              </div>

              <Grid item xs={12} md={12} lg={12} xl={12}>
                <TextField
                  type="email"
                  fullWidth
                  name="email"
                  label={t("email")}
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
                  {t("enviar")}
                </Typography>
              </Button>
              <Link to="iniciar-sesion">
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
                  {t("regresar")}
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
