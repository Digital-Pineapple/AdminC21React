import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useContext } from "react";
import PropertiesContext from "../../context/Properties/PropertiesContext";


export default function SearchName() {
  const {SearchProperties} = useContext(PropertiesContext)
  
  return (
    <>
      <TextField
      onChange={(e)=>(SearchProperties({name:e.target.value}),console.log(e.target.value))}
        fullWidth
        id="standard-basic"
        label="Nombre o dirección"
        variant="standard"
      />
    </>
  );
}
