import { StrictMode } from 'react'
import './index.css'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { CartProvider } from "./context/CartContext";

import App from './App.tsx'

import Home from './pages/Home.tsx'
import Car from './pages/Car.tsx'

const router = createBrowserRouter([//definicion de rutas
  {
    path: "/",//ruta raiz
    element: <App />,//pagina principal
    children: [//rutas hijas
      {
        index: true,//ruta por defecto
        element: <Home />
      },
      {
        path: "car",
        element: <Car />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
)
