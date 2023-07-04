import React from "react";
import {
  ADD_MULTIMEDIA_PROPERTY,
  ADD_PROPERTY,
  ADD_SERVICE_PROPERTY,
  BACK_PENDING_PROPERTY,
  DELETE_PROPERTY,
  DETAIL_PROPERTY,
  GET_ALL_PROPERTIES_PENDING,
  GET_ALL_PROPERTIES_PUBLISH,
  PUBLISH_PROPERTY,
  UPDATE_MULTIMEDIA_PROPERTY,
  UPDATE_PROPERTY,
  UPDATE_SERVICE_PROPERTY,
} from "../../types";

const PropertiesReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_PROPERTIES_PENDING:
      return {
        ...state,
        properties: action.payload,
        success: false,
        ErrorsApi: [],
      };
    case GET_ALL_PROPERTIES_PUBLISH:
      return {
        ...state,
        properties: action.payload,
        success: false,
        ErrorsApi: [],
      };
    case ADD_PROPERTY:
      return {
        ...state,
        properties: [action.payload, ...state.properties],
        ErrorsApi: [],
      };
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
    case DELETE_PROPERTY:
      return {
        ...state,
        properties: state.properties.filter(
          (property) => property.id !== action.payload
        ),
      };
    case ADD_SERVICE_PROPERTY:
      return {
        ...state,
        properties: state.properties.map((property) =>
          property.id === action.payload.id ? { ...action.payload } : property
        ),
        ErrorsApi: [],
      };
    case UPDATE_SERVICE_PROPERTY:
      return {
        ...state,
        properties: state.properties.map((property) =>
          property.id === action.payload.id ? { ...action.payload } : property
        ),
        ErrorsApi: [],
      };
    case ADD_MULTIMEDIA_PROPERTY:
      return {
        ...state,
        properties: state.properties.map((property) =>
          property.id === action.payload.id ? { ...action.payload } : property
        ),
        ErrorsApi: [],
      };
    case UPDATE_MULTIMEDIA_PROPERTY:
      return {
        ...state,
        properties: state.properties.map((property) =>
          property.id === action.payload.id ? { ...action.payload } : property
        ),
        ErrorsApi: [],
      };
    case PUBLISH_PROPERTY:
      return {
        ...state,
        properties: state.properties.filter(
          (property) => property.id !== action.payload
        ),
      };
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
