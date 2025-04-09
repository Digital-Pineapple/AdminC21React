// Función para medir el rendimiento del sitio usando web-vitals
const reportWebVitals = onPerfEntry => {
  // Verifica que se pase una función como argumento
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Importa dinámicamente la librería web-vitals
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Llama a cada métrica y pasa la función recibida como callback
      getCLS(onPerfEntry);   // Estabilidad visual
      getFID(onPerfEntry);   // Tiempo hasta la primera interacción
      getFCP(onPerfEntry);   // Primer contenido visible
      getLCP(onPerfEntry);   // Contenido más grande visible
      getTTFB(onPerfEntry);  // Tiempo hasta el primer byte
    });
  }
};

// Exporta la función para usarla en otro archivo (ej. index.js)
export default reportWebVitals;
