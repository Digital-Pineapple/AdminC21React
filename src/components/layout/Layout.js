import React, { useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Aside from "./Aside";
import AuthContext from "../../context/auth/AuthContext";
// import ModulesContext from "../../context/Permissions/PermissionsContext";
import "./styles.css";
export default function Layout({ children }) {
  const { usuario } = useContext(AuthContext);
  // const { permissionsPerUser, GetModulesPerUser } = useContext(ModulesContext);
  return (
    <div>
      <Header />
      <>
        <div>{children}</div>
      </>
    </div>
  );
}
