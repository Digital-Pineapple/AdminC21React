import React, { useReducer } from "react";
import ServicesContext from "./ServicesContext";
import ServicesReducer from "./ServicesReducer";
import MethodGet, {
  MethodDelete,
  MethodPost,
  MethodPut,
} from "../../config/service";
import Swal from "sweetalert2";
import {
  ADD_SERVICE,
  DELETE_SERVICE,
  GET_ALL_SERVICES,
  SHOW_ERRORS_API,
  UPDATE_SERVICE,
} from "../../types";
const ServicesState = ({ children }) => {
  //estado inicial
  const initialState = {
    services: [],
    service: null,
    ErrorsApi: [],
    success: false,
  };
  const [state, dispatch] = useReducer(ServicesReducer, initialState);

  const GetServices = () => {
    let url = "/services";
    MethodGet(url)
      .then((res) => {
        dispatch({
          type: GET_ALL_SERVICES,
          payload: res.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const AddService = (data) => {
    let url = "/services";
    MethodPost(url, data)
      .then((res) => {
        console.log(res);
        dispatch({
          type: ADD_SERVICE,
          payload: res.data.data,
        });
        Swal.fire({
          title: "Agregada",
          text: "Servicio Agregado correctamente",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };
  const ChangeService = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    //formData.append("typeCategory", data.typeCategory);
    //formData.append("brand", category.brand);
    let url = `/services/${data.id}`;
    MethodPut(url, formData)
      .then((res) => {
        Swal.fire({
          title: "Servicio Modificado",
          text: res.data.message,
          icon: "success",
          timer: 1000,
          showCancelButton: false,
          showConfirmButton: false,
        });
        dispatch({
          type: UPDATE_SERVICE,
          payload: res.data.category,
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: "Ocurrio un error al actualizar el servicio",
          icon: "error",
          showConfirmButton: false,
        });
        dispatch({
          type: SHOW_ERRORS_API,
          payload: error.res.data.error,
        });
      });
  };
  //Eliminar categoria
  const DeleteService = (id) => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "El servicio seleccionada será eliminada",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "No, cancelar",
    }).then((result) => {
      if (result.value) {
        let url = `/services/${id}`;
        MethodDelete(url)
          .then((res) => {
            Swal.fire({
              title: "Eliminado",
              text: res.data.message,
              icon: "success",
              timer: 1500,
              showConfirmButton: false,
            });
            dispatch({
              type: DELETE_SERVICE,
              payload: id,
            });
          })
          .catch((error) => {
            Swal.fire({
              title: "Error",
              text: error.response.data.message,
              icon: "error",
              timer: 2000,
              showConfirmButton: false,
            });
          });
      }
    });
  };

  return (
    <ServicesContext.Provider
      value={{
        services: state.services,
        service: state.service,
        ErrorsApi: state.ErrorsApi,
        success: state.success,
        GetServices,
        AddService,
        ChangeService,
        DeleteService,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesState;
