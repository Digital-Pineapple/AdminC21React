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
    // Case para consultar el total de propiedades
    case TOTAL_PROPERTIES:
      return {
        ...state,
        total_properties: action.payload,
        ErrorsAPI: [],
      };
    // Case para consultar el total de inmuebles en renta
    case TOTAL_PROPERTIES_RENT:
      return {
        ...state,
        total_properties_rent: action.payload,
        ErrorsAPI: [],
      };
    // Case para consultar el total de inmuebles en venta
    case TOTAL_PROPERTIES_SOLD:
      return {
        ...state,
        total_properties_sold: action.payload,
        ErrorsAPI: [],
      };
    // Case para consultar el total de usuarios
    case TOTAL_USER:
      return {
        ...state,
        total_users: action.payload,
        ErrorsAPI: [],
      };
    // Case para consultar el total de asesores por inmobiliaria
    case TOTAL_USER_INM:
      return {
        ...state,
        total_usersInm: action.payload,
        ErrorsAPI: [],
      };
    default:
      return state;
  }
};

export default DashboardReducer;
