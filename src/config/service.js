// Importamos la instancia personalizada de axios (clienteAxios) desde el archivo Axios.js
import clienteAxios from "./Axios";

// Función para realizar una petición GET con parámetros
// 'url' es la ruta del endpoint, y 'data' son los parámetros que se envían por query string
export default async function MethodGet(url, data) {
  return await clienteAxios.get(url, {
    params: data, // Se envían los datos como parámetros en la URL
  });
}

// Función para realizar una petición POST
// 'url' es la ruta del endpoint, y 'data' es el cuerpo (body) que se envía en la petición
export async function MethodPost(url, data) {
  return await clienteAxios.post(url, data);
}

// Función para realizar una petición PUT
// Similar al POST, pero se usa normalmente para actualizar datos existentes
export async function MethodPut(url, data) {
  return await clienteAxios.put(url, data);
}

// Función para realizar una petición DELETE
// 'url' es la ruta del recurso a eliminar
export async function MethodDelete(url) {
  return await clienteAxios.delete(url);
}
