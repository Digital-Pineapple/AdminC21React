import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  Checkbox,
  MenuItem,
  ListItemText,
  OutlinedInput,
} from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  { id: 1, name: "Casa" },
  { id: 2, name: "Departamento" },
  { id: 3, name: "Bodega" },
  { id: 4, name: "Local Comercial" },
  { id: 5, name: "Terreno/Lote" },
  { id: 6, name: "Nave" },
];

const SearchCategory = ({ cambio }) => {
  const [personName, setcategory] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setcategory(typeof value === "string" ? value.split(",") : value);
    cambio(value);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-multiple-checkbox-label">Categorías</InputLabel>
        <Select
          fullWidth
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Categorías" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name.id} value={name.name}>
              <Checkbox checked={personName.includes(name.name)} />
              <ListItemText primary={name.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SearchCategory;
