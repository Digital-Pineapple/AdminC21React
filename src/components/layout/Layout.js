/**
 * Este componente `Layout` es un contenedor básico que renderiza el componente `Header` y pasa los elementos `children` 
 * como prop para ser renderizados dentro de él. La estructura básica incluye un contenedor `div` que envuelve el `Header`.
 * Se importa un archivo de estilos para personalizar la apariencia del componente.
 */
import Header from "./Header";
import "./styles.css";
export default function Layout({ children }) {
  return (
    <>
      <div>
        <Header children={children} />
      </div>
    </>
  );
}
