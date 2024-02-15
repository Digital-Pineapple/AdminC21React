import { Grid, Typography } from "@mui/material";
import React from "react";

const AddressProperty = ({ address }) => {
  const { state, municipality } = address;
  return (
    <Grid container spacing={2}>
      {address !== null && (
        <>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              color: "#662549",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" fontWeight="bold" fontFamily="monospace">
              Ubicación:
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Typography variant="h6" fontWeight="bold">
              Calle:
            </Typography>
            {address.street_name}
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Typography variant="h6" fontWeight="bold">
              Colonia:
            </Typography>
            {address.colony}
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Typography variant="h6" fontWeight="bold">
              Codigo Postal:
            </Typography>
            {address.postal_code}
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Typography variant="h6" fontWeight="bold">
              Estado:
            </Typography>
            {state.name}
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Typography variant="h6" fontWeight="bold">
              Municipio:
            </Typography>
            {municipality.name}
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Typography variant="h6" fontWeight="bold">
              No.Ext:
            </Typography>
            {address.number_building}
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Typography variant="h6" fontWeight="bold">
              No.Int:
            </Typography>
            {address.number_int}
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              color: "#662549",
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
            <Grid dangerouslySetInnerHTML={{ __html: address.iframe }}></Grid>
          </Grid>

          {/* {address.fractionamient !== null && (
            <>
              <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                Fraccionamiento:{address?.fractionamient}
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                Lote: {address?.lote}
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                Manzana:{address?.apple_house}
              </Grid>
            </>
          )} */}
        </>
      )}
    </Grid>
  );
};

export default AddressProperty;
