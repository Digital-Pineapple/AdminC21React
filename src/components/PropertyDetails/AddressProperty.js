import { Grid, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MapIcon from "@mui/icons-material/Map";
import StreetviewIcon from "@mui/icons-material/Streetview";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BusinessIcon from "@mui/icons-material/Business";

const AddressProperty = ({ address }) => {
  const { state, municipality } = address || {};

  return (
    <Grid container spacing={2}>
      {address && (
        <>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#1f3473",
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              fontFamily="monospace"
              sx={{ color: "#1f3473", marginBottom: 2 }}
            >
              Ubicación:
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
            >
              <StreetviewIcon sx={{ marginRight: 1 }} />
              Calle:
            </Typography>
            <Typography variant="body1">{address.street_name}</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
            >
              <HomeIcon sx={{ marginRight: 1 }} />
              Colonia:
            </Typography>
            <Typography variant="body1">{address.colony}</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
            >
              <MailOutlineIcon sx={{ marginRight: 1 }} />
              Código Postal:
            </Typography>
            <Typography variant="body1">{address.postal_code}</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
            >
              <MapIcon sx={{ marginRight: 1 }} />
              Estado:
            </Typography>
            <Typography variant="body1">{state.name}</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
            >
              <ApartmentIcon sx={{ marginRight: 1 }} />
              Municipio:
            </Typography>
            <Typography variant="body1">{municipality.name}</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
            >
              <BusinessIcon sx={{ marginRight: 1 }} />
              No. Ext:
            </Typography>
            <Typography variant="body1">{address.number_building}</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
            >
              <BusinessIcon sx={{ marginRight: 1 }} />
              No. Int:
            </Typography>
            <Typography variant="body1">{address.number_int}</Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              color: "#1f3473",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" fontWeight="bold" fontFamily="monospace">
              Referencias:
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              dangerouslySetInnerHTML={{ __html: address.iframe }}
              id="map"
            />
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default AddressProperty;
