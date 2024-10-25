import {
  DELETE_VISITS,
  GET_ALL_VISITS,
  GET_ALL_VISITS_CLIENT,
  UPDATE_VISIT,
  DELETE_VISITS_CLIENT,
} from "../../types/index";
const VisitReducer = (state, action) => {
  switch (action.type) {
    // Case que consulta todas las visitas disponibles para el administrador y según el tipo de usuario
    case GET_ALL_VISITS:
      return {
        ...state,
        visits: action.payload,
        success: true,
        ErrorsApi: [],
      };
    // Case que elimina las visitas registradas
    case DELETE_VISITS:
      return {
        ...state,
        visits: state.visits.filter((visit) => visit.id !== action.payload),
      };
    // Case que consulta las visitas registradas del cliente
    case GET_ALL_VISITS_CLIENT:
      return {
        ...state,
        visitsClient: action.payload,
        success: true,
        ErrorsApi: [],
      };
    // Case que edita la información de las visitas registradas del cliente
    case UPDATE_VISIT:
      return {
        ...state,
        visitsClient: state.visitsClient.map((visitsClien) => {
          if (visitsClien.id === action.payload.id) {
            visitsClien = action.payload;
          }
          return visitsClien;
        }),
      };
    // Casa que elimina las visitas registradas del cliente
    case DELETE_VISITS_CLIENT:
      return {
        ...state,
        visitsClient: state.visitsClient.filter(
          (visitsClien) => visitsClien.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default VisitReducer;
