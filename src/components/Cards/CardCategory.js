/**
 * Componente CardCategory:
 * Este componente representa una tarjeta de categoría que muestra el nombre de la categoría junto con opciones para editar o eliminarla.
 * Utiliza Material-UI para el diseño de la tarjeta, que incluye un fondo, título y botones de acción con iconos.
 * Al hacer clic en el botón de editar, se abre un formulario de edición para la categoría seleccionada.
 * Al hacer clic en el botón de eliminar, la categoría seleccionada se elimina mediante la función `DeleteCategory` del contexto `CategoryContext`.
 * El estado de edición se maneja a través de `useState` para controlar la visualización del componente `EditCategory`.
 */
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import bg from "../../assets/img/category.png";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import CategoryContext from "../../context/Categories/CategoryContext";
import EditCategory from "../../containers/Categories/EditCategory";
import { useState } from "react";
export default function CardCategory({ category }) {
  const { DeleteCategory } = React.useContext(CategoryContext);
  const [editCategory, openEditCategory] = useState(false);
  const [idCategory, saveIdCategory] = useState(null);
  const handleOpenEdit = (id) => {
    openEditCategory(true);
    saveIdCategory(id);
  };
  const handleCloseEditCategory = () => {
    openEditCategory(false);
    saveIdCategory(null);
  };
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140, opacity: "0.2" }}
          image={bg}
          title="green iguana"
        />
        <CardContent sx={{ marginTop: -15 }}>
          <Typography
            fontWeight="bold"
            fontFamily="inherit"
            variant="h5"
            sx={{
              color: "black",
            }}
          >
            {category.name}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton size="small" onClick={() => handleOpenEdit(category.id)}>
            <Tooltip title="Editar Categoria" placement="right">
              <EditIcon sx={{ color: "#0277bd" }} />
            </Tooltip>
          </IconButton>
          <IconButton size="small" onClick={() => DeleteCategory(category.id)}>
            <Tooltip title="Eliminar Categoria" placement="right">
              <DeleteIcon sx={{ color: "red" }} />
            </Tooltip>
          </IconButton>
        </CardActions>
      </Card>
      {idCategory !== null && (
        <EditCategory
          open={editCategory}
          handleClose={handleCloseEditCategory}
          id={idCategory}
        />
      )}
    </>
  );
}
