import { types, GET_USER_ME, UPDATE_INFO, USER_CHANGEPHOTO } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case types.REGISTRO_EXITOSO:
      return {
        ...state,
        autenticado: false,
      };
    case types.LOGIN_EXITOSO:
      localStorage.setItem("token", action.payload.access_token);
      return {
        ...state,
        autenticado: true,
        cargando: false,
      };
    case types.OBTENER_USUARIO:
      return {
        ...state,
        autenticado: true,
        usuario: action.payload,
        cargando: false,
      };
    case GET_USER_ME:
      return {
        ...state,
        user_me: action.payload,
        success: false,
        ErrorsApi: [],
      };
    case UPDATE_INFO:
      return {
        ...state,
        ErrorsAPI: [],
        user_me: {
          ...state.user_me,
          ...action.payload,
        },
      };
    case USER_CHANGEPHOTO:
      return {
        ...state,
        ErrorsAPI: [],
        user_me: {
          ...state.user_me,
          ...action.payload,
        },
      };
    case types.USER_CHANGEPASSWORD:
      return {
        ...state,
        autenticado: true,
        cargando: false,
      };
    case types.LOGIN_ERROR:
    case types.CERRAR_SESION:
      localStorage.removeItem("token");
      localStorage.removeItem("expires_at");
      return {
        ...state,
        token: null,
        usuario: null,
        autenticado: false,
        cargando: false,
      };
    default:
      return state;
  }
};
