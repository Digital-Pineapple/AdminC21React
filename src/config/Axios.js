// Importamos la librería axios para hacer peticiones HTTP
import axios from "axios";

// Creamos una instancia personalizada de axios con una configuración predeterminada
const clientAxios = axios.create({
  // Establecemos la URL base para todas las peticiones, la cual se toma desde una variable de entorno
  // Esto permite cambiar fácilmente la URL del backend dependiendo del entorno (desarrollo, producción, etc.)
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

// Exportamos la instancia personalizada para poder usarla en otras partes del proyecto
export default clientAxios;
