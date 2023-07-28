import React, { useReducer } from "react";
import MethodGet from "../../config/service";
import DashboardReducer from "./DashboardReducer";
import DashboardContext from "./DashboardContext";
import {
  TOTAL_PROPERTIES,
  TOTAL_PROPERTIES_RENT,
  TOTAL_PROPERTIES_SOLD,
  TOTAL_USER,
} from "../../types";

const DashboardState = ({ children }) => {
  const initialState = {
    total_users: [],
    total_properties: [],
    total_properties_rent: [],
    total_properties_sold: [],
    ErrorsAPI: [],
  };

  const [state, dispatch] = useReducer(DashboardReducer, initialState);
  const TotalProperties = () => {
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
  };
  const TotalPropertiesSold = () => {
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
  };
  const TotalPropertiesRent = () => {
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
  };
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
  return (
    <DashboardContext.Provider
      value={{
        total_properties: state.total_properties,
        total_properties_rent: state.total_properties_rent,
        total_properties_sold: state.total_properties_sold,
        total_users: state.total_users,
        TotalProperties,
        TotalPropertiesRent,
        TotalPropertiesSold,
        GetTotalUsers,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardState;
