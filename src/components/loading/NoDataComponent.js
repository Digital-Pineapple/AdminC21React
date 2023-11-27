import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  loadingview: {
    color: "black",
    fontSize: "130px",
    fontFamily: "roboto",
    fontWeight: "bold",
    textAlign: "center",
  },

  imgbuilding: {
    height: "70%",
    width: "90%",
  },
}));
export default function NoDataComponent() {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        display="flex"
        justifyContent="center"
      >
        <div>
          <img
            src={require("../../assets/gif/noData.gif")}
            alt="spinner"
            className={classes.imgbuilding}
          />
        </div>
      </Grid>
    </Grid>
  );
}
