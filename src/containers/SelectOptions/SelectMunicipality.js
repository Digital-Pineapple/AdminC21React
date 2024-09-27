import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Select from "react-select";
import MethodGet from "../../config/service";
const SelectMunicipality = (props) => {
  const { t } = useTranslation();
  const detectarCambiosMunicipality = (value) => {
    props.detectarCambiosMunicipality(value);
  };
  const [municipalities, saveMunicipalities] = useState([]);
  useEffect(() => {
    if (props.state_id) {
      let url = `/states/municipalities/${props.state_id}`;
      MethodGet(url)
        .then((res) => {
          saveMunicipalities(res.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [props.state_id]);
  const selectStyles = {
    menu: (base) => ({
      ...base,
      zIndex: 100,
    }),
  };
  return (
    <>
      <label>{t("seleccionaMunicipio")}</label>
      <Select
        required
        fullwith
        styles={selectStyles}
        onChange={(value) => detectarCambiosMunicipality(value)}
        classNamePrefix="select"
        name="account"
        placeholder={t("seleccionaMunicipio")}
        options={municipalities.map((muni) => {
          let attribute = {
            label: muni.name,
            value: muni.id,
          };
          return attribute;
        })}
      />
    </>
  );
};

export default SelectMunicipality;
