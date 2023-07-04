import React from "react";
import { Box, Typography } from "@mui/material";
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
    height: "350px",
  },
}));
export default function MapsLoading() {
  const classes = useStyles();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div>
        <img
          src={require("../../assets/gif/maps_loading.gif")}
          alt="spinner"
          className={classes.imgbuilding}
        />
      </div>
    </Box>
  );
}
