import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Importa o arquivo de estilos global do projeto.
import './index.css';

// Importa o componente principal da aplicação.
import App from './App.jsx';

// Encontra o elemento HTML com id "root" e renderiza a aplicação dentro dele.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* StrictMode ajuda a mostrar avisos e verificar problemas em desenvolvimento. */}
    <App />
  </StrictMode>,
);
