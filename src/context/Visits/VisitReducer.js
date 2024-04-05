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
      let newV = state.visits.map((visit) => {
        let copyVisit = visit;
        copyVisit.bookings = visit.bookings.filter(
          (item) => item.id !== action.payload
        );
        return copyVisit;
      });
      return {
        ...state,
        visits: newV,
      };
    default:
      return state;
  }
};

export default VisitReducer;
