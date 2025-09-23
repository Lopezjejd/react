import { useState, useEffect } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Usa esta función solo para el botón del menú móvil
  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  // Efecto para cerrar el menú si la pantalla se vuelve grande
  useEffect(() => {
    const handleResize = () => {
      // Si la pantalla es 'sm' o más grande, asegura que el estado sea false
      if (window.innerWidth >= 640) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="w-full sticky">
      <nav className="flex items-center justify-between px-8 py-4 bg-fondo relative text-texto-base">
        <h2>LopezDev</h2>
        <ul
          // Aplica clases condicionalmente con una plantilla de cadena
          className={`
            ${isOpen ? "flex" : "hidden"}
            flex-col gap-6 fixed top-14 left-0
            bg-fondo/98 p-1
            sm:flex-row sm:static sm:bg-transparent sm:flex
          `}
        >
          <li><a href="#">Home</a></li>
          <li><a href="#">Technologies</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">About Me</a></li>
        </ul>
        <button
          onClick={toggleMenu}
          className="text-3xl font-extrabold cursor-pointer sm:hidden"
        >
          =
        </button>
      </nav>
    </header>
  );
}