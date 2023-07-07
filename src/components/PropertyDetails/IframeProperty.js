import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import { Grid } from "@mui/material";
import { useState } from "react";
import MethodGet from "../../config/service";
import { useEffect } from "react";
import MapsLoading from "../../components/loading/MapsLoading";
export default function IframeProperty({ id, modal, handleClose, iframe }) {
  const [cargando, spinnerCargando] = useState(false);
  const [iframeProperty, saveIframeProperty] = useState([]);
  useEffect(() => {
    let url = `/properties/${iframe}`;
    MethodGet(url)
      .then((res) => {
        spinnerCargando(true);
        saveIframeProperty(res.data.data.address);
      })
      .catch((error) => {
        spinnerCargando(true);
        console.log(error);
      });
  }, [iframe]);
  console.log(cargando, "el cargando");
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
          {"Ubicación de la propiedad"} <hr />
        </DialogTitle>
        {!cargando ? (
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <MapsLoading />
            </Grid>
          </Grid>
        ) : (
          <>
            <DialogContent>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <div
                    style={{
                      width: 550,
                      height: 450,
                      overflowX: "hidden",
                      overflowY: "hidden",
                    }}
                    dangerouslySetInnerHTML={{ __html: iframeProperty.iframe }}
                    id="map"
                  />
                </Grid>
              </Grid>
            </DialogContent>
          </>
        )}
        <DialogActions>
          <Button
            onClick={() => {
              handleClose();
              spinnerCargando(false);
            }}
          >
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
