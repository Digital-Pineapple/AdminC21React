import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
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
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Swiper
            navigation
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {nuevasImagenes.map((slide, index) => (
              <SwiperSlide key={index}>
                <div>
                  <Image
                    src={slide.url}
                    style={{ width: "100%", height: "55vh" }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {nuevasImagenes.map((slide, index) => (
              <SwiperSlide key={index}>
                <div>
                  <Image
                    src={slide.url}
                    style={{ width: "80%", height: "23vh" }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </>
  );
};

export default MultimediaProperty;
