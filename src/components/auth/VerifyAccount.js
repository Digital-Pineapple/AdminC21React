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

const VerifyAccount = () => {
  const classes = useStyles();
  const { VerifyCode } = React.useContext(AuthContext);
  const token = localStorage.getItem("mi token");
  const reset = () => {
    setValue("code", "", { shouldDirty: true });
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  const onSubmit = (data, e) => {
    VerifyCode(data, token);
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
                Verificación de tu Cuenta
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
                Ingresa el código de verificación que se envió a tu correo
                electrónico para validar tu cuenta.
              </div>

              <Grid item xs={12} md={12} lg={12} xl={12}>
                <TextField
                  type="number"
                  fullWidth
                  name="code"
                  label="Codigo de Verificación"
                  error={errors.code ? true : false}
                  helperText={errors?.code?.message}
                  {...register("code", {
                    required: {
                      value: true,
                      message: "El codigo de verificación es requerido",
                    },
                    minLength: {
                      value: 4,
                      message: "Minimo 4 caracteres",
                    },
                    maxLength: {
                      value: 4,
                      message: "Maximo 4 caracteres",
                    },
                  })}
                />
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#ffb734",
                  color: "black",
                  fontWeight: "bold",
                  mt: 3,
                  mb: 2,
                  "&:hover": {
                    backgroundColor: "#ffb734",
                    color: "black",
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
            </Box>
          </div>
        </Grid>
      </div>
    </form>
  );
};

export default VerifyAccount;
