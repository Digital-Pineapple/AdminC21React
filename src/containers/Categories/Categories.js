/**
 * `Categories` es el componente que muestra la lista de categorías disponibles.
 * Incluye un botón para agregar nuevas categorías y muestra tarjetas de cada una de las categorías existentes.
 * Si no hay categorías, se muestra un componente de "sin datos".
 * 
 * Funciones:
 * - `handleClickOpen`: abre el modal para agregar una nueva categoría.
 * - `handleClose`: cierra el modal.
 * 
 * Utiliza el contexto `CategoryContext` para obtener la lista de categorías y el componente `AddCategory` para agregar nuevas categorías.
 */
import { Button, Grid, Paper, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import AddCategory from "./AddCategory";
import CategoryContext from "../../context/Categories/CategoryContext";
import CardCategory from "../../components/Cards/CardCategory";
import NoDataComponent from "../../components/loading/NoDataComponent";
import { useTranslation } from "react-i18next";

const Categories = () => {
  const { t } = useTranslation();

  const [openModal, setOpenModal] = React.useState(false);

  const handleClickOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };
  const { categories, GetCategories } = useContext(CategoryContext);
  useEffect(() => {
    GetCategories();
  }, []);

  return (
    <Layout>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
          <Typography
            fontWeight="bold"
            fontFamily="monospace"
            variant="h5"
            sx={{ color: "black" }}
          >
            {t("categorias")}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
          <Button
            variant="contained"
            fullWidth
            onClick={handleClickOpen}
            sx={{
              color: "black",
              backgroundColor: "#FFB734",
              "&:hover": {
                color: "black",
                backgroundColor: "#FFB734 ",
              },
            }}
          >
            {t("agregar")}
          </Button>
        </Grid>
        {categories.length > 0 ? (
          categories.map((category) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CardCategory category={category} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <NoDataComponent />
          </Grid>
        )}
      </Grid>
      <AddCategory modal={openModal} handleClose={handleClose} />
    </Layout>
  );
};

export default Categories;
