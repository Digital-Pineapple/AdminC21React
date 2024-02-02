import { Chip, Grid, Typography } from "@mui/material";
import React from "react";
import { Stack } from "react-bootstrap";

const Amenidades = ({ details }) => {
  const {
    age,
    rooms,
    parking,
    remodel,
    bathroom,
    size,
    size_total,
    half_bath,
  } = details;
  return (
    <Grid container spacing={2}>
      {details !== null && (
        <>
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
              Amenidades
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Stack direction="row" spacing={1}>
              
            </Stack>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Amenidades;
