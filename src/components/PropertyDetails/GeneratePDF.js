import React, { useContext } from "react";
import { Button, Grid } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import PropertiesContext from "../../context/Properties/PropertiesContext";

export default function GeneratePDF({ id, status }) {
  console.log(status);
  const { DownloadPDF } = useContext(PropertiesContext);
  return (
    <>
      {status === 3 && (
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Button
            onClick={() => DownloadPDF(id)}
            fullWidth
            variant="contained"
            sx={{
              color: "white",
              backgroundColor: "#1f3473",
              "&:hover": {
                color: "white",
                backgroundColor: "#1f3473",
              },
            }}
          >
            Descargar Ficha Técnica <CloudDownloadIcon sx={{ marginLeft: 2 }} />
          </Button>
        </Grid>
      )}
    </>
  );
}
