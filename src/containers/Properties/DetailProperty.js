import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid } from "@mui/material";
import MethodGet from "../../config/service";
import GeneralPropery from "../../components/PropertyDetails/GeneralPropery";
import ServicesProperty from "../../components/PropertyDetails/ServicesProperty";
import AddressProperty from "../../components/PropertyDetails/AddressProperty";
import MultimediaProperty from "../../components/PropertyDetails/MultimediaProperty";
import { useEffect } from "react";
import { useState } from "react";
export default function DetailProperty({ id, modal, handleClose }) {
  const [property, saveProperty] = useState([]);
  const { address, details, images, rules, owner, category } = property;
  const [services, saveServices] = useState([]);
  useEffect(() => {
    let url = `/properties/${id}`;
    MethodGet(url)
      .then((res) => {
        saveProperty(res.data.data);
        saveServices(res.data.services);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      <Dialog
        open={modal}
        onClose={handleClose}
        fullWidth
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Detalle de propiedad"} <hr />
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <GeneralPropery
                name={property.name}
                description={property.description}
                status={property.status}
                rules={rules}
                category={category}
              />
            </Grid>
            {address && (
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <AddressProperty address={address} />
              </Grid>
            )}
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <ServicesProperty services={services} />
            </Grid>
            {images && (
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <MultimediaProperty images={images} />
              </Grid>
            )}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
