import React, { useReducer } from "react";
import CategoryContext from "./CategoryContext";
import CategoryReducer from "./CategoryReducer";
import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  GET_ALL_CATEGORIES,
  SHOW_ERRORS_API,
  UPDATE_CATEGORY,
} from "../../types";
import MethodGet, {
  MethodDelete,
  MethodPost,
  MethodPut,
} from "../../config/service";
import Swal from "sweetalert2";
const CategoryState = ({ children }) => {
  //estado inicial
  const initialState = {
    categories: [],
    category: null,
    ErrorsApi: [],
    success: false,
  };
  const [state, dispatch] = useReducer(CategoryReducer, initialState);

  const GetCategories = () => {
    let url = "/categories";
    MethodGet(url)
      .then((res) => {
        dispatch({
          type: GET_ALL_CATEGORIES,
          payload: res.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const AddCategory = (data) => {
    let url = "/categories";
    MethodPost(url, data)
      .then((res) => {
        console.log(res);
        dispatch({
          type: ADD_CATEGORY,
          payload: res.data.data,
        });
        Swal.fire({
          title: "Agregada",
          text: "Categoria Agregada correctamente",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };
  const ChangeCategory = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("imageWeb", data.imageWeb);
    formData.append("imageMobile", data.imageMobile);
    //formData.append("typeCategory", data.typeCategory);
    //formData.append("brand", category.brand);
    let url = `/categories/${data.id}`;
    MethodPut(url, formData)
      .then((res) => {
        Swal.fire({
          title: "Categoria Modificada",
          text: res.data.message,
          icon: "success",
          timer: 1000,
          showCancelButton: false,
          showConfirmButton: false,
        });
        dispatch({
          type: UPDATE_CATEGORY,
          payload: res.data.category,
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: "Ocurrio un error al actualizar la categoría",
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
  const DeleteCategory = (id) => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "La categoria seleccionada será eliminada",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "No, cancelar",
    }).then((result) => {
      if (result.value) {
        let url = `/categories/${id}`;
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
              type: DELETE_CATEGORY,
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
    <CategoryContext.Provider
      value={{
        categories: state.categories,
        category: state.category,
        ErrorsApi: state.ErrorsApi,
        success: state.success,
        GetCategories,
        AddCategory,
        ChangeCategory,
        DeleteCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryState;
