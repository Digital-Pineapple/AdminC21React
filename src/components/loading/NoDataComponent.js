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
    height: "70%",
    width: "90%",
  },
}));
export default function NoDataComponent() {
  const classes = useStyles();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginLeft: 60,
        marginTop: 10,
      }}
    >
      <div>
        <img
          src={require("../../assets/gif/NoData.gif")}
          alt="spinner"
          className={classes.imgbuilding}
        />
      </div>
    </Box>
  );
}
