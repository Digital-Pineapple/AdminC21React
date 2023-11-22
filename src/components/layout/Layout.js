import React, { useContext } from "react";
import Header from "./Header";
import AuthContext from "../../context/auth/AuthContext";
// import ModulesContext from "../../context/Permissions/PermissionsContext";
import "./styles.css";
import CardWelcome from "./CardWelcome";
export default function Layout({ children }) {
  const { usuario } = useContext(AuthContext);
  // const { permissionsPerUser, GetModulesPerUser } = useContext(ModulesContext);

  return (
    <>
      <div>
        <Header children={children} />

        {/* <div>{children}</div> */}
      </div>
    </>
  );
}
