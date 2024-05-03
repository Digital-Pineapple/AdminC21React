import React, { useReducer } from "react";
import { useHistory } from "react-router-dom";
import PropertiesReducer from "./PropertiesReducer";
import clientAxios from "../../config/Axios";
import fileDownload from "js-file-download";
import MethodGet, {
  MethodDelete,
  MethodPost,
  MethodPut,
} from "../../config/service";
import headerConfig from "../../config/imageHeaders";
import {
  ADD_MULTIMEDIA_PROPERTY,
  ADD_PROPERTY,
  GET_PROPERTY,
  BACK_PENDING_PROPERTY,
  DELETE_PROPERTY,
  GET_ALL_PROPERTIES_PENDING,
  GET_ALL_PROPERTIES_PUBLISH,
  PUBLISH_PROPERTY,
  UPDATE_PROPERTY,
  SHOW_ERRORS_API,
  CLEAN_PROPERTIES,
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
  //Consulta todas las propiedades publicadas
  const GetPropertiesPublish = () => {
    dispatch({
      type: CLEAN_PROPERTIES,
    });
    let user_id = localStorage.getItem("user_id");
    let type_user = localStorage.getItem("type_user");
    if (type_user === "1") {
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
    } else if (type_user === "2" || type_user === "3" || type_user === "4") {
      let url = `/propertiesPerUser/${user_id}`;
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
    }
  };
  //Consulta las propiedades para buscar por filtros
  const GetPropertiesPublishSearch = () => {
    dispatch({
      type: CLEAN_PROPERTIES,
    });
    let type_user = localStorage.getItem("type_user");
    if (
      type_user === "1" ||
      type_user === "2" ||
      type_user === "3" ||
      type_user === "4"
    ) {
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
    }
  };
  //Consulta todas las propiedades en pendiente
  const GetPropertiesPending = () => {
    dispatch({
      type: CLEAN_PROPERTIES,
    });
    let user_id = localStorage.getItem("user_id");
    let type_user = localStorage.getItem("type_user");
    if (type_user === "1") {
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
    } else if (type_user === "2" || type_user === "3" || type_user === "4") {
      let url = `/pending/propertiesuser/${user_id}`;
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
    }
  };
  //Agrega una propiedad
  const AddProperty = (data) => {
    let url = "/properties";
    let type_user = localStorage.getItem("type_user");
    if (
      type_user === "1" ||
      type_user === "2" ||
      type_user === "3" ||
      type_user === "4"
    ) {
      MethodPost(url, data)
        .then((res) => {
          dispatch({
            type: ADD_PROPERTY,
            payload: res.data.data,
          });
          Swal.fire({
            title: "Registrado",
            text: "La propiedad se ha registrado correctamente!",
            icon: "success",
          }).then(() => {
            window.location.href = "/PropertiesPending";
          });
        })
        .catch((error) => {
          Swal.fire({
            title: "Error",
            icon: "error",
            text: error.response.data[0],
          });
        });
    } else if (type_user === "5") {
      MethodPost(url, data)
        .then((res) => {
          Swal.fire({
            title: "Registrado",
            text: "¡La propiedad se ha registrado correctamente! Por favor, espera la aprobación de tu propiedad.",
            icon: "success",
          }).then((result) => {
            if (result.value) {
              window.location.reload();
            }
          });
          dispatch({
            type: ADD_PROPERTY,
            payload: res.data.data,
          });
        })
        .catch((error) => {
          Swal.fire({
            title: "Error",
            icon: "error",
            text: error.response.data[0],
          });
          dispatch({
            type: SHOW_ERRORS_API,
          });
        });
    }
  };
  const SearchProperties = (data) => {
    let url = `/properties`;
    MethodGet(url, {
      name: data.name,
      categorias: data.category,
      tipos: data.service,
    })
      .then((res) => {
        dispatch({
          type: GET_PROPERTY,
          payload: res.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Error",
          icon: "error",
          text: "FALLO",
          timer: 2000,
          showConfirmButton: false,
        });
      });
  };
  //Edita una propiedad
  const UpdateProperty = (data) => {
    let url = "/update/p/" + data.id;
    MethodPost(url, data)
      .then((res) => {
        dispatch({
          type: UPDATE_PROPERTY,
          payload: res.data,
        });
        Swal.fire({
          title: "Editado",
          text: "La propiedad se ha editado correctamente!",
          icon: "success",
        }).then(() => {
          window.location.reload();
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          icon: "error",
          text: error.response.data[0],
        });
      });
  };
  //Descarga una ficha tecnica de la propiedad
  const DownloadPDF = (id) => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "La propiedad seleccionada será descargada",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, descargar",
      cancelButtonText: "No, cancelar",
    }).then((result) => {
      if (result.value) {
        let url = `/generatePDF/${id}`;
        clientAxios
          .get(url, { responseType: "blob" })
          .then((res) => {
            fileDownload(res.data, "FichaTecnica.pdf");
            Swal.fire({
              title: "Descargada",
              text: "La propiedad se ha descargado correctamente!",
              icon: "success",
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
  //Agrega las fotos de la propiedad
  const AddMultimediaProperty = (data) => {
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
              icon: "success",
            }).then(() => {
              window.location.href = "/PropertiesPending";
            });
            dispatch({
              type: ADD_MULTIMEDIA_PROPERTY,
              payload: res.data.data,
            });
          })
          .catch((error) => {
            Swal.fire({
              title: "Error",
              icon: "error",
              text: error.response.data.message,
            });
          });
      }
    });
  };
  //Elimina una propiedad
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
        let url = `/properties/${id}`;
        MethodDelete(url)
          .then((res) => {
            Swal.fire({
              title: "Eliminado",
              text: "La propiedad se ha eliminado correctamente!",
              icon: "success",
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
            });
          });
      }
    });
  };
  // Publica una propiedad
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
              text: "¡La propiedad se ha publicado correctamente!",
              icon: "success",
            }).then((res) => {
              window.location.href = "/Properties";
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
  //Regresa la propiedad a pendiente
  const BackPendingProperty = (id) => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "La Propiedad Seleccionada Regresara a Pendiente",
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
            }).then(() => {
              window.location.href = "/PropertiesPending";
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
        GetPropertiesPublishSearch,
        AddProperty,
        SearchProperties,
        UpdateProperty,
        DeleteProperty,
        PublishProperty,
        DownloadPDF,
        BackPendingProperty,
        AddMultimediaProperty,
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};

export default PropertiesState;
