import * as React from "react";
import { Card, Grid, Typography, Button, Paper, Box } from "@mui/material";
import MethodGet from "../../config/service";
import ModalImage from "react-modal-image-responsive";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import ImageList from "@mui/material/ImageList";
import { format } from "date-fns";
import { es } from "date-fns/locale/es";
import ImageListItem from "@mui/material/ImageListItem";
import AddReport from "./AddReport";

export default function DetailVisits(props) {
  const { id } = props.match.params;
  const [property, saveProperty] = useState([]);
  const { images, bookings, rules, owner, user_inm } = property;
  console.log(property, "la prop");

  if (rules !== undefined) {
    let detail = rules.map((rule) => rule.detail);
    var final_price = detail.map((det) => det.final_price);
    var name = rules.map((rul) => rul.name);
  }

  const [openModal, setOpenModal] = React.useState(false);
  const handleClickOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    let url = `/showVisit/${id}`;
    MethodGet(url)
      .then((res) => {
        saveProperty(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

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
            Reporte de Visitas
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

        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          {images !== undefined && images.length > 0 ? (
            <ImageList
              sx={{ width: "auto", height: 650 }}
              cols={3}
              rowHeight={164}
            >
              {images.map((item) => (
                <ImageListItem key={item.url}>
                  <img
                    srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          ) : (
            <div>No images available</div>
          )}
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Card sx={{ padding: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography
                  fontFamily="monospace"
                  fontWeight="bold"
                  variant="h5"
                  sx={{ color: "#1F3473" }}
                >
                  Infromación de la Propiedad:
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography
                  fontFamily="monospace"
                  fontWeight="bold"
                  variant="subtitle1"
                  sx={{ color: "black" }}
                >
                  {property.name}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                {owner !== undefined && (
                  <Typography
                    fontFamily="monospace"
                    fontWeight="bold"
                    variant="subtitle1"
                    sx={{ color: "black" }}
                  >
                    De: {owner.name} {owner.last_name}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography
                  fontFamily="monospace"
                  fontWeight="bold"
                  variant="subtitle1"
                  sx={{ color: "black" }}
                >
                  En: {name} ${final_price} MXN
                </Typography>
              </Grid>
            </Grid>

            <Typography variant="subtitle1" gutterBottom>
              {property.description}
            </Typography>
          </Card>

          {bookings !== undefined && bookings.length > 0 ? (
            <Card sx={{ padding: 4 }}>
              {bookings.map((booking) => (
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography
                      fontFamily="monospace"
                      fontWeight="bold"
                      variant="h5"
                      sx={{ color: "#1F3473" }}
                    >
                      Detalles de la Visita:
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography
                      fontFamily="monospace"
                      fontWeight="bold"
                      variant="subtitle1"
                      sx={{ color: "black" }}
                    >
                      Nombre del Cliente: {booking.name} {booking.last_name}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography
                      fontFamily="monospace"
                      fontWeight="bold"
                      variant="subtitle1"
                      sx={{ color: "black" }}
                    >
                      Correo Electronico: {booking.email}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography
                      fontFamily="monospace"
                      fontWeight="bold"
                      variant="subtitle1"
                      sx={{ color: "black" }}
                    >
                      Numero de Telefono: {booking.phone}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography
                      fontFamily="monospace"
                      fontWeight="bold"
                      variant="subtitle1"
                      sx={{ color: "black" }}
                    >
                      Fecha Registrada de la Visita:{" "}
                      {format(
                        new Date(booking.created_at),
                        "dd 'de' MMMM 'de' yyyy 'a las' HH:mm",
                        { locale: es }
                      )}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography
                      fontFamily="monospace"
                      fontWeight="bold"
                      variant="subtitle1"
                      sx={{ color: "black" }}
                    >
                      Comentarios del Cliente: {booking.message}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Card>
          ) : (
            <div>No Data</div>
          )}
        </Grid>
      </Grid>
      <AddReport modal={openModal} handleClose={handleClose} />
    </Layout>
  );
}
