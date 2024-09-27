import * as React from "react";
import Radio from "@mui/material/Radio";
import { useTranslation } from "react-i18next";

export default function Commission({
  selectedValueCommission,
  handleChangeCommission,
}) {
  const { t } = useTranslation();
  return (
    <div style={{ alignItems: "center" }}>
      <div>{t("deseaCompartirComision")}</div>
      <label>{t("si")}</label>
      <Radio
        checked={selectedValueCommission === "si"}
        onChange={handleChangeCommission}
        value="si"
        name="radio-buttons"
        inputProps={{ "aria-label": "Si" }}
      />
      <label>{t("no")}</label>
      <Radio
        checked={selectedValueCommission === "no"}
        onChange={handleChangeCommission}
        value={"no"}
        name="radio-buttons"
        inputProps={{ "aria-label": "No" }}
      />
    </div>
  );
}
