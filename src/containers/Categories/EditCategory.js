/**
 * `EditCategory` es un componente de formulario en un diálogo modal para editar una categoría existente.
 * Realiza una solicitud GET para obtener los detalles de la categoría con el ID proporcionado y pre-carga el campo de texto.
 * Utiliza `react-hook-form` para la gestión de formularios y validación de los campos.
 * 
 * Funciones:
 * - `onSubmit`: Llama a la función `ChangeCategory` del contexto para actualizar la categoría y luego cierra el modal.
 * - `reset`: Limpia el valor del campo del formulario después de un envío exitoso.
 * 
 * Utiliza un componente de diálogo con botones de cancelar y actualizar.
 */
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState, useContext, useEffect } from "react";
import MethodGet from "../../config/service";
import { useForm } from "react-hook-form";
import CategoryContext from "../../context/Categories/CategoryContext";
export default function EditCategory({ open, handleClose, id }) {
  const [category, saveCategory] = useState(null);
  const { ChangeCategory } = useContext(CategoryContext);
  useEffect(() => {
    let url = `/categories/${id}`;
    MethodGet(url)
      .then((res) => {
        saveCategory(res.data.data);
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
    ChangeCategory(data);
    handleClose();
    reset();
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Editar Categoria</DialogTitle>
        <form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
          onKeyDown={(e) => {
            if (e.code === "Enter" || e.code === "NumpadEnter")
              e.preventDefault();
          }}
        >
          <DialogContent>
            {category && (
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Nombre de la categoria"
                type="text"
                fullWidth
                name="name"
                variant="outlined"
                defaultValue={category.name}
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
