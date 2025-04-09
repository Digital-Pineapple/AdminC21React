/**
 * Componente EditReport:
 * Abre un diálogo para editar un reporte de visitas, permitiendo modificar diversos atributos como ubicación, espacios, estado, distribución, funcionalidad, precio, servicio, y comentarios.
 * Utiliza `react-hook-form` para la gestión de formularios y `ReportContext` para realizar la edición del reporte.
 * Las opciones de los diferentes campos son gestionadas mediante componentes `OptionsReport`, y se valida el formulario antes de enviar los cambios.
 * 
 * Dependencias:
 * - MUI para los componentes de interfaz.
 * - react-hook-form para la gestión de formularios.
 * - i18next para traducciones.
 */
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

export default function EditReport({
  modal,
  handleClose,
  id,
  report,
  bookingData,
}) {
  const { EditReportVisits } = useContext(ReportContext);

  const [selectedValueLocation, setSelectedValueLocation] = useState(report.location);
  const handleChangeLocation = (event) => {
    setSelectedValueLocation(parseInt(event.target.value, 10));
  };

  const [selectedValueEspacios, setSelectedValueEspacios] = useState(report.spaces);
  const handleChangeEspacios = (event) => {
    setSelectedValueEspacios(parseInt(event.target.value, 10));
  };

  const [selectedValueEstado, setSelectedValueEstado] = useState(report.conservation);
  const handleChangeEstado = (event) => {
    setSelectedValueEstado(parseInt(event.target.value, 10));
  };

  const [selectedValueDistribucion, setSelectedValueDistribucion] = useState(report.distribution);
  const handleChangeDistribucion = (event) => {
    setSelectedValueDistribucion(parseInt(event.target.value, 10));
  };

  const [selectedValueFuncionalidad, setSelectedValueFuncionalidad] = useState(report.functionality);
  const handleChangeFuncionalidad = (event) => {
    setSelectedValueFuncionalidad(parseInt(event.target.value, 10));
  };

  const [selectedValuePrecio, setSelectedValuePrecio] = useState(report.price);
  const handleChangePrecio = (event) => {
    setSelectedValuePrecio(parseInt(event.target.value, 10));
  };

  const [selectedValueReport, setSelectedValueReport] = useState(report.purchase_rent);
  const handleChangeReport = (event) => {
    setSelectedValueReport(parseInt(event.target.value, 10));
  };

  const [selectedValueServicio, setSelectedValueSericio] = useState(report.service);
  const handleChangeServicio = (event) => {
    setSelectedValueSericio(parseInt(event.target.value, 10));
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data, e) => {
    data.id = id;
    data.location = selectedValueLocation;
    data.spaces = selectedValueEspacios;
    data.conservation = selectedValueEstado;
    data.distribution = selectedValueDistribucion;
    data.functionality = selectedValueFuncionalidad;
    data.price = selectedValuePrecio;
    data.purchase_rent = selectedValueReport;
    data.service = selectedValueServicio;
    data.report_id = bookingData.id;
    EditReportVisits(data);
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
          Editar Reporte de Visitas
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
                  defaultValue={report.because}
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
                  defaultValue={report.comments}
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
                  defaultValue={report.observations}
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
                backgroundColor: "#ffb300",
                "&:hover": {
                  color: "black",
                  backgroundColor: "#ffb300",
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
