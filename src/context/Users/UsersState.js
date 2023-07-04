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
} from "../../types";
const UsersState = ({ children }) => {
  //estado inicial
  const initialState = {
    users: [],
    user: null,
    ErrorsApi: [],
    success: false,
  };
  const [state, dispatch] = useReducer(UsersReducer, initialState);

  const GetUsers = () => {
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
  };
  const AddUser = (data) => {
    let url = "/users";
    MethodPost(url, data)
      .then((res) => {
        console.log(res);
        dispatch({
          type: ADD_USERS,
          payload: res.data.data,
        });
        Swal.fire({
          title: "Agregada",
          text: "Usuario Agregado correctamente",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };
  const ChangeUser = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    //formData.append("typeCategory", data.typeCategory);
    //formData.append("brand", category.brand);
    let url = `/users/${data.id}`;
    MethodPut(url, formData)
      .then((res) => {
        Swal.fire({
          title: "Usuario Modificado",
          text: res.data.message,
          icon: "success",
          timer: 1000,
          showCancelButton: false,
          showConfirmButton: false,
        });
        dispatch({
          type: UPDATE_USERS,
          payload: res.data.category,
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: "Ocurrio un error al actualizar el usuario",
          icon: "error",
          showConfirmButton: false,
        });
        dispatch({
          type: SHOW_ERRORS_API,
          payload: error.res.data.error,
        });
      });
  };
  //Eliminar categoria
  const DeleteUsers = (id) => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "El usuario seleccionada será eliminado",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "No, cancelar",
    }).then((result) => {
      if (result.value) {
        let url = `/users/${id}`;
        MethodDelete(url)
          .then((res) => {
            Swal.fire({
              title: "Eliminado",
              text: res.data.message,
              icon: "success",
              timer: 1500,
              showConfirmButton: false,
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
              timer: 2000,
              showConfirmButton: false,
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
        AddUser,
        ChangeUser,
        DeleteUsers,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersState;
