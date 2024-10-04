import React, { useReducer } from "react";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import MethodGet, { MethodPost, MethodPut } from "../../config/service";
import headerConfig from "../../config/imageHeaders";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

/**Importar componente token headers */
import tokenAuth from "../../config/TokenAuth";

import {
  SHOW_ERRORS_API,
  types,
  GET_USER_ME,
  UPDATE_INFO,
  USER_CHANGEPHOTO,
} from "../../types";

import Swal from "sweetalert2";

const AuthState = (props) => {
  const { t } = useTranslation();
  //Agregar state inicial
  const initialState = {
    token: localStorage.getItem("token"),
    autenticado: false,
    usuario: {},
    User: {},
    user_me: null,
    cargando: true,
    success: false,
    directions: [],
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);
  //Retorna el usuario autenticado
  const usuarioAutenticado = async (datos) => {
    const token = localStorage.getItem("token");

    if (token) {
      tokenAuth(token);
    }

    MethodGet("/user")
      .then(({ data }) => {
        localStorage.setItem("type_user", data.type_user);
        localStorage.setItem("user_id", data.id);
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

  //Cuando el usuario inicia sesion
  const iniciarSesion = (datos) => {
    let url = "/login";
    MethodPost(url, datos)
      .then((res) => {
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

  //Registro de usuario de la pagina web
  const AddUser = (datos) => {
    let url = "/register";
    MethodPost(url, datos)
      .then((res) => {
        dispatch({
          type: types.REGISTRO_EXITOSO,
          payload: res.data.data,
        });
        Swal.fire({
          title: t("registroExitoso"),
          text: t("emailCuenta"),
          icon: "success",
        }).then(() => {
          const token = res.data.access_token;
          localStorage.setItem("mi token", token);
          tokenAuth(token);
          MethodGet("/verify-account")
            .then((res) => {
              window.location.href = "/verificar-cuenta";
            })
            .catch((error) => {
              console.error(
                "Error al enviar el código de verificación:",
                error
              );
            });
        });
      })
      .catch((error) => {
        let errorMessage = "Error al procesar la solicitud";
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          errorMessage = error.response.data.message;
        }
        Swal.fire({
          title: "Error",
          icon: "error",
          text: errorMessage,
        });
        dispatch({
          type: SHOW_ERRORS_API,
        });
      });
  };

  // Función para verificar el código de verificación
  const VerifyCode = (datos, token) => {
    tokenAuth(token);
    let url = "/verify-account-check";
    MethodPost(url, datos)
      .then((res) => {
        dispatch({
          type: types,
          payload: res.data.data,
        });
        Swal.fire({
          title: "¡Bien!",
          text: res.data.message,
          icon: "success",
        });
        localStorage.setItem("token", token);
        usuarioAutenticado();
      })
      .catch((error) => {
        Swal.fire({
          title: "¡Error!",
          text: error.response.data.message,
          icon: "error",
        });
        dispatch({
          type: SHOW_ERRORS_API,
        });
      });
  };

  //Edita la informacion del usuario
  const EditInfo = (data) => {
    let url = `/updateProfile`;
    MethodPut(url, data)
      .then((res) => {
        Swal.fire({
          title: t("informacion"),
          text: t("modificadaCorrectamente"),
          icon: "success",
        });
        dispatch({
          type: UPDATE_INFO,
          payload: res.data.data,
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

  //Registra un nuevo usuario
  const NewUser = (datos) => {
    let url = "/register";
    MethodPost(url, datos)
      .then((res) => {
        dispatch({
          type: types,
          payload: res.data.data,
        });
        Swal.fire({
          title: t("Registrado"),
          text: t("usuarioRegistrado"),
          icon: "success",
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

  //Registra un nuevo asesor
  const NewUserInm = (datos) => {
    let url = "/registerUserInm";
    MethodPost(url, datos)
      .then((res) => {
        dispatch({
          type: types,
          payload: res.data.data,
        });
        Swal.fire({
          title: t("Registrado"),
          text: "Asesor registrado correctamente",
          icon: "success",
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

  //Cuando el usuario cambia de contraseña
  const ChangePasswordUser = (datos) => {
    let url = "/resetPassword";
    MethodPost(url, datos)
      .then((res) => {
        Swal.fire({
          title: t("contraseña"),
          text: t("modificadaCorrectamente"),
          icon: "success",
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

  //Restablecer la contraseña
  const ResetPassword = (datos) => {
    let url = "/forgotPassword";
    MethodPost(url, datos)
      .then((res) => {
        Swal.fire({
          title: t("verificado"),
          text: t("emailContraseña"),
          icon: "success",
        }).then(() => {
          window.location.href = "/iniciar-sesion";
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: error.response.data.message,
          icon: "error",
        });
      });
  };

  //Cambia la Imagen de Perfil
  const ChangePhoto = (data) => {
    Swal.fire({
      title: t("agregarImagen"),
      text: t("estasSeguroAgregar"),
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: t("siPublicar"),
      cancelButtonText: t("noCancelar"),
    }).then((result) => {
      if (result.value) {
        const formData = new FormData();
        formData.append("image", data.image);
        let url = "/profile/image/update";
        MethodPost(url, formData, { headerConfig })
          .then((res) => {
            Swal.fire({
              title: t("foto"),
              text: t("modificadaCorrectamente"),
              icon: "success",
            }).then(() => {
              window.location.reload();
            });
            dispatch({
              type: USER_CHANGEPHOTO,
              payload: res.data.data,
            });
          })
          .catch((error) => {
            Swal.fire({
              title: "Error",
              icon: "error",
              text: "Esta imagen no es compatible. Por favor, selecciona otra imagen.",
            });
          });
      }
    });
  };

  //Consulta la informacion del usuario autentivcado
  const UserMe = () => {
    let url = "/me";
    MethodGet(url)
      .then((res) => {
        dispatch({
          type: GET_USER_ME,
          payload: res.data.data,
        });
      })
      .catch((error) => {});
  };

  //Cierrra sesion del usuario
  const cerrarSesion = () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("type_user");
    localStorage.removeItem("token");
    localStorage.removeItem("mi token");
    dispatch({
      type: types.CERRAR_SESION,
    });
    window.location.reload();
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
        user_me: state.user_me,
        iniciarSesion,
        usuarioAutenticado,
        ResetPassword,
        UserMe,
        NewUserInm,
        cerrarSesion,
        VerifyCode,
        ChangePasswordUser,
        ChangePhoto,
        AddUser,
        EditInfo,
        NewUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
