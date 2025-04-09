/**
 * El componente `MultimediaProperty` muestra una galería de imágenes para una propiedad específica. 
 * Utiliza la librería Swiper para crear una experiencia de visualización de imágenes con navegación 
 * y miniaturas que permiten al usuario interactuar con las imágenes de forma dinámica.
 * 
 * El componente está compuesto por dos Swipers:
 * - El primero muestra las imágenes grandes de la propiedad, permitiendo navegación a través de las flechas.
 * - El segundo muestra miniaturas de las imágenes, que funcionan como previsualizaciones que el usuario puede 
 *   seleccionar para ver la imagen grande correspondiente.
 * 
 * La propiedad `images` es un array de las imágenes de la propiedad, mientras que `name` es el nombre de la propiedad 
 * que se mostrará como título. El `property_id` se utiliza para construir las URLs de las imágenes almacenadas en 
 * un servidor S3, lo que permite una carga dinámica de las imágenes.
 * 
 * La estructura de las imágenes en el componente está diseñada para adaptarse de manera responsive, 
 * mostrando un formato en columna en pantallas pequeñas y en fila en pantallas más grandes.
 * 
 * Propiedades recibidas:
 * - `name`: El nombre de la propiedad, que se mostrará en la parte superior de la galería.
 * - `images`: Un array de imágenes que serán utilizadas para generar las vistas en el Swiper.
 * - `property_id`: El ID único de la propiedad, usado para construir las URLs de las imágenes.
 */
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs, A11y } from "swiper/modules";
import { Box, Grid, Typography } from "@mui/material";
import { Image } from "react-bootstrap";

const MultimediaProperty = ({ name, images, property_id }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const generarUrlImagen = (index) =>
    `https://mibien.s3.us-east-2.amazonaws.com/production/properties/${property_id}_${
      index + 1
    }`;

  const nuevasImagenes = images.map((_, index) => ({
    url: generarUrlImagen(index),
  }));

  return (
    <>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#ffb300",
          padding: "16px",
        }}
      >
        <Typography variant="h5" fontWeight="bold" fontFamily="monospace">
          {name}
        </Typography>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
        }}
      >
        <Grid item xs={12} md={8}>
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs, A11y]}
            className="mySwiper2"
          >
            {nuevasImagenes.map((slide, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={slide.url}
                  alt={`Imagen ${index + 1} de ${name}`}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "50vh",
                    objectFit: "cover",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs, A11y]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
          >
            {nuevasImagenes.map((slide, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={slide.url}
                  alt={`Miniatura ${index + 1} de ${name}`}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "23vh",
                    objectFit: "cover",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </>
  );
};

export default MultimediaProperty;
