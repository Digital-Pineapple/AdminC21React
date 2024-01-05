import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function SearchName() {
  return (
    <>
      <TextField
        fullWidth
        id="standard-basic"
        label="Nombre o dirección"
        variant="standard"
      />
    </>
  );
}
