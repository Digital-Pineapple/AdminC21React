// Definimos un objeto con las cabeceras (headers) necesarias para enviar archivos en formularios
const imageHeaders = {
  // Indicamos que el tipo de contenido será 'multipart/form-data',
  // que es el formato adecuado para subir archivos (por ejemplo, imágenes)
  headers: { "Content-Type": "multipart/form-data" },
};

// Exportamos el objeto para usarlo al hacer peticiones HTTP (por ejemplo, con axios)
export default imageHeaders;
