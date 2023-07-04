import { Box, Grid } from "@mui/material";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Image } from "react-bootstrap";
const MultimediaProperty = ({ images }) => {
  return (
    <Grid container spacing={2}>
      <Box sx={{ width: "100%", display: "flex", paddingTop: 4, p: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Box sx={{ width: "300px", margin: "0 auto" }}>
              <Slide>
                {images.map((fadeImage, index) => (
                  <div className="each-fade" key={index}>
                    <div className="image-container">
                      <Image
                        src={fadeImage.url}
                        style={{ width: "300px", height: "300px" }}
                      />
                    </div>
                    <h2>{fadeImage.caption}</h2>
                  </div>
                ))}
              </Slide>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default MultimediaProperty;