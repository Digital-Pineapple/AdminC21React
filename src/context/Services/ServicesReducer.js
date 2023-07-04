import {
  GET_ALL_SERVICES,
  ADD_SERVICE,
  UPDATE_SERVICE,
  DELETE_SERVICE,
} from "../../types/index";
const ServicesReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_SERVICES:
      return {
        ...state,
        services: action.payload,
        success: false,
        ErrorsApi: [],
      };
    case ADD_SERVICE:
      return {
        ...state,
        services: [action.payload, ...state.services],
      };
    case UPDATE_SERVICE:
      return {
        ...state,
        ErrorsAPI: [],
        services: state.services.map((service) => {
          if (service.id === action.payload.id) {
            service = action.payload;
          }
          return service;
        }),
      };
    case DELETE_SERVICE:
      return {
        ...state,
        services: state.services.filter(
          (service) => service.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default ServicesReducer;
