/**
 * `SelectMunicipality` es un componente que permite seleccionar un municipio basado en el estado seleccionado.
 * - Utiliza el componente `Select` de `react-select` para renderizar un desplegable con los municipios disponibles para un estado específico.
 * - El componente obtiene los municipios de un API utilizando el estado (`state_id`) pasado como prop. 
 * - Cuando el usuario selecciona un municipio, el valor seleccionado es pasado al componente padre a través de la prop `detectarCambiosMunicipality`.
 * 
 * Este componente es útil cuando necesitas mostrar un listado de municipios que dependen de un estado previamente seleccionado en un formulario o aplicación.
 */
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
