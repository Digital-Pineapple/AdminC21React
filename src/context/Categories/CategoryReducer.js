import React from "react";
import {
  GET_ALL_CATEGORIES,
  ADD_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
} from "../../types/index";
const CategoryReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        success: false,
        ErrorsApi: [],
      };
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [action.payload, ...state.categories],
      };
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
    case DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(
          (category) => category._id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default CategoryReducer;
