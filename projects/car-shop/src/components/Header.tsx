// src/components/Header.jsx
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            {/* 
              NavLink: Similar a un enlace <a> pero para navegación INTERNA en la SPA
              
              to: Define a qué ruta navegar
              
              className: Puede recibir una función que nos dice si el enlace está activo
              { isActive } → isActive es true cuando estamos en esa ruta
            */}
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/car"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              carrito

              
            </NavLink>
          </li>

        </ul>
      </nav>
    </header>
  )
}

export default Header