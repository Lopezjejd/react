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

    window.addEventListener('resize', handleResize);// Escucha cambios en el tamaño de la ventana
    return () => window.removeEventListener('resize', handleResize);// Limpia el listener al desmontar
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 shadow-md shadow-principal/10">
      <nav className="flex items-center justify-between px-8 py-4 bg-fondo relative text-texto-base">
        <h2  className="font-extrabold">Lopez<span className="text-principal">Dev</span></h2>
        <ul
          // Aplica clases condicionalmente con una plantilla de cadena
          className={`
            ${isOpen ? "flex" : "hidden"}
            flex-col gap-6 fixed top-14 left-0
            bg-fondo/98 p-1
            sm:flex-row sm:static sm:bg-transparent sm:flex
          `}
        >
          <li><a className="hover:text-secundario transition-all" href="#">Home</a></li>
          <li><a className="hover:text-secundario transition-all" href="#">Technologies</a></li>
          <li><a className="hover:text-secundario transition-all" href="#">Projects</a></li>
          <li><a className="hover:text-secundario transition-all" href="#">Skills</a></li>
          <li><a className="hover:text-secundario transition-all" href="#">About Me</a></li>
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