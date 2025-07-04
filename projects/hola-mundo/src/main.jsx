import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app.jsx'// CON EXPORT  import va con llaves
import './index.css' 

createRoot(document.getElementById('root'))
.render(
  <StrictMode>
     <App />

  </StrictMode>,
)
