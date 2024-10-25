import React from "react";
import {
  GET_ALL_CATEGORIES,
  ADD_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
} from "../../types/index";
const CategoryReducer = (state, action) => {
  switch (action.type) {
    // Caso para consultar las categorías
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        success: false,
        ErrorsApi: [],
      };
    // Caso para el registro de categorías
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [action.payload, ...state.categories],
      };
    // Caso para la edición de categorías 
    case UPDATE_CATEGORY:
      return {
        ...state,
        ErrorsAPI: [],
        categories: state.categories.map((category) => {
          if (category.id === action.payload.id) {
            category = action.payload;
          }
          return category;
        }),
      };
    // Caso para la eliminación de categorías
    case DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(
          (category) => category.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default CategoryReducer;
