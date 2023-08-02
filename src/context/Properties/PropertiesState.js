import React, { useReducer } from "react";
import PropertiesReducer from "./PropertiesReducer";
import MethodGet, {
  MethodDelete,
  MethodPost,
  MethodPut,
} from "../../config/service";
import headerConfig from "../../config/imageHeaders";
import {
  ADD_MULTIMEDIA_PROPERTY,
  ADD_PROPERTY,
  BACK_PENDING_PROPERTY,
  DELETE_PROPERTY,
  GET_ALL_PROPERTIES_PENDING,
  GET_ALL_PROPERTIES_PUBLISH,
  PUBLISH_PROPERTY,
  UPDATE_PROPERTY,
} from "../../types";
import Swal from "sweetalert2";
import PropertiesContext from "./PropertiesContext";
const PropertiesState = ({ children }) => {
  const initialState = {
    properties: [],
    property: null,
    ErrorsApi: [],
    success: false,
  };
  const [state, dispatch] = useReducer(PropertiesReducer, initialState);
  const GetPropertiesPublish = () => {
    let url = "/propertiesAdmin";
    MethodGet(url)
      .then((res) => {
        dispatch({
          type: GET_ALL_PROPERTIES_PUBLISH,
          payload: res.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const GetPropertiesPending = () => {
    let url = "/pending/properties";
    MethodGet(url)
      .then((res) => {
        dispatch({
          type: GET_ALL_PROPERTIES_PENDING,
          payload: res.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const AddProperty = (data) => {
    console.log(data, "la data en el state");
    let url = "/properties";
    MethodPost(url, data)
      .then((res) => {
        console.log(res.data.data);
        dispatch({
          type: ADD_PROPERTY,
          payload: res.data.data,
        });
        Swal.fire({
          title: "Registrado",
          text: res.data.message,
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Error",
          icon: "error",
          text: error.response.data.message,
          timer: 2000,
          showConfirmButton: false,
        });
      });
  };
  const UpdateProperty = (data) => {
    let url = "";
    MethodPut(url, data)
      .then((res) => {
        dispatch({
          type: UPDATE_PROPERTY,
          payload: res.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const AddMultimediaProperty = (data) => {
    console.log(data, "en el state");
    Swal.fire({
      title: "Agregar Imagen",
      text: "¿Estas seguro de Agregar esta imagen como fotos de la propiedad?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Aceptar",
      cancelButtonText: "No, cancelar",
    }).then((result) => {
      if (result.value) {
        const formData = new FormData();
        formData.append("file", data.image);
        let url = `/property/images/${data.property_id}`;
        MethodPost(url, formData, { headerConfig })
          .then((res) => {
            Swal.fire({
              title: "Agregado",
              text: "La imagen se ha agregado correctamente!",
              showConfirmButton: false,
              timer: 1000,
              icon: "success",
            });
            dispatch({
              type: ADD_MULTIMEDIA_PROPERTY,
              payload: res.data.data,
            });
          })
          .catch((error) => {
            Swal.fire({
              title: "Error",
              text: error.response.data.message,
              icon: "error",
              showConfirmButton: false,
              timer: 1500,
            });
          });
      }
    });
  };
  const DeleteProperty = (id) => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "La propiedad seleccionada será eliminada",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "No, cancelar",
    }).then((result) => {
      if (result.value) {
        let url = `//${id}`;
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
              type: DELETE_PROPERTY,
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
  const PublishProperty = (id) => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "La propiedad seleccionada será publicada",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, publicar",
      cancelButtonText: "No, cancelar",
    }).then((result) => {
      if (result.value) {
        let url = `/properties/${id}/publish`;
        MethodPost(url)
          .then((res) => {
            Swal.fire({
              title: "Publicado",
              text: "La propiedad se ha publicado correctamente!",
              icon: "success",
              timer: 1500,
              showConfirmButton: false,
            });
            dispatch({
              type: PUBLISH_PROPERTY,
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
  const BackPendingProperty = (id) => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "La propiedad seleccionada regresara a pendiente",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, regresar",
      cancelButtonText: "No, cancelar",
    }).then((result) => {
      if (result.value) {
        let url = `/properties/${id}/pending`;
        MethodPost(url)
          .then((res) => {
            Swal.fire({
              title: "Pendiente",
              text: "La propiedad ha regresado a status pendiente!",
              icon: "success",
              timer: 1500,
              showConfirmButton: false,
            });
            dispatch({
              type: BACK_PENDING_PROPERTY,
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
    <PropertiesContext.Provider
      value={{
        properties: state.properties,
        property: state.property,
        ErrorsApi: state.ErrorsApi,
        success: state.success,
        GetPropertiesPending,
        GetPropertiesPublish,
        AddProperty,
        UpdateProperty,
        DeleteProperty,
        PublishProperty,
        BackPendingProperty,
        AddMultimediaProperty,
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};

export default PropertiesState;
