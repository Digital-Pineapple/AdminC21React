import {
  Alert,
  Box,
  Card,
  CardActions,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useContext } from "react";
import ModalImage from "react-modal-image-responsive";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import image from "../../assets/img/default.png";
const useStyles = makeStyles({
  imgproduct: {
    top: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
  },
});

const CardPropertySearch = ({ property }) => {
  const { images } = property;

  const classes = useStyles();
  return (
    <>
      <Card className={classes.card}>
        {property.status === 2 ? (
          <Alert
            icon={false}
            severity="info"
            sx={{ backgroundColor: "#662549", color: "white" }}
          >
            <Typography
              fontWeight="bold"
              fontFamily="monospace"
              textOverflow={"ellipsis"}
              minHeight={"3rem"}
              textAlign="center"
              sx={{ textOverflow: "ellipsis" }}
            >
              {property.name}
            </Typography>
          </Alert>
        ) : (
          property.status === 3 && (
            <Alert
              icon={false}
              severity="success"
              sx={{ backgroundColor: "#AE445A", color: "white" }}
            >
              <Typography
                fontWeight="bold"
                fontFamily="monospace"
                textOverflow={"ellipsis"}
                minHeight={"3rem"}
                textAlign={"center"}
                sx={{ textOverflow: "ellipsis" }}
              >
                {property.name}
              </Typography>
            </Alert>
          )
        )}

        <Box sx={{ width: "100%", display: "flex" }}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Box sx={{ pt: "100%", position: "relative" }}>
                {images === undefined ? (
                  <ModalImage
                    className={classes.imgproduct}
                    small={image}
                    large={image}
                    alt={property.name}
                  />
                ) : images.length > 0 ? (
                  <ModalImage
                    className={classes.imgproduct}
                    large={`${images[0].url}`}
                    small={`${images[0].url}`}
                    alt={property.name}
                  />
                ) : (
                  <ModalImage
                    className={classes.imgproduct}
                    small={image}
                    large={image}
                    alt={property.name}
                  />
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>

        <CardActions>
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
              alignItems="center"
            >
              <Tooltip title="Mas Detalles" placement="top">
                <Link to={`/Propertydetail/${property.id}`}>
                  <IconButton>
                    <VisibilityIcon sx={{ color: "blue" }} />
                  </IconButton>
                </Link>
              </Tooltip>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </>
  );
};

export default CardPropertySearch;
