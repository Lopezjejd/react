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
            ${isOpen ? "left-[0]" : "left-[-100%]"  }
            flex font-bold text-xl
            flex-col gap-10 fixed top-18 left-0
            pl-5
            w-1/3 h-[80vh] transition-all
            bg-gray-950/80 p-1
            sm:flex-row sm:static sm:bg-transparent sm:flex sm:w-auto sm:h-auto sm:pl-0 sm:gap-6
            sm:transition-none sm:font-normal sm:text-base
          `}
        >
          <li className="flex items-center gap-1">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="m3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
</svg>
            <a className="hover:text-secundario transition-all" href="#">Home</a></li>
        <li className="flex items-center gap-1">
<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.12-.11.23-.22.33-.33z"/>
</svg>
            <a className="hover:text-secundario transition-all" href="#">Technologies</a></li>
                    <li className="flex items-center gap-1">
<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22 11.5V16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6.5L12 7h8a2 2 0 0 1 2 2v2.5z"/>
    <path d="M16 11l-3 3-3-3"/>
</svg>
            <a className="hover:text-secundario transition-all" href="#">Projects</a></li>
                    <li className="flex items-center gap-1">
<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"/>
    <path d="M12 18V22"/>
    <path d="M9 22H15"/>
    <path d="M12 6V3"/>
    <path d="M16.95 7.05L19.07 4.93"/>
    <path d="M7.05 7.05L4.93 4.93"/>
    <path d="M18 12H21"/>
    <path d="M3 12H6"/>
</svg>
            <a className="hover:text-secundario transition-all" href="#">Skills</a></li>
                    <li className="flex items-center gap-1">
<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M18 20a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2"/>
    <circle cx="12" cy="9" r="4"/>
    <path d="M17.8 17.8s-1.8-1.2-5.8-1.2-5.8 1.2-5.8 1.2"/>
</svg>
            <a className="hover:text-secundario transition-all" href="#">About Me</a></li>
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