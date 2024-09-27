import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useTranslation } from "react-i18next";

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

export default function SearchService({ cambio }) {
  const [personName, setservice] = React.useState([]);
  const { t } = useTranslation();
  const names = [
    { id: 1, name: t("renta") },
    { id: 2, name: t("venta") },
    { id: 3, name: t("preventa") },
  ];
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setservice(value);
    cambio(value);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-multiple-checkbox-label">
          {t("tipoOperación")}
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label={t("tipoOperación")} />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name.id} value={name.name}>
              <Checkbox checked={personName.indexOf(name.name) > -1} />
              <ListItemText primary={name.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
