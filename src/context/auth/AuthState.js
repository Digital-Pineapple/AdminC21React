import React, { useReducer } from "react";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import MethodGet, { MethodPost, MethodPut } from "../../config/service";
import headerConfig from "../../config/imageHeaders";
import { useHistory } from "react-router-dom";


/**Importar componente token headers */
import tokenAuth from "../../config/TokenAuth";

import { SHOW_ERRORS_API, types } from "../../types";

import Swal from "sweetalert2";

const AuthState = (props) => {
  //Agregar state inicial
  const initialState = {
    token: localStorage.getItem("token"),
    autenticado: false,
    usuario: {},
    cargando: false,
    success: false,
    directions: [],
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);
  //funciones
  //Retorna el usuario autenticado
  const usuarioAutenticado = async (datos) => {
    const token = localStorage.getItem("token");

    if (token) {
      tokenAuth(token);
    }

    MethodGet("/user")
      .then(({ data }) => {
        dispatch({
          type: types.OBTENER_USUARIO,
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: types.LOGIN_ERROR,
        });
      });
  };

  //cuando el usuario inicia sesion
  const iniciarSesion = (datos) => {
    let url = "/login";
    MethodPost(url, datos)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: types.LOGIN_EXITOSO,
          payload: res.data,
        });
        usuarioAutenticado();
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          icon: "error",
          text: error.response.data.message,
        });
        dispatch({
          type: SHOW_ERRORS_API,
        });
      });
  };

  const AddUser = (datos) => {
    let url = "/register";
    MethodPost(url, datos)
      .then((res) => {
        console.log(res);
        dispatch({
          type: types,
          payload: res.data.data,
        });
        Swal.fire({
          title: "Registrado",
          text: "Usuario registrado correctamente, Inicia sesión Ahora",
          icon: "success",
        });
        usuarioAutenticado();
        setTimeout(() => {
          window.location.href = '/Properties';
        }, 5000);
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          icon: "error",
          text: error.response.data.message,
        });
        dispatch({
          type: SHOW_ERRORS_API,
        });
      });
  };

  //cuando el usuario Ccambia de contraseña
  const ChangePasswordUser = (datos) => {
    let url = "/admin/auth/changePassword";
    MethodPost(url, datos)
      .then((res) => {
        Swal.fire({
          title: "Contraseña!",
          text: "Modificada Correctamente",
          icon: "success",
          timer: 1000,
          showConfirmButton: false,
        });
        dispatch({
          type: types.USER_CHANGEPASSWORD,
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: error.response.data.message,
          icon: "error",
        });
        dispatch({
          type: SHOW_ERRORS_API,
        });
      });
  };

  //Cambiar Imagen de Perfil
  const ChangePhoto = (datos) => {
    let url = "/admin/auth/update-profile-image";
    const formData = new FormData();
    formData.append("profileImage", datos.image);
    MethodPut(url, formData, { headerConfig })
      .then((res) => {
        Swal.fire({
          title: "Usuario!!",
          text: res.data.message,
          timer: 3000,
          showConfirmButton: false,
          icon: "success",
        });
        dispatch({
          type: types.USER_CHANGEPHOTO,
          payload: res.data,
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          icon: "error",
          text: error.response.data.message,
        });
        dispatch({
          type: SHOW_ERRORS_API,
        });
      });
  };

  //Cierrra sesion del usuario
  const cerrarSesion = () => {
    dispatch({
      type: types.CERRAR_SESION,
    });
  };
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        success: state.success,
        cargando: state.cargando,
        directions: state.directions,
        iniciarSesion,
        usuarioAutenticado,
        cerrarSesion,
        ChangePasswordUser,
        ChangePhoto,
        AddUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
