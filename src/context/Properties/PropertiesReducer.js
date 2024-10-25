import React from "react";
import {
  ADD_MULTIMEDIA_PROPERTY,
  ADD_PROPERTY,
  BACK_PENDING_PROPERTY,
  CLEAN_PROPERTIES,
  DELETE_PROPERTY,
  GET_ALL_PROPERTIES_PENDING,
  GET_ALL_PROPERTIES_PUBLISH,
  GET_PROPERTY,
  PUBLISH_PROPERTY,
  UPDATE_PROPERTY,
} from "../../types";

const PropertiesReducer = (state, action) => {
  switch (action.type) {
    // Case para consultar el total de propiedades en estado pendiente
    case GET_ALL_PROPERTIES_PENDING:
      return {
        ...state,
        properties: action.payload,
        success: true,
        ErrorsApi: [],
      };
    // Case para consultar todas las propiedades que están publicadas
    case GET_ALL_PROPERTIES_PUBLISH:
      return {
        ...state,
        properties: action.payload,
        success: true,
        ErrorsApi: [],
      };
    // Case para consultar todas las propiedades que estan en renta y venta
    case CLEAN_PROPERTIES:
      return {
        ...state,
        properties: [],
        success: false,
        ErrorsApi: [],
      };
    // Case que devuelve las propiedades segun el filto de búsqueda
    case GET_PROPERTY:
      return {
        ...state,
        properties: action.payload,
        success: true,
        ErrorsApi: [],
      };
    // Case que agrega una nueva propiedad al sistema
    case ADD_PROPERTY:
      return {
        ...state,
        properties: [action.payload, ...state.properties],
        ErrorsApi: [],
      };
    // Case que edita una propiedad existente
    case UPDATE_PROPERTY:
      return {
        ...state,
        properties: state.properties.map((property) => {
          if (property.id === action.payload.id) {
            property = action.payload;
          }
          return property;
        }),
        ErrorsApi: [],
      };
    // Case que elimina la propiedad
    case DELETE_PROPERTY:
      return {
        ...state,
        properties: state.properties.filter(
          (property) => property.id !== action.payload
        ),
      };
    // Case que agrega las fotos asociadas a la propiedad
    case ADD_MULTIMEDIA_PROPERTY:
      return {
        ...state,
        properties: state.properties.map((property) =>
          property.id === action.payload.id ? { ...action.payload } : property
        ),
        ErrorsApi: [],
      };
    // Case que publica una nueva propiedad
    case PUBLISH_PROPERTY:
      return {
        ...state,
        properties: state.properties.filter(
          (property) => property.id !== action.payload
        ),
      };
    // Case que regresa la propiedad a pendiente
    case BACK_PENDING_PROPERTY:
      return {
        ...state,
        properties: state.properties.filter(
          (property) => property.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default PropertiesReducer;
