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

export default function AddService({ modal, handleClose, id }) {
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
          title: "Agregado",
          text: "sercivicio registrado",
          icon: "success",
          timer: 1000,
          showConfirmButton: false,
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
          <DialogTitle>Agregar Servicio de la casa</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="name"
              id="name"
              label="Nombre del servicio"
              type="text"
              fullWidth
              placeholder="internet"
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
              Cancelar
            </Button>
            <Button
              type="submit"
              sx={{
                backgroundColor: "#1565c0",
                color: "white",
                "&:hover": { backgroundColor: "#1565c0", color: "white" },
              }}
            >
              Guardar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
