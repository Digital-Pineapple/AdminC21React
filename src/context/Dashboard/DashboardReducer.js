import React from "react";
import {
  TOTAL_PROPERTIES,
  TOTAL_PROPERTIES_RENT,
  TOTAL_PROPERTIES_SOLD,
  TOTAL_USER,
  TOTAL_USER_INM,
} from "../../types";

const DashboardReducer = (state, action) => {
  switch (action.type) {
    case TOTAL_PROPERTIES:
      return {
        ...state,
        total_properties: action.payload,
        ErrorsAPI: [],
      };
    case TOTAL_PROPERTIES_RENT:
      return {
        ...state,
        total_properties_rent: action.payload,
        ErrorsAPI: [],
      };
    case TOTAL_PROPERTIES_SOLD:
      return {
        ...state,
        total_properties_sold: action.payload,
        ErrorsAPI: [],
      };
    case TOTAL_USER:
      return {
        ...state,
        total_users: action.payload,
        ErrorsAPI: [],
      };
    default:
      return state;
    case TOTAL_USER_INM:
      return {
        ...state,
        total_usersInm: action.payload,
        ErrorsAPI: [],
      };
  }
};

export default DashboardReducer;
