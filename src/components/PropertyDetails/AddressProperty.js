import { Grid, Typography } from "@mui/material";
import React from "react";

const AddressProperty = ({ address }) => {
  const { state, municipality } = address;
  return (
    <Grid container spacing={2}>
      {address !== null && (
        <>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography fontWeight="bold" variant="body1" textAlign="center">
              Dirección
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            Estado:{state.name}
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            Municipio:{municipality.name}
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            Colonia:{address.colony}
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            C.P:{address.postal_code}
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            Calle:{address.street_name}
          </Grid>
          {address.fractionamient !== null && (
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
          )}
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            No.Ext:{address.number_building}
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default AddressProperty;
