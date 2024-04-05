import {
  ADD_USERS,
  DELETE_USERS,
  GET_ALL_USERS,
  UPDATE_USERS,
  UPDATE_USERS_INM,
} from "../../types/index";
const UsersReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
        success: true,
        ErrorsApi: [],
      };
    case ADD_USERS:
      return {
        ...state,
        users: [action.payload, ...state.users],
      };
    case UPDATE_USERS:
      return {
        ...state,
        ErrorsApi: [],
        users: state.users.map((user) => {
          if (user.id === action.payload.id) {
            user = action.payload;
          }
          return user;
        }),
      };
    case UPDATE_USERS_INM:
      return {
        ...state,
        ErrorsApi: [],
        users: state.users.map((user) => {
          if (user.id === action.payload.id) {
            user = action.payload;
          }
          return user;
        }),
      };

    case DELETE_USERS:
      return {
        ...state,
        users: state.users.filter((service) => service.id !== action.payload),
      };
    default:
      return state;
  }
};

export default UsersReducer;
