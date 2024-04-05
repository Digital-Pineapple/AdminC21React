//login e inicio de sesion
export const types = {
  MOSTRAR_ALERTA: "[AUTH] mostrar alerta",
  OCULTAR_ALERTA: "[AUTH] ocultar alerta",
  LOGIN_ERROR: "[AUTH] login error",
  LOGIN_EXITOSO: "[AUTH] login existoso",
  OBTENER_USUARIO: "[AUTH] obtener usuario",
  CERRAR_SESION: "[AUTH] cerrar sesion",
  INICIAR_SESION: "[AUTH] inicia sesion",
  USER_CHANGEPASSWORD: "[AUTH] USER_CHANGEPASSWORD",
};

//Errors API
export const SHOW_ERRORS_API = "SHOW_ERRORS_API";
//categories
export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES";
export const ADD_CATEGORY = "ADD_CATEGORY";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";
//services
export const GET_ALL_SERVICES = "GET_ALL_SERVICES";
export const ADD_SERVICE = "ADD_SERVICE";
export const UPDATE_SERVICE = "UPDATE_SERVICE";
export const DELETE_SERVICE = "DELETE_SERVICE";
//visits
export const GET_ALL_VISITS = "GET_ALL_VISITS";
export const DELETE_VISITS = "DELETE_VISITS";
//users
export const GET_ALL_USERS = "GET_ALL_USERS";
export const ADD_USERS = "ADD_USERS";
export const UPDATE_USERS = "UPDATE_USERS";
export const UPDATE_USERS_INM = "UPDATE_USERS_INM";
export const DELETE_USERS = "DELETE_USERS";
export const GET_USER_ME = "GET_USER_ME";
export const UPDATE_INFO = "UPDATE_INFO";
export const USER_CHANGEPHOTO = "USER_CHANGEPHOTO";
//properties
export const CLEAN_PROPERTIES = "CLEAN_PROPERTIES";
export const GET_ALL_PROPERTIES_PUBLISH = "GET_ALL_PROPERTIES_PUBLISH";
export const GET_ALL_PROPERTIES_PENDING = "GET_ALL_PROPERTIES_PENDING";
export const ADD_PROPERTY = "ADD_PROPERTY";
export const GET_PROPERTY = "GET_PROPERTY";
export const UPDATE_PROPERTY = "UPDATE_PROPERTY";
export const DELETE_PROPERTY = "DELETE_PROPERTY";
export const ADD_SERVICE_PROPERTY = "ADD_SERVICE_PROPERTY";
export const UPDATE_SERVICE_PROPERTY = "UPDATE_SERVICE_PROPERTY";
export const ADD_MULTIMEDIA_PROPERTY = "ADD_MULTIMEDIA_PROPERTY";
export const UPDATE_MULTIMEDIA_PROPERTY = "UPDATE_MULTIMEDIA_PROPERTY";
export const DETAIL_PROPERTY = "DETAIL_PROPERTY";
export const PUBLISH_PROPERTY = "PUBLISH_PROPERTY";
export const BACK_PENDING_PROPERTY = "BACK_PENDING_PROPERTY";
//dashboard
export const TOTAL_USER = "TOTAL_USERS";
export const TOTAL_PROPERTIES = "TOTAL_PROPERTIES";
export const TOTAL_PROPERTIES_SOLD = "TOTAL_PROPERTIES_SOLD";
export const TOTAL_PROPERTIES_RENT = "TOTAL_PROPERTIES_RENT";
