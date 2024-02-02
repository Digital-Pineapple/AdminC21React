import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Image } from "react-bootstrap";
const MultimediaProperty = ({ images, property_id }) => {
  let new_images = [];
  images.map((img, index) =>
    // const adjustedIndex = index + 1;
    new_images.push({
      url: `https://mibien.s3.us-east-2.amazonaws.com/production/properties/${property_id}_${
        index + 1
      }`,
    })
  );
  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" fontWeight="bold" fontFamily="monospace">
          Fotos de la Propiedad
        </Typography>
      </Grid>

      <Box sx={{ width: "100%", display: "flex", paddingTop: 4, p: 3 }}>
        <Box sx={{ width: "800px", margin: "0 auto" }}>
          <Slide>
            {new_images.map((fadeImage, index) => (
              <div className="each-fade" key={index}>
                <div className="image-container">
                  <Image
                    src={fadeImage.url}
                    style={{ width: "800px", height: "800px" }}
                  />
                </div>
                <h2>{fadeImage.caption}</h2>
              </div>
            ))}
          </Slide>
        </Box>
      </Box>
    </Grid>
  );
};

export default MultimediaProperty;
