import { GET_DIRECTIONS_USER, types } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case types.REGISTRO_EXITOSO:
      return {
        ...state,
      };
    case types.LOGIN_EXITOSO:
      localStorage.setItem("token", action.payload.access_token);
      localStorage.setItem("usuaio", JSON.stringify(action.payload.data));
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
    // case GET_DIRECTIONS_USER:
    //   return {
    //     ...state,
    //     directions: action.payload,
    //     cargando: false,
    //     errorsApi: [],
    //   };
    case types.USER_CHANGEPASSWORD:
      return {
        ...state,
        autenticado: true,
        cargando: false,
      };

    case types.UPDATE_INFO:
      let xd = JSON.parse(localStorage.getItem("usuaio"));
      let hoila = action.payload.data;
      hoila.image = xd.image;

      localStorage.setItem("usuaio", JSON.stringify(hoila));
      return {
        ...state,
        autenticado: true,
        cargando: false,
      };

    case types.USER_CHANGEPHOTO:
      return {
        ...state,
        autenticado: true,
        cargando: false,
        success: true,
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
