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
    height: "100vh",
    width: "auto",
  },
}));
export default function LoadingComponent() {
  const classes = useStyles();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginLeft: 20,
        marginTop: -10,
      }}
    >
      <div>
        <img
          src={require("../../assets/gif/loading.gif")}
          alt="spinner"
          className={classes.imgbuilding}
        />
      </div>
    </Box>
  );
}
