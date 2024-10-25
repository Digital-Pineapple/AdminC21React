import { ADD_REPORT, GET_ALL_REPORT, UPDATE_REPORT } from "../../types";

const ReportReducer = (state, action) => {
  switch (action.type) {
    // Case que obtiene los reportes asociados a su propiedad
    case GET_ALL_REPORT:
      return {
        ...state,
        reports: action.payload,
        success: false,
        ErrorsApi: [],
      };
    // Case que registra un nuevo reporte de visitas
    case ADD_REPORT:
      const addBookingData = {
        ...state.reports.bookingData,
        report_booking: [action.payload],
      };
      return {
        ...state,
        ErrorsApi: [],
        reports: {
          ...state.reports,
          bookingData: addBookingData,
        },
      };
    // Case que edita un reporte existente
    case UPDATE_REPORT:
      const updatedBookingData = {
        ...state.reports.bookingData,
        report_booking: [action.payload],
      };
      return {
        ...state,
        ErrorsApi: [],
        reports: {
          ...state.reports,
          bookingData: updatedBookingData,
        },
      };
    default:
      return state;
  }
};

export default ReportReducer;
