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
  const history = useHistory();
  const initialState = {
    token: localStorage.getItem("token"),
    autenticado: false,
    usuario: {},
    User: {},
    cargando: true,
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

  //Register
  const AddUser = (datos) => {
    let url = "/register";
    MethodPost(url, datos)
      .then((res) => {
        console.log(res);
        dispatch({
          type: types.REGISTRO_EXITOSO,
          payload: res.data.data,
        });
        Swal.fire({
          title: "¡Registro exitoso!",
          text: "Ahora puedes iniciar sesion",
          icon: "success",
        }).then(() => {
          window.location.href = "/iniciar-sesion";
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

  //Register
  const AddUsera = (datos) => {
    let url = "/register";
    MethodPost(url, datos)
      .then((res) => {
        console.log(res);
        dispatch({
          type: types.REGISTRO_EXITOSO,
          payload: res.data.data,
        });
        Swal.fire({
          title: "¡Registro exitoso!",
          text: "Hemos enviado un código de verificación a tu correo electrónico. Por favor, revisa tu bandeja de entrada y, si es necesario, tu carpeta de spam.",
          icon: "success",
        }).then(() => {
          const token = res.data.access_token;
          tokenAuth(token);
          MethodGet("/verify-account")
            .then((res) => {
              console.log(res.data.message);
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
  const VerifyCode = (datos) => {
    let url = "/verify-account-check";
    const headerConfig = {
      headers: {
        "Content-type": "aplication/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    MethodPost(url, datos, headerConfig)
      .then((res) => {
        console.log(res);
        dispatch({
          type: types,
          payload: res.data.data,
        });
        Swal.fire({
          title: "Código",
          text: "Valido correctamente",
          icon: "success",
        });
        usuarioAutenticado();
      })
      .catch((error) => {
        Swal.fire({
          title: "Código",
          icon: "Incorrecto, Intenta de nuevo",
          text: error.response.data.message,
        });
        dispatch({
          type: SHOW_ERRORS_API,
        });
      });
  };

  // Edita la informacion del usuario
  const EditInfo = (data) => {
    let url = `/updateProfile`;
    MethodPut(url, data)
      .then((res) => {
        Swal.fire({
          title: "¡ Informacion !",
          text: "Modificada Correctamente",
          icon: "success",
        });
        dispatch({
          type: types.UPDATE_INFO,
          payload: res.data,
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

  // Registra un nuevo Usuario
  const NewUser = (datos) => {
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
          text: "Usuario registrado correctamente",
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

  //cuando el usuario Ccambia de contraseña
  const ChangePasswordUser = (datos) => {
    let url = "/resetPassword";
    MethodPost(url, datos)
      .then((res) => {
        Swal.fire({
          title: "¡ Contraseña !",
          text: "Modificada Correctamente",
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

  //cuando el usuario Ccambia de contraseña
  const ResetPassword = (datos) => {
    let url = "/forgotPassword";
    MethodPost(url, datos)
      .then((res) => {
        Swal.fire({
          title: "Verificado",
          text: "Se ha enviado un correo electrónico con tu nueva contraseña generada.",
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

  // Cambiar Imagen de Perfil
  const ChangePhoto = (data) => {
    Swal.fire({
      title: "Agregar Imagen",
      text: "¿Estás seguro de agregar esta imagen?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, Aceptar",
      cancelButtonText: "No, cancelar",
    }).then((result) => {
      if (result.value) {
        let url = "/profile/image/update";
        const formData = new FormData();
        formData.append("image", data.image);

        MethodPost(url, formData, { headerConfig })
          .then((res) => {
            Swal.fire({
              title: "¡Foto!",
              text: "Modificada Correctamente",
              icon: "success",
            }).then((result) => {
              if (result.value) {
                window.location.reload();
              }
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
      }
    });
  };

  //Cierrra sesion del usuario
  const cerrarSesion = () => {
    localStorage.removeItem("type_user");
    localStorage.removeItem("user_id");
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
        iniciarSesion,
        usuarioAutenticado,
        ResetPassword,
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
