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
    `https://mibien.s3.us-east-2.amazonaws.com/local/properties/${property_id}_${
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
          color: "#1f3473",
          padding: "16px",
        }}
      >
        <Typography variant="h6" fontWeight="bold" fontFamily="monospace">
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
