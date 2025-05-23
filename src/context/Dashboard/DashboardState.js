import React, { useReducer } from "react";
import MethodGet from "../../config/service";
import DashboardReducer from "./DashboardReducer";
import DashboardContext from "./DashboardContext";
import {
  TOTAL_PROPERTIES,
  TOTAL_PROPERTIES_RENT,
  TOTAL_PROPERTIES_SOLD,
  TOTAL_USER,
  TOTAL_USER_INM,
} from "../../types";

// Estado inicial
const DashboardState = ({ children }) => {
  const initialState = {
    total_users: [],
    total_usersInm: [],
    total_properties: [],
    total_properties_rent: [],
    total_properties_sold: [],
    ErrorsAPI: [],
  };

  const [state, dispatch] = useReducer(DashboardReducer, initialState);

  // Esta función consulta el total de propiedades.
  const TotalProperties = () => {
    let type_user = localStorage.getItem("type_user");
    let user_id = localStorage.getItem("user_id");
    if (type_user === "1") {
      let url = "/countProperty";
      MethodGet(url)
        .then((res) => {
          dispatch({
            type: TOTAL_PROPERTIES,
            payload: res.data.count,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (type_user === "2") {
      let url = `/countPropertyInm/${user_id}`;
      MethodGet(url)
        .then((res) => {
          dispatch({
            type: TOTAL_PROPERTIES,
            payload: res.data.count,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  // Esta función consulta el total de inmuebles en venta.
  const TotalPropertiesSold = () => {
    let type_user = localStorage.getItem("type_user");
    let user_id = localStorage.getItem("user_id");
    if (type_user === "1") {
      let url = "/countVent";
      MethodGet(url)
        .then((res) => {
          dispatch({
            type: TOTAL_PROPERTIES_SOLD,
            payload: res.data.propertiesForSale,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (type_user === "2") {
      let url = `/countVentInm/${user_id}`;
      MethodGet(url)
        .then((res) => {
          dispatch({
            type: TOTAL_PROPERTIES_SOLD,
            payload: res.data.propertiesForSale,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  // Esta función consulta el total de inmuebles en renta.
  const TotalPropertiesRent = () => {
    let type_user = localStorage.getItem("type_user");
    let user_id = localStorage.getItem("user_id");
    if (type_user === "1") {
      let url = "/countRent";
      MethodGet(url)
        .then((res) => {
          dispatch({
            type: TOTAL_PROPERTIES_RENT,
            payload: res.data.propertiesForRent,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (type_user === "2") {
      let url = `/countRentInm/${user_id}`;
      MethodGet(url)
        .then((res) => {
          dispatch({
            type: TOTAL_PROPERTIES_RENT,
            payload: res.data.propertiesForRent,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  // Esta función consulta el total de usuarios.
  const GetTotalUsers = () => {
    let url = "/countUser";
    MethodGet(url)
      .then((res) => {
        dispatch({
          type: TOTAL_USER,
          payload: res.data.count,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // Esta función consulta el total de asesores por inmobiliaria
  const GetTotalUsersInm = () => {
    let type_user = localStorage.getItem("type_user");
    let user_id = localStorage.getItem("user_id");
    if (type_user === "1") {
      let url = `/countAsesores`;
      MethodGet(url)
        .then((res) => {
          dispatch({
            type: TOTAL_USER_INM,
            payload: res.data.count,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (type_user === "2") {
      let url = `/countAse/${user_id}`;
      MethodGet(url)
        .then((res) => {
          dispatch({
            type: TOTAL_USER_INM,
            payload: res.data.count,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <DashboardContext.Provider
      value={{
        total_properties: state.total_properties,
        total_properties_rent: state.total_properties_rent,
        total_properties_sold: state.total_properties_sold,
        total_users: state.total_users,
        total_usersInm: state.total_usersInm,
        TotalProperties,
        TotalPropertiesRent,
        TotalPropertiesSold,
        GetTotalUsers,
        GetTotalUsersInm,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardState;
