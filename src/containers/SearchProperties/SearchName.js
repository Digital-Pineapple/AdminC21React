import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useTranslation } from "react-i18next";

export default function SearchName({ cambio }) {
  const { t } = useTranslation();
  return (
    <>
      <TextField
        onChange={(e) => cambio(e.target.value)}
        fullWidth
        id="standard-basic"
        label={t("nombreDirección")}
        variant="standard"
      />
    </>
  );
}
