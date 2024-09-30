import React, { useContext } from "react";
import { Button, Grid } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import PropertiesContext from "../../context/Properties/PropertiesContext";
import { useTranslation } from "react-i18next";

export default function GeneratePDF({ id, status }) {
  const { t } = useTranslation();
  const { DownloadPDF } = useContext(PropertiesContext);
  return (
    <>
      {(status === 3 || status === 4 || status === 5) && (
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Button
            onClick={() => DownloadPDF(id)}
            fullWidth
            variant="contained"
            sx={{
              color: "black",
              backgroundColor: "#ffb300",
              "&:hover": {
                color: "black",
                backgroundColor: "#ffb300",
              },
            }}
          >
            {t("descargarFicha")} <CloudDownloadIcon sx={{ marginLeft: 2 }} />
          </Button>
        </Grid>
      )}
    </>
  );
}
