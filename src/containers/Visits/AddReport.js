import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import OptionsReportLocation from "../SelectOptionsReport/OptionsReportLocation";
import OptionsReportEspacios from "../SelectOptionsReport/OptionsReportEspacios";
import OptionsReportEstado from "../SelectOptionsReport/OptionsReportEstado";
import OptionsReportDistribución from "../SelectOptionsReport/OptionsReportDistribución";
import OptionsReportFuncionalidad from "../SelectOptionsReport/OptionsReportFuncionalidad";
import OptionsReportPrecio from "../SelectOptionsReport/OptionsReportPrecio";
import OptionsReport from "../SelectOptionsReport/OptionsReport";
import OptionsReportServicio from "../SelectOptionsReport/OptionsReportServicio";
import ReportContext from "../../context/ReportVisits/ReportContext";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}
BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function AddReport({ modal, handleClose, bookingData }) {
  const { AddReportVisits } = useContext(ReportContext);

  const [selectedValueLocation, setSelectedValueLocation] = useState(1);
  const handleChangeLocation = (event) => {
    setSelectedValueLocation(parseInt(event.target.value, 10));
  };

  const [selectedValueEspacios, setSelectedValueEspacios] = React.useState(1);
  const handleChangeEspacios = (event) => {
    setSelectedValueEspacios(parseInt(event.target.value, 10));
  };

  const [selectedValueEstado, setSelectedValueEstado] = React.useState(1);
  const handleChangeEstado = (event) => {
    setSelectedValueEstado(parseInt(event.target.value, 10));
  };

  const [selectedValueDistribucion, setSelectedValueDistribucion] =
    React.useState(1);
  const handleChangeDistribucion = (event) => {
    setSelectedValueDistribucion(parseInt(event.target.value, 10));
  };

  const [selectedValueFuncionalidad, setSelectedValueFuncionalidad] =
    React.useState(1);
  const handleChangeFuncionalidad = (event) => {
    setSelectedValueFuncionalidad(parseInt(event.target.value, 10));
  };

  const [selectedValuePrecio, setSelectedValuePrecio] = React.useState(1);
  const handleChangePrecio = (event) => {
    setSelectedValuePrecio(parseInt(event.target.value, 10));
  };

  const [selectedValueReport, setSelectedValueReport] = React.useState(1);
  const handleChangeReport = (event) => {
    setSelectedValueReport(parseInt(event.target.value, 10));
  };

  const [selectedValueServicio, setSelectedValueSericio] = React.useState(1);
  const handleChangeServicio = (event) => {
    setSelectedValueSericio(parseInt(event.target.value, 10));
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data, e) => {
    data.location = selectedValueLocation;
    data.spaces = selectedValueEspacios;
    data.conservation = selectedValueEstado;
    data.distribution = selectedValueDistribucion;
    data.functionality = selectedValueFuncionalidad;
    data.price = selectedValuePrecio;
    data.purchase_rent = selectedValueReport;
    data.service = selectedValueServicio;
    data.report_id = bookingData;
    AddReportVisits(data);
    handleClose();
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={modal}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Agregar Reporte
        </BootstrapDialogTitle>
        <form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
          onKeyDown={(e) => {
            if (e.code === "Enter" || e.code === "NumpadEnter")
              e.preventDefault();
          }}
        >
          <DialogContent dividers>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <OptionsReportLocation
                  setSelectedValueLocation={setSelectedValueLocation}
                  selectedValueLocation={selectedValueLocation}
                  handleChangeLocation={handleChangeLocation}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <OptionsReportEspacios
                  setSelectedValueEspacios={setSelectedValueEspacios}
                  selectedValueEspacios={selectedValueEspacios}
                  handleChangeEspacios={handleChangeEspacios}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <OptionsReportEstado
                  setSelectedValueEstado={setSelectedValueEstado}
                  selectedValueEstado={selectedValueEstado}
                  handleChangeEstado={handleChangeEstado}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <OptionsReportDistribución
                  setSelectedValueDistribucion={setSelectedValueDistribucion}
                  selectedValueDistribucion={selectedValueDistribucion}
                  handleChangeDistribucion={handleChangeDistribucion}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <OptionsReportFuncionalidad
                  setSelectedValueFuncionalidad={setSelectedValueFuncionalidad}
                  selectedValueFuncionalidad={selectedValueFuncionalidad}
                  handleChangeFuncionalidad={handleChangeFuncionalidad}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <OptionsReportPrecio
                  setSelectedValuePrecio={setSelectedValuePrecio}
                  selectedValuePrecio={selectedValuePrecio}
                  handleChangePrecio={handleChangePrecio}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <OptionsReport
                  setSelectedValueReport={setSelectedValueReport}
                  selectedValueReport={selectedValueReport}
                  handleChangeReport={handleChangeReport}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField
                  type="text"
                  fullWidth
                  name="because"
                  label="¿Por qué?"
                  error={errors.because ? true : false}
                  helperText={errors?.because?.message}
                  {...register("because", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                    minLength: {
                      value: 1,
                      message: "Minimo 1 caracteres",
                    },
                    maxLength: {
                      value: 100,
                      message: "Maximo 100 caracteres",
                    },
                  })}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <OptionsReportServicio
                  setSelectedValueSericio={setSelectedValueSericio}
                  selectedValueServicio={selectedValueServicio}
                  handleChangeServicio={handleChangeServicio}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField
                  type="text"
                  fullWidth
                  name="comments"
                  label="Comentarios:"
                  error={errors.comments ? true : false}
                  helperText={errors?.comments?.message}
                  {...register("comments", {})}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField
                  type="text"
                  fullWidth
                  name="observations"
                  label="Observaciones"
                  error={errors.observations ? true : false}
                  helperText={errors?.observations?.message}
                  {...register("observations", {})}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              variant="contained"
              type="submit"
              fullWidth
              sx={{
                color: "black",
                backgroundColor: "#FFB300",
                "&:hover": {
                  color: "black",
                  backgroundColor: "#FFB300",
                },
              }}
            >
              Guardar
            </Button>
          </DialogActions>
        </form>
      </BootstrapDialog>
    </div>
  );
}
