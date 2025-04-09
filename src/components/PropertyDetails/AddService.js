/**
 * El componente `AddService` es un formulario de diálogo que permite agregar un nuevo 
 * servicio a una propiedad específica. El formulario incluye un campo de texto para 
 * ingresar el nombre del servicio y se valida utilizando `react-hook-form`. 
 * 
 * Cuando el formulario se envía correctamente, se realiza una solicitud `POST` para 
 * agregar el servicio mediante la función `MethodPost`. Si la solicitud es exitosa, 
 * se muestra una alerta de éxito usando `Swal.fire`. En caso de error, se registra el 
 * error en la consola. El formulario también está traducido utilizando `react-i18next` 
 * para los textos. El componente se cierra después de que se guarda el servicio y se 
 * reinicia el campo de texto para permitir la adición de otro servicio si es necesario.
 */
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm } from "react-hook-form";
import { MethodPost } from "../../config/service";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

export default function AddService({ modal, handleClose, id }) {
  const { t } = useTranslation();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();
  const addServiceProperty = (data) => {
    let url = `/AditionalService`;
    MethodPost(url, data)
      .then((res) => {
        Swal.fire({
          title: t("Listo"),
          text: t("servicioAgregado"),
          icon: "success",
          showConfirmButton: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const reset = () => {
    setValue("name", "", { shouldDirty: true });
  };
  const onSubmit = (data, e) => {
    data.property_id = id;
    addServiceProperty(data);
    handleClose();
    reset();
  };
  return (
    <div>
      <Dialog open={modal} onClose={handleClose}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          onKeyDown={(e) => {
            if (e.code === "Enter" || e.code === "NumpadEnter")
              e.preventDefault();
          }}
          autoComplete="off"
        >
          <DialogTitle>{t("agregarServicio")}</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="name"
              id="name"
              label={t("nombreServicio")}
              type="text"
              fullWidth
              variant="outlined"
              error={errors.name ? true : false}
              helperText={errors?.name?.message}
              {...register("name", {
                required: {
                  value: true,
                  message: "El nombre del servicio es requerido",
                },
              })}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              sx={{
                backgroundColor: "red",
                color: "white",
                "&:hover": { backgroundColor: "red", color: "white" },
              }}
            >
              {t("cancelar")}
            </Button>
            <Button
              type="submit"
              sx={{
                backgroundColor: "#1565c0",
                color: "white",
                "&:hover": { backgroundColor: "#1565c0", color: "white" },
              }}
            >
              {t("guardar")}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
