import React, { useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Aside from "./Aside";
import AuthContext from "../../context/auth/AuthContext";
// import ModulesContext from "../../context/Permissions/PermissionsContext";
import "./styles.css";
import HAsesor from "./HAsesor";
export default function Layout({ children }) {
  const { usuario } = useContext(AuthContext);
  // const { permissionsPerUser, GetModulesPerUser } = useContext(ModulesContext);

  return (
    <>
      {usuario && usuario.type_user === 1 ? (
        <div>
          <Header />
          <>
            <div>{children}</div>
          </>
        </div>
      ) : usuario && usuario.type_user === 2 ? (
        <div>
          <Header />
          <>
            <div>Inmonbiliaria</div>
          </>
        </div>
      ) : usuario && usuario.type_user === 3 ? (
        <div>
          <HAsesor />
          <>
            <div>Asesor</div>
          </>
        </div>
      ) : (
        usuario &&
        usuario.type_user === 4 && (
          <div>
            <Header />
            <>
              <div>Individual</div>
            </>
          </div>
        )
      )}
    </>
  );
}
