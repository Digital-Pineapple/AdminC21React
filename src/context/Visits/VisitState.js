import React, { useReducer } from "react";
import VisitContext from "./VisitContext";
import VisitReducer from "./VisitReducer";
import {
  DELETE_VISITS,
  GET_ALL_VISITS,
  ACCEPT_VISIT,
  GET_ALL_VISITS_APPROVED,
  BACK_PENDING_VISIT,
  GET_ALL_VISITS_CLIENT,
  UPDATE_VISIT,
  DELETE_VISITS_CLIENT,
} from "../../types";
import MethodGet, { MethodDelete, MethodPost } from "../../config/service";
import Swal from "sweetalert2";
const VisitState = ({ children }) => {
  const initialState = {
    visits: [],
    visitsApproved: [],
    visitsClient: [],
    ErrorsApi: [],
    success: false,
  };
  const [state, dispatch] = useReducer(VisitReducer, initialState);

  //Consulta las visitas pendientes
  const GetVisitPending = () => {
    let user_id = localStorage.getItem("user_id");
    let type_user = localStorage.getItem("type_user");
    if (type_user === "1") {
      let url = `/visitPending`;
      MethodGet(url)
        .then((res) => {
          dispatch({
            type: GET_ALL_VISITS,
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
      let url = `/visitTypeUserPending/${user_id}`;
      MethodGet(url)
        .then((res) => {
          dispatch({
            type: GET_ALL_VISITS,
            payload: res.data.data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  //Consulta las visitas aprobadas
  const GetVisitApproved = () => {
    let user_id = localStorage.getItem("user_id");
    let type_user = localStorage.getItem("type_user");
    if (type_user === "1") {
      let url = `/indexApproved`;
      MethodGet(url)
        .then((res) => {
          dispatch({
            type: GET_ALL_VISITS_APPROVED,
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
      let url = `/indexTypeUserApproved/${user_id}`;
      MethodGet(url)
        .then((res) => {
          dispatch({
            type: GET_ALL_VISITS_APPROVED,
            payload: res.data.data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  //Elimina las visitas pendientes
  const DeleteVisit = (id) => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "La visita seleccionada será eliminada",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "No, cancelar",
    }).then((result) => {
      if (result.value) {
        let url = `/visitDestroy/${id}`;
        MethodDelete(url)
          .then((res) => {
            Swal.fire({
              title: "Eliminado",
              text: res.data.message,
              icon: "success",
            });
            dispatch({
              type: DELETE_VISITS,
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

  //Elimina las visitas del cleinte
  const DeleteVisitClient = (id) => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "La visita seleccionada será eliminada",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "No, cancelar",
    }).then((result) => {
      if (result.value) {
        let url = `/visitDestroy/${id}`;
        MethodDelete(url)
          .then((res) => {
            Swal.fire({
              title: "Eliminado",
              text: res.data.message,
              icon: "success",
            });
            dispatch({
              type: DELETE_VISITS_CLIENT,
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

  // Acepta una visita
  const AcceptVisit = (id) => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "La visita seleccionada será aprobada",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, aprobar",
      cancelButtonText: "No, cancelar",
    }).then((result) => {
      if (result.value) {
        let url = `/booking/approve/${id}`;
        MethodPost(url)
          .then((res) => {
            Swal.fire({
              title: "Aprobada",
              text: "¡La visita se ha aprobado correctamente!",
              icon: "success",
            }).then((res) => {
              window.location.href = "/VisitApproved";
            });
            dispatch({
              type: ACCEPT_VISIT,
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

  // Cancela una visita
  const BackPendingVisit = (id) => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "La visita seleccionada será cancelada",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, cancelar",
      cancelButtonText: "No, regresar",
    }).then((result) => {
      if (result.value) {
        let url = `/booking/revert/${id}`;
        MethodPost(url)
          .then((res) => {
            Swal.fire({
              title: "Cancelada",
              text: "¡La visita se ha cancelado correctamente!",
              icon: "success",
            }).then(() => {
              window.location.href = "/VisitPending";
            });
            dispatch({
              type: BACK_PENDING_VISIT,
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

  //Consulta las visitas pendientes
  const GetVisitClient = () => {
    let user_id = localStorage.getItem("user_id");
    let type_user = localStorage.getItem("type_user");
    if (type_user === "1") {
      let url = `/indexClient`;
      MethodGet(url)
        .then((res) => {
          dispatch({
            type: GET_ALL_VISITS_CLIENT,
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
      let url = `/indexTypeUserClient/${user_id}`;
      MethodGet(url)
        .then((res) => {
          dispatch({
            type: GET_ALL_VISITS_CLIENT,
            payload: res.data.data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  //Edita la informacion de las visitas
  const EditVisit = (data) => {
    let url = `/bookEdit/${data.id}`;
    MethodPost(url, data)
      .then((res) => {
        Swal.fire({
          title: "¡ Visita !",
          text: "Modificada Correctamente, Espera a que sea aprobada nuevamente",
          icon: "success",
        });
        dispatch({
          type: UPDATE_VISIT,
          payload: res.data.data,
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: error.response.data.errors[0],
          icon: "error",
        });
      });
  };

  return (
    <VisitContext.Provider
      value={{
        visits: state.visits,
        visitsApproved: state.visitsApproved,
        visitsClient: state.visitsClient,
        ErrorsApi: state.ErrorsApi,
        success: state.success,
        GetVisitPending,
        DeleteVisit,
        AcceptVisit,
        GetVisitApproved,
        BackPendingVisit,
        GetVisitClient,
        EditVisit,
        DeleteVisitClient,
      }}
    >
      {children}
    </VisitContext.Provider>
  );
};

export default VisitState;
