import React, { Fragment, useEffect, useState } from "react";
import MethodGet from "../../config/service";
import Select from "react-select";
const RolesSelect = (props) => {
  const [roles, saveRoles] = useState();
  useEffect(() => {
    let url = "/roles";
    MethodGet(url)
      .then((res) => saveRoles(res.data.data))
      .catch((error) => console.log(error));
  }, []);
  const selectStyles = {
    menu: (base) => ({
      ...base,
      zIndex: 100,
    }),
  };
  const detectarCambiosRole = (value) => {
    props.detectarCambiosRole(value);
  };
  return (
    <Fragment>
      {roles && (
        <Select
          fullwith
          styles={selectStyles}
          onChange={(value) => detectarCambiosRole(value)}
          //className="basic-single"
          classNamePrefix="select"
          name="account"
          placeholder="Selecciona un rol"
          // options={nuevoArreglo}
          options={roles.map((rol) => {
            let attribute = {
              label: rol.name,
              value: rol.id,
            };
            return attribute;
          })}
        />
      )}
    </Fragment>
  );
};

export default RolesSelect;
