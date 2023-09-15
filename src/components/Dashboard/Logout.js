import React from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2"; 

const Logout = () => {
  const history = useHistory();

  const handleLogout = async () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Quieres cerrar la sesión?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.post(
            "https://api.mibien.mx/api/logout",
            {},
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );

          console.log("Logout successful:", response.data);
          history.push("/iniciar-sesion");
          
          // Recargar la página
          window.location.reload();
        } catch (error) {
          console.error("Error logging out:", error);
          console.error("Error response:", error.response.data);
        }
      }
    });
  };

  return (
    <Button
      onClick={handleLogout}
      variant="contained"
      size="large"
      fullWidth
      sx={{
        backgroundColor: "#D7A86E",
        color: "white",
        "&:hover": { background: "#D7A86E", color: "white" },
      }}
    >
      Cerrar Sesión
    </Button>
  );
};

export default Logout;
