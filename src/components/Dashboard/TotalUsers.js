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
const TotalUsers = ({ total_users }) => {
  const classes = useStyles();
  return (
    <Card
      style={{ backgroundColor: "#8ED5E1" }}
      sx={{
        boxShadow: 4,
        display: "flex",
        alignItems: "center",
        flexDirection: "row ",
      }}
    >
      <div>
        <GroupIcon
          style={{
            fontSize: 60,
            marginLeft: 10,
            marginTop: 10,
            marginBottom: 10,
            color: "#1F3473",
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
            color: "#1F3473",
            border: "1px",
            borderColor: "green",
          }}
        >
          Total usuarios
        </Typography>
        <Typography
          sx={{
            fontSize: 23,
            color: "#1F3473",
            border: "1px",
            borderColor: "green",
          }}
        >
          {total_users}
        </Typography>
      </div>
    </Card>
  );
};

export default TotalUsers;
