// src/components/Header.jsx
import { NavLink } from 'react-router-dom'

const Header = () => {

  const className = "font-bold px-2.5 py-1.5 rounded hover:bg-cyan-700 transition-all"
  return (
    <header className="flex-row bg-cyan-900 text-white p-4 sticky top-0 z-10 shadow-md ">
      <nav>
        <ul className='flex gap-20 justify-center'>
<li>

            <NavLink 
              className={({ isActive }) => isActive ?  `${className} bg-cyan-700 ` : `${className}`}
              to="/" >
              Inicio
            </NavLink>
          </li>
          <li >
            <NavLink 
              to="/car"
              className={({ isActive }) => isActive ?  `${className} bg-cyan-700 ` : `${className}`}
            >
              Carrito

              
            </NavLink>
          </li>

        </ul>
      </nav>
    </header>
  )
}

export default Header