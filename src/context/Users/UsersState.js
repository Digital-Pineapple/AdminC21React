import React, { useReducer } from "react";
import UsersContext from "./UsersContext";
import UsersReducer from "./UsersReducer";
import MethodGet, {
  MethodDelete,
  MethodPost,
  MethodPut,
} from "../../config/service";
import Swal from "sweetalert2";
import {
  ADD_USERS,
  DELETE_USERS,
  GET_ALL_USERS,
  SHOW_ERRORS_API,
  UPDATE_USERS,
  UPDATE_USERS_INM,
} from "../../types";
import { t } from "i18next";
const UsersState = ({ children }) => {
  //estado inicial
  const initialState = {
    users: [],
    user: null,
    ErrorsApi: [],
    success: false,
  };
  const [state, dispatch] = useReducer(UsersReducer, initialState);
  //Consulta los usuarios
  const GetUsers = () => {
    let user_id = localStorage.getItem("user_id");
    let type_user = localStorage.getItem("type_user");
    if (type_user === "1") {
      let url = "/users";
      MethodGet(url)
        .then((res) => {
          dispatch({
            type: GET_ALL_USERS,
            payload: res.data.data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (type_user === "2") {
      let url = `/indexInm/${user_id}`;
      MethodGet(url)
        .then((res) => {
          dispatch({
            type: GET_ALL_USERS,
            payload: res.data.data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  //Agrega un usuario el admin
  const AddUser = (data) => {
    let url = "/users";
    MethodPost(url, data)
      .then((res) => {
        dispatch({
          type: ADD_USERS,
          payload: res.data.data,
        });
        Swal.fire({
          title: "Agregada",
          text: "Usuario Agregado correctamente",
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          icon: "error",
          text: error.response.data.message,
        });
      });
  };

  //Edita un usuario
  const ChangeUser = (data) => {
    let url = "/updateTypeUser/" + data.id;
    MethodPut(url, data)
      .then((res) => {
        dispatch({
          type: UPDATE_USERS,
          payload: res.data.data,
        });
        Swal.fire({
          title: t("Editado"),
          text: t("usuarioEditado"),
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          icon: "error",
          text: error.response.data.message,
        });
      });
  };

  //Edita la infromacion de un asesor
  const ChangeUserInm = (data) => {
    let url = "/editUserInm/" + data.id;
    MethodPost(url, data)
      .then((res) => {
        dispatch({
          type: UPDATE_USERS_INM,
          payload: res.data.data,
        });
        Swal.fire({
          title: t("Editado"),
          text: t("usuarioEditado"),
          icon: "success",
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

  //Elimina un usuario
  const DeleteUsers = (id) => {
    Swal.fire({
      title: t("estasSeguro"),
      text: t("usuarioEliminado"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: t("siEliminar"),
      cancelButtonText: t("noCancelar"),
    }).then((result) => {
      if (result.value) {
        let url = `/users/${id}`;
        MethodDelete(url)
          .then((res) => {
            Swal.fire({
              title: t("Eliminado"),
              text: res.data.message,
              icon: "success",
            });
            dispatch({
              type: DELETE_USERS,
              payload: id,
            });
          })
          .catch((error) => {
            Swal.fire({
              title: "Error",
              text: error.response.data.message,
              icon: "error",
            });
          });
      }
    });
  };

  //Elimina un asesor
  const DeleteUsersInm = (id) => {
    Swal.fire({
      title: t("estasSeguro"),
      text: t("eliminarAse"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: t("siEliminar"),
      cancelButtonText: t("noCancelar"),
    }).then((result) => {
      if (result.value) {
        let url = `/destroyUserInm/${id}`;
        MethodDelete(url)
          .then((res) => {
            Swal.fire({
              title: t("Eliminado"),
              text: res.data.message,
              icon: "success",
            });
            dispatch({
              type: DELETE_USERS,
              payload: id,
            });
          })
          .catch((error) => {
            Swal.fire({
              title: "Error",
              text: error.response.data.message,
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <UsersContext.Provider
      value={{
        users: state.users,
        user: state.user,
        ErrorsApi: state.ErrorsApi,
        success: state.success,
        GetUsers,
        DeleteUsersInm,
        AddUser,
        ChangeUser,
        DeleteUsers,
        ChangeUserInm,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersState;
