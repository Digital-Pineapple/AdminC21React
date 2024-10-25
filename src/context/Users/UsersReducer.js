import {
  ADD_USERS,
  DELETE_USERS,
  GET_ALL_USERS,
  UPDATE_USERS,
  UPDATE_USERS_INM,
} from "../../types/index";
const UsersReducer = (state, action) => {
  switch (action.type) {
    // Case que consulta la lista de usuarios
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
        success: true,
        ErrorsApi: [],
      };
    // Case que agrega un nuevo usuario en el admin
    case ADD_USERS:
      return {
        ...state,
        users: [action.payload, ...state.users],
      };
    // Case que edita la información de un usuario existente
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
    // Case que edita la información de un asesor existente
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
    // Case que elimina un usuario del sistema
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
