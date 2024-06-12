import React, { useReducer } from "react";
import ReportContext from "./ReportContext";
import ReportReducer from "./ReportReducer";
import Swal from "sweetalert2";
import MethodGet, { MethodPost, MethodPut } from "../../config/service";
import { ADD_REPORT, GET_ALL_REPORT, UPDATE_REPORT } from "../../types";

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
          title: "Registrado",
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
      }}
    >
      {children}
    </ReportContext.Provider>
  );
};

export default ReportState;
