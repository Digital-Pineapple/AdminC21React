import { DELETE_VISITS, GET_ALL_VISITS } from "../../types/index";
const VisitReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_VISITS:
      return {
        ...state,
        visits: action.payload,
        success: true,
        ErrorsApi: [],
      };
    case DELETE_VISITS:
      return {
        ...state,
        visits: state.visits.filter(
          (visit) => visit.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default VisitReducer;
