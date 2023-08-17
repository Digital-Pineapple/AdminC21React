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
import React from "react";
import { makeStyles } from "@mui/styles";
import image from "../../assets/img/bg.jpg";
import { useForm } from "react-hook-form";
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
    height: "100%",
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
  },
});

const Register = () => {
  const classes = useStyles();

  const formik = useFormik({
    // ...configuración de formik...
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
              marginTop: 15,
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
                    id="name"
                    label="Nombre"
                    name="name"
                    autoComplete="off"
                    onChange={formik.handleChange}
                    error={formik.errors?.name ? true : false}
                  />
                </Grid>
                <Grid item xs={12} md={12} lg={12} xl={12}>
                  <TextField
                    fullWidth
                    id="email"
                    label="Correo Electronico"
                    name="email"
                    autoComplete="off"
                    onChange={formik.handleChange}
                    error={formik.errors?.email ? true : false}
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </div>
      </Grid>
    </div>
  );
};

export default Register;