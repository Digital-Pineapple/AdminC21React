import React, { useReducer } from "react";
import ReportContext from "./ReportContext";
import ReportReducer from "./ReportReducer";
import Swal from "sweetalert2";
import MethodGet, { MethodPost } from "../../config/service";
import { ADD_REPORT, GET_ALL_REPORT } from "../../types";

const ReportState = ({ children }) => {
  const initialState = {
    reports: [],
    ErrorsApi: [],
    success: false,
  };
  const [state, dispatch] = useReducer(ReportReducer, initialState);

  //No en uso
  const GetReportVisits = (id) => {
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
        }).then(() => {
          window.location.reload();
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          icon: "error",
          text: error.response.data.message,
        });
        console.log(error, "error");
      });
  };
  return (
    <ReportContext.Provider
      value={{
        AddReportVisits,
        GetReportVisits,
      }}
    >
      {children}
    </ReportContext.Provider>
  );
};

export default ReportState;