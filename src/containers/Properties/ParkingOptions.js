import * as React from "react";
import Radio from "@mui/material/Radio";
import { useTranslation } from "react-i18next";

export default function ParkingOptions({
  selectedValueParking,
  handleChangeParking,
}) {
  const { t } = useTranslation();
  //   const [selectedValue, setSelectedValue] = React.useState("a");

  //   const handleChange = (event) => {
  //     setSelectedValue(event.target.value);
  //   };

  return (
    <div style={{ alignItems: "center" }}>
      <div>{t("cuentaConEstacionamiento")}</div>
      <label>{t("si")}</label>
      <Radio
        checked={selectedValueParking === "si"}
        onChange={handleChangeParking}
        value="si"
        name="radio-buttons"
        inputProps={{ "aria-label": "Si" }}
      />
      <label>{t("no")}</label>
      <Radio
        checked={selectedValueParking === "no"}
        onChange={handleChangeParking}
        value="no"
        name="radio-buttons"
        inputProps={{ "aria-label": "No" }}
      />
    </div>
  );
}
