import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// 1 - configurando router

import{createBrowserRouter, RouterProvider} from "react-router-dom";

import Home from './routes/home.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import Energia from './routes/energia.jsx';
import Projeto from './routes/projeto.jsx';
import FalaComAGente from './routes/contato.jsx';
import Login from './routes/login.jsx';
import Solar from './routes/Solar.jsx';
import Hidroelettrica from './routes/Hidroeletrica.jsx';
import Eolica from './routes/Eolica.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />, // Página de Login sem o App (sem cabeçalho/rodapé)
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <App />, // Aqui você mantém a estrutura do cabeçalho/rodapé
    children: [
      { path: "Home", element: <Home/> },
      { path: "energia", element: <Energia /> },
      { path: "projeto", element: <Projeto /> },
      { path: "FalaComAGente", element: <FalaComAGente /> },
      { path: "Solar", element: <Solar /> },
      { path: "Hidroelettrica", element: <Hidroelettrica /> },
      { path: "Eolica", element: <Eolica /> },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)