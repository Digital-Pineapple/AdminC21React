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
  // Estado inicial
  const initialState = {
    services: [],
    service: null,
    ErrorsApi: [],
    success: false,
  };
  const [state, dispatch] = useReducer(ServicesReducer, initialState);
  // Esta función consulta todos los servicios disponibles
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
  // Esta función agrega un nuevo servicio al sistema
  const AddService = (data) => {
    let url = "/services";
    MethodPost(url, data)
      .then((res) => {
        dispatch({
          type: ADD_SERVICE,
          payload: res.data.data,
        });
        Swal.fire({
          title: "Agregada",
          text: "Servicio Agregado correctamente",
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          icon: "error",
          text: error.response.data.message,
        });
      });
  };
  // Esta función edita un servicio existente en el sistema
  const ChangeService = (data) => {
    let url = `/services/${data.id}`;
    MethodPut(url, data)
      .then((res) => {
        dispatch({
          type: UPDATE_SERVICE,
          payload: res.data.data,
        });
        Swal.fire({
          title: "Servicio Modificado",
          text: res.data.message,
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          icon: "error",
          text: error.response.data.message,
        });
      });
  };
  // Esta función elimina un servicio del sistema
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
