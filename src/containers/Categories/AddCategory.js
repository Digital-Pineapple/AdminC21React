import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Grid, TextField } from "@mui/material";
import CategoryContext from "../../context/Categories/CategoryContext";
import { useForm } from "react-hook-form";
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

export default function AddCategory({ modal, handleClose }) {
  const { AddCategory } = React.useContext(CategoryContext);
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
    AddCategory(data);
    handleClose();
    reset();
  };
  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={modal}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Agregar Categoria
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
                <TextField
                  type="text"
                  fullWidth
                  name="name"
                  placeholder="Casa"
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
                backgroundColor: "#FFB734",
                "&:hover": {
                  color: "black",
                  backgroundColor: "#FFB734 ",
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
