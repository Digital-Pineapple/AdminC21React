import { Card, Hidden, Typography } from "@mui/material";
import React from "react";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import KeyIcon from "@mui/icons-material/Key";
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
const PropertiesRent = ({ total_properties_rent }) => {
  const classes = useStyles();
  return (
    <Card
      style={{ backgroundColor: "#FFB734" }}
      sx={{
        boxShadow: 4,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <div>
        <KeyIcon
          style={{
            fontSize: 60,
            marginLeft: 10,
            marginTop: 10,
            marginBottom: 10,
            color: "black",
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
            color: "black",
            border: "1px",
            borderColor: "green",
          }}
        >
          Inmuebles en renta
        </Typography>
        <Typography
          sx={{
            fontSize: 23,
            color: "black",
            border: "1px",
            borderColor: "green",
          }}
        >
          {total_properties_rent}
        </Typography>
      </div>
    </Card>
  );
};

export default PropertiesRent;
