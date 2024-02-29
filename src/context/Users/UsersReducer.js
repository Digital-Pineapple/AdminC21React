import {
  ADD_USERS,
  DELETE_USERS,
  GET_ALL_USERS,
  UPDATE_USERS,
} from "../../types/index";
const UsersReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
        success: false,
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
        users: state.users.map((user) => {
          if (user.id === action.payload.id) {
            user = action.payload;
          }
          return user;
        }),
        ErrorsApi: [],
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
