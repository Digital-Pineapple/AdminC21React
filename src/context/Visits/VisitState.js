import React, { useReducer } from "react";
import VisitContext from "./VisitContext";
import VisitReducer from "./VisitReducer";
import { DELETE_VISITS, GET_ALL_VISITS, SHOW_ERRORS_API } from "../../types";
import MethodGet, { MethodDelete } from "../../config/service";
import Swal from "sweetalert2";
const VisitState = ({ children }) => {
  const initialState = {
    visits: [],
    ErrorsApi: [],
    success: false,
  };
  const [state, dispatch] = useReducer(VisitReducer, initialState);

  const GetVisit = () => {
    let user_id = localStorage.getItem("user_id");
    let type_user = localStorage.getItem("type_user");
    if (type_user === "1") {
      let url = `/visit`;
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
    } else if (type_user === "2" || type_user === "3" || type_user === "4") {
      let url = `/visitTypeUser/${user_id}`;
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

  //Elimina las visitas
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
              timer: 1500,
              showConfirmButton: false,
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
              showConfirmButton: true,
            });
          });
      }
    });
  };

  return (
    <VisitContext.Provider
      value={{
        visits: state.visits,
        ErrorsApi: state.ErrorsApi,
        success: state.success,
        GetVisit,
        DeleteVisit,
      }}
    >
      {children}
    </VisitContext.Provider>
  );
};

export default VisitState;
