import { Card, Hidden, Typography } from "@mui/material";
import React from "react";
import DataThresholdingIcon from "@mui/icons-material/DataThresholding";
import { makeStyles } from "@mui/styles";
import SellIcon from "@mui/icons-material/Sell";
const useStyles = makeStyles(() => ({
  dollar: {
    objectFit: "cover",
  },
  div_ganancias: {
    marginRight: "5%",
    marginLeft: "5%",
  },
}));
const PropertiesSold = ({ total_properties_sold }) => {
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
        <SellIcon
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
          Inmuebles en venta
        </Typography>
        <Typography
          sx={{
            fontSize: 23,
            color: "white",
            border: "1px",
            borderColor: "green",
          }}
        >
          {total_properties_sold}
        </Typography>
      </div>
    </Card>
  );
};

export default PropertiesSold;
