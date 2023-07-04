import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import { Grid } from "@mui/material";

export default function IframeProperty({ id, modal, handleClose, iframe }) {
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
          {"Ubicacion de la propiedad"} <hr />
        </DialogTitle>
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
                dangerouslySetInnerHTML={{ __html: iframe.iframe }}
                id="map"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
