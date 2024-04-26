import { Button, Grid, Paper, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import AddCategory from "./AddCategory";
import CategoryContext from "../../context/Categories/CategoryContext";
import CardCategory from "../../components/Cards/CardCategory";
const Categories = () => {
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
            Categorías
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
          <Button
            variant="contained"
            fullWidth
            onClick={handleClickOpen}
            sx={{
              color: "#1F3473",
              backgroundColor: "#8ED5E1",
              "&:hover": {
                color: "#1F3473",
                backgroundColor: "#8ED5E1 ",
              },
            }}
          >
            Agregar
          </Button>
        </Grid>
        {categories.length > 0
          ? categories.map((category) => (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                <CardCategory category={category} />
              </Grid>
            ))
          : null}
      </Grid>
      <AddCategory modal={openModal} handleClose={handleClose} />
    </Layout>
  );
};

export default Categories;
