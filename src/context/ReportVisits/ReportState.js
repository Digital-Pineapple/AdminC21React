import React, { useReducer } from "react";
import ReportContext from "./ReportContext";
import ReportReducer from "./ReportReducer";
import Swal from "sweetalert2";
import MethodGet, { MethodPost, MethodPut } from "../../config/service";
import {
  ADD_REPORT,
  GET_ALL_REPORT,
  UPDATE_REPORT,
  ACCEPT_VISIT_CLIENT,
  NOT_ACCEPT_VISIT_CLIENT,
} from "../../types";

const ReportState = ({ children }) => {
  const initialState = {
    reports: [],
    report: null,
    ErrorsApi: [],
    success: false,
  };
  const [state, dispatch] = useReducer(ReportReducer, initialState);
  // Get de los reportes
  const GetReportsVisits = (id) => {
    let url = `/showVisit/${id}`;
    MethodGet(url)
      .then((res) => {
        dispatch({
          type: GET_ALL_REPORT,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Alta de un reporte de las visitas
  const AddReportVisits = (data) => {
    let url = "/reportBooking";
    MethodPost(url, data)
      .then((res) => {
        dispatch({
          type: ADD_REPORT,
          payload: res.data.data,
        });
        Swal.fire({
          title: "Listo",
          text: "El reporte se ha registrado correctamente!",
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

  //Edita un reporte
  const EditReportVisits = (data) => {
    let url = `/reportBooking/${data.id}`;
    MethodPut(url, data)
      .then((res) => {
        dispatch({
          type: UPDATE_REPORT,
          payload: res.data.data,
        });
        Swal.fire({
          title: "Reporte Modificado",
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

  //
  const AcceptVisit = (id) => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "Que el cliente si asistio a la visita",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, aceptar",
      cancelButtonText: "No, cacelar",
    }).then((result) => {
      if (result.value) {
        let url = `/booking/Attended/${id}`;
        MethodPost(url)
          .then((res) => {
            Swal.fire({
              title: "Listo",
              icon: "success",
            }).then(() => {
              window.location.href = "/VisitPending";
            });
            dispatch({
              type: ACCEPT_VISIT_CLIENT,
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

  //
  const NotAcceptVisit = (id) => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "Que el cliente no asistio a la visita",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, aceptar",
      cancelButtonText: "No, cacelar",
    }).then((result) => {
      if (result.value) {
        let url = `/booking/Assistance/${id}`;
        MethodPost(url)
          .then((res) => {
            Swal.fire({
              title: "Listo",
              icon: "success",
            }).then(() => {
              window.location.href = "/VisitPending";
            });
            dispatch({
              type: NOT_ACCEPT_VISIT_CLIENT,
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
    <ReportContext.Provider
      value={{
        reports: state.reports,
        report: state.report,
        ErrorsApi: state.ErrorsApi,
        success: state.success,
        AddReportVisits,
        GetReportsVisits,
        EditReportVisits,
        AcceptVisit,
        NotAcceptVisit,
      }}
    >
      {children}
    </ReportContext.Provider>
  );
};

export default ReportState;
