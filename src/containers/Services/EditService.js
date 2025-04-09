/**
 * `EditService` es un componente que muestra un cuadro de diálogo para editar un servicio existente.
 * 
 * El componente realiza una solicitud GET para obtener los detalles del servicio usando el `id` proporcionado, y luego muestra los datos actuales del servicio en un formulario de edición.
 * 
 * El formulario contiene un campo de texto donde el usuario puede modificar el nombre del servicio. El formulario está validado para asegurar que el nombre no esté vacío, tenga una longitud mínima de 4 caracteres y una longitud máxima de 255 caracteres.
 * 
 * Al enviar el formulario, se actualizan los datos del servicio mediante el contexto `ServicesContext` y luego se cierra el cuadro de diálogo.
 * 
 * Propiedades:
 * - `open`: Indica si el cuadro de diálogo debe estar abierto o cerrado.
 * - `handleClose`: Función que cierra el cuadro de diálogo.
 * - `id`: El identificador del servicio que se va a editar.
 * 
 * Dependencias:
 * - `ServicesContext`: Contexto que maneja la actualización de servicios.
 * - `react-hook-form`: Se utiliza para la gestión y validación del formulario.
 */
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect } from "react";
import { useState } from "react";
import MethodGet from "../../config/service";
import { useForm } from "react-hook-form";
import ServicesContext from "../../context/Services/ServicesContext";
import { useContext } from "react";
export default function EditService({ open, handleClose, id }) {
  const { ChangeService } = useContext(ServicesContext);
  const [service, saveService] = useState(null);
  useEffect(() => {
    let url = `/services/${id}`;
    MethodGet(url)
      .then((res) => {
        saveService(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();
  const reset = () => {
    setValue("name", "", { shouldDirty: true });
  };
  const onSubmit = (data, e) => {
    data.id = id;
    ChangeService(data);
    handleClose();
    reset();
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Editar servicio</DialogTitle>
        <form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
          onKeyDown={(e) => {
            if (e.code === "Enter" || e.code === "NumpadEnter")
              e.preventDefault();
          }}
        >
          <DialogContent>
            {service && (
              <TextField
                type="text"
                fullWidth
                name="name"
                variant="outlined"
                placeholder="Nombre del servicio"
                defaultValue={service.name}
                error={errors.name ? true : false}
                helperText={errors?.name?.message}
                {...register("name", {
                  required: {
                    value: true,
                    message: "Este campo es requerido",
                  },
                  minLength: {
                    value: 4,
                    message: "Minimo 4 caracteres",
                  },
                  maxLength: {
                    value: 255,
                    message: "Maximo 255 caracteres",
                  },
                })}
              />
            )}
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
              Actualizar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
