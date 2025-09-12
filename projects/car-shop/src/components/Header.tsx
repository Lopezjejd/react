import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const className =
    "font-bold px-2.5 py-1.5 rounded hover:bg-cyan-700 transition-all";

  return (
    <header className="bg-cyan-900 text-white p-4 sticky top-0 z-20 shadow-md ">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold">Mi Tienda</h1>

        {/* Botón hamburguesa en mobile */}
        <button
          className="md:hidden p-2 rounded hover:bg-cyan-800 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Nav en desktop */}
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${className} bg-cyan-700` : `${className}`
                }
                to="/"
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/car"
                className={({ isActive }) =>
                  isActive ? `${className} bg-cyan-700` : `${className}`
                }
              >
                Carrito
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Menú flotante en mobile */}
      {isOpen && (
        <nav className="absolute left-0 top-full w-1/3 bg-cyan-800/90 h-[50dvh]  shadow-lg md:hidden z-10">
          <ul className="flex flex-col gap-4 p-4 ">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${className} bg-cyan-600` : `${className}`
                }
                to="/"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/car"
                className={({ isActive }) =>
                  isActive ? `${className} bg-cyan-600` : `${className}`
                }
                onClick={() => setIsOpen(false)}
              >
                Carrito
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
