// Importa funciones de testing-library/react para renderizar componentes y acceder al DOM
import { render, screen } from '@testing-library/react';
// Importa el componente que se va a probar
import App from './App';

// Define una prueba con Jest
test('renders learn react link', () => {
  // Renderiza el componente <App />
  render(<App />);
  // Busca un elemento que contenga el texto "learn react" (sin importar mayúsculas o minúsculas)
  const linkElement = screen.getByText(/learn react/i);
  // Verifica que ese elemento esté presente en el documento
  expect(linkElement).toBeInTheDocument();
});
