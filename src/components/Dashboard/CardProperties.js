import { Card, Hidden, Typography } from "@mui/material";
import React from "react";
import StoreIcon from "@mui/icons-material/Store";
import { makeStyles } from "@mui/styles";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import { useTranslation } from "react-i18next";
const useStyles = makeStyles(() => ({
  dollar: {
    objectFit: "cover",
  },
  div_ganancias: {
    marginRight: "5%",
    marginLeft: "5%",
  },
}));
const CardProperties = ({ total_properties }) => {
  const { t } = useTranslation();
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
        <LocationCityIcon
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
          {t("totalPropiedades")}
        </Typography>
        <Typography
          sx={{
            fontSize: 23,
            color: "black",
            border: "1px",
            borderColor: "green",
          }}
        >
          {total_properties}
        </Typography>
      </div>
    </Card>
  );
};

export default CardProperties;
