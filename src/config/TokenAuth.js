// Importamos la instancia de Axios previamente configurada
import clienteAxios from "./Axios";

// Función para agregar o eliminar el token de autenticación en las cabeceras de Axios
const tokenAuth = (token) => {
  if (token) {
    // Si existe un token, lo agregamos a las cabeceras de todas las peticiones con el formato 'Bearer {token}'
    clienteAxios.defaults.headers.Authorization = `Bearer ${token}`;
  } else {
    // Si no hay token (por ejemplo, el usuario cerró sesión), eliminamos la cabecera de autorización
    delete clienteAxios.defaults.headers.Authorization;
  }
};

// Exportamos la función para usarla en otras partes del proyecto (por ejemplo, después de iniciar sesión)
export default tokenAuth;
