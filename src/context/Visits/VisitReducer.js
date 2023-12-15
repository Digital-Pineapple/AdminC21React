import React from "react";
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
    default:
      return state;
  }
};

export default VisitReducer;
