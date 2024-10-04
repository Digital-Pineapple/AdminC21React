import React, { useReducer } from "react";
import { useTranslation } from "react-i18next";
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
  RENT_PROPERTY,
  SOLD_PROPERTY,
  SOLD_TO_PUBLISHED,
  RENTED_TO_PUBLISHED,
} from "../../types";
import Swal from "sweetalert2";
import PropertiesContext from "./PropertiesContext";
const PropertiesState = ({ children }) => {
  const { t } = useTranslation();
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
    } else if (type_user === "2" || type_user === "3" || type_user === "5") {
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
  //Consulta todas las propiedades en venta
  const GetPropertiesPublishSold = () => {
    dispatch({
      type: CLEAN_PROPERTIES,
    });
    let user_id = localStorage.getItem("user_id");
    let type_user = localStorage.getItem("type_user");
    if (type_user === "1") {
      let url = "/getSOLD";
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
    } else if (type_user === "2" || type_user === "3" || type_user === "5") {
      let url = `/getSOLDTypeUser/${user_id}`;
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
  //Consulta todas las propiedades rentadas
  const GetPropertiesPublishRent = () => {
    dispatch({
      type: CLEAN_PROPERTIES,
    });
    let user_id = localStorage.getItem("user_id");
    let type_user = localStorage.getItem("type_user");
    if (type_user === "1") {
      let url = "/getRENTED";
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
    } else if (type_user === "2" || type_user === "3" || type_user === "5") {
      let url = `/getRENTEDTypeUser/${user_id}`;
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
    } else if (
      type_user === "2" ||
      type_user === "3" ||
      type_user === "4" ||
      type_user === "5"
    ) {
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
    if (type_user === "1" || type_user === "2") {
      MethodPost(url, data)
        .then((res) => {
          dispatch({
            type: ADD_PROPERTY,
            payload: res.data.data,
          });
          Swal.fire({
            title: t("Registrado"),
            text: t("PropiedadRegistrado"),
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
    } else if (type_user === "3" || type_user === "5") {
      MethodPost(url, data)
        .then((res) => {
          Swal.fire({
            title: t("Registrado"),
            text: t("propiedadRegistrado"),
            icon: "success",
          }).then(() => {
            window.location.href = "/PropertiesPending";
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
      state: data.state,
      municipality: data.municipality,
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
          title: t("Editado"),
          text: t("EditadoProp"),
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
      title: t("estasSeguro"),
      text: t("downloadPDF"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: t("siPublicar"),
      cancelButtonText: t("noCancelar"),
    }).then((result) => {
      if (result.value) {
        let url = `/generatePDF/${id}`;
        clientAxios
          .get(url, { responseType: "blob" })
          .then((res) => {
            fileDownload(res.data, "FichaTecnica.pdf");
            Swal.fire({
              title: t("Descargado"),
              text: t("laPropiedadseDescargo"),
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
      title: t("agregarImagen"),
      text: t("estasSeguroAgregar"),
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: t("siPublicar"),
      cancelButtonText: t("noCancelar"),
    }).then((result) => {
      if (result.value) {
        const formData = new FormData();
        formData.append("file", data.image);
        let url = `/property/images/${data.property_id}`;
        MethodPost(url, formData, { headerConfig })
          .then((res) => {
            Swal.fire({
              title: t("Listo"),
              text: t("imgProp"),
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
              text: "Esta imagen no es compatible. Por favor, selecciona otra imagen.",
            });
          });
      }
    });
  };
  //Elimina una propiedad
  const DeleteProperty = (id) => {
    Swal.fire({
      title: t("estasSeguro"),
      text: t("laPropiedadSeraEliminada"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: t("siEliminar"),
      cancelButtonText: t("noCancelar"),
    }).then((result) => {
      if (result.value) {
        let url = `/properties/${id}`;
        MethodDelete(url)
          .then((res) => {
            Swal.fire({
              title: t("Eliminado"),
              text: t("eliminarProp"),
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
      title: t("estasSeguro"),
      text: t("laPropiedadSeraPublicada"),
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: t("siPublicar"),
      cancelButtonText: t("noCancelar"),
    }).then((result) => {
      if (result.value) {
        let url = `/properties/${id}/publish`;
        MethodPost(url)
          .then((res) => {
            Swal.fire({
              title: t("Publicado"),
              text: t("propiedadPublicada"),
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
      title: t("estasSeguro"),
      text: t("regresaraPendiente"),
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: t("siPublicar"),
      cancelButtonText: t("noCancelar"),
    }).then((result) => {
      if (result.value) {
        let url = `/properties/${id}/pending`;
        MethodPost(url)
          .then((res) => {
            Swal.fire({
              title: t("Pendiente"),
              text: t("propiedadPendiente"),
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
  // Pasa la propiedad a vendida
  const SoldProperty = (id) => {
    Swal.fire({
      title: t("estasSeguro"),
      text: t("laPropiedadVendida"),
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: t("siPublicar"),
      cancelButtonText: t("noCancelar"),
    }).then((result) => {
      if (result.value) {
        let url = `/sold/${id}`;
        MethodPost(url)
          .then((res) => {
            Swal.fire({
              title: t("Listo"),
              text: t("haPasadoAVendida"),
              icon: "success",
            }).then(() => {
              window.location.href = "/SoldProperties";
            });
            dispatch({
              type: SOLD_PROPERTY,
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
  // Pasa la propiedad a rentada
  const RentProperty = (id) => {
    Swal.fire({
      title: t("estasSeguro"),
      text: t("laPropiedadRentada"),
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: t("siPublicar"),
      cancelButtonText: t("noCancelar"),
    }).then((result) => {
      if (result.value) {
        let url = `/rented/${id}`;
        MethodPost(url)
          .then((res) => {
            Swal.fire({
              title: t("Listo"),
              text: t("haPasadoARentada"),
              icon: "success",
            }).then(() => {
              window.location.href = "/RentProperties";
            });
            dispatch({
              type: RENT_PROPERTY,
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

  // Pasa la propiedad de vendida a publicada
  const SoldToPublished = (id) => {
    Swal.fire({
      title: t("estasSeguro"),
      text: t("laPropiedadPublicada"),
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: t("siPublicar"),
      cancelButtonText: t("noCancelar"),
    }).then((result) => {
      if (result.value) {
        let url = `/SoldToPublished/${id}`;
        MethodPost(url)
          .then((res) => {
            Swal.fire({
              title: t("Listo"),
              text: t("haPublicadoNuevamente"),
              icon: "success",
            }).then(() => {
              window.location.href = "/Properties";
            });
            dispatch({
              type: SOLD_TO_PUBLISHED,
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

  // Pasa la propiedad de rentada  a publicada
  const RentedToPublished = (id) => {
    Swal.fire({
      title: t("estasSeguro"),
      text: t("laPropiedadPublicada"),
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: t("siPublicar"),
      cancelButtonText: t("noCancelar"),
    }).then((result) => {
      if (result.value) {
        let url = `/RentedToPublished/${id}`;
        MethodPost(url)
          .then((res) => {
            Swal.fire({
              title: t("Listo"),
              text: t("haPublicadoNuevamente"),
              icon: "success",
            }).then(() => {
              window.location.href = "/Properties";
            });
            dispatch({
              type: RENTED_TO_PUBLISHED,
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
        GetPropertiesPublishSold,
        GetPropertiesPublishRent,
        SoldProperty,
        RentProperty,
        SoldToPublished,
        RentedToPublished,
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};

export default PropertiesState;
