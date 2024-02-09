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

  let new_images = images.map((img, index) => ({
    url: `https://mibien.s3.us-east-2.amazonaws.com/production/properties/${property_id}_${
      index + 1
    }`,
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
          color: "#662549",
        }}
      >
        <Typography variant="h6" fontWeight="bold" fontFamily="monospace">
          {name}
        </Typography>
      </Grid>
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Grid item xs={10} sm={10} md={5} lg={5} xl={5}>
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {new_images.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="image-container">
                  <Image
                    src={slide.url}
                    style={{ width: "100%", height: "60vh" }}
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
            className="mySwiper"
          >
            {new_images.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="thumb-image-container">
                  <Image
                    src={slide.url}
                    style={{ width: "100%", height: "25vh" }}
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
