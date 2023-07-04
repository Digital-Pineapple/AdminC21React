import { Card, Grid, Hidden, Typography } from "@mui/material";
import React from "react";
import GroupIcon from "@mui/icons-material/Group";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(() => ({
  dollar: {
    objectFit: "cover",
  },
  div_ganancias: {
    marginRight: "5%",
    marginLeft: "5%",
  },
}));
const TotalUsers = () => {
  const classes = useStyles();
  return (
    <Card
      style={{ backgroundColor: "#D7A86E" }}
      sx={{
        boxShadow: 4,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <div>
        <GroupIcon
          style={{
            fontSize: 60,
            marginLeft: 10,
            marginTop: 10,
            marginBottom: 10,
            color: "white",
          }}
        />
      </div>
      <div className={classes.div_ganancias}>
        <Typography
          component="div"
          variant="h5"
          sx={{
            fontWeight: "bold",
            fontSize: 20,
            color: "white",
            border: "1px",
            borderColor: "green",
          }}
        >
          Total usuarios
        </Typography>
        <Typography
          sx={{
            fontSize: 23,
            color: "white",
            border: "1px",
            borderColor: "green",
          }}
        >
          13
        </Typography>
      </div>
    </Card>
  );
};

export default TotalUsers;
