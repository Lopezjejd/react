import React, { useEffect, useRef, useState } from "react";
import Carousel from "./Carrucel.tsx";
import type { CarouselHandle, Slide } from "./Carrucel.tsx";

type ProjectItem = {
  titulo: string;
  descripcion: string;
  imagen: string;
  github?: string;
  preview?: string;
  techs?:string[];
};

const ProjectsCarousel: React.FC = () => {
  const [projects, setProjects] = useState<ProjectItem[] | null>(null);//null para diferenciar entre no cargado y cargado con 0 items
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<ProjectItem | null>(null);
  const carouselRef = useRef<CarouselHandle | null>(null);//useref para controlar carrusel desde thumbnails

  useEffect(() => {
    const ac = new AbortController();//para cancelar fetch si el componente se desmonta
    setLoading(true);
    fetch("/projects.json", { signal: ac.signal })//signal para abortar fetch si es necesario
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: ProjectItem[]) => {
        setProjects(data);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        console.error(err);
        setError("No se pudo cargar projects.json");
      })
      .finally(() => setLoading(false));

    return () => ac.abort();
  }, []);

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <div className="space-y-4">
          <div className="h-2 w-48 bg-white/10 rounded-full animate-pulse" />
          <div className="p-6 bg-gradient-to-br from-slate-900/80 to-black rounded-2xl border border-white/5">
            <div className="h-64 rounded-lg bg-white/6 animate-pulse" />
            <div className="mt-4 grid grid-cols-6 gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-14 rounded-md bg-white/6 animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );//skeleton loading state para mejorar UX es importante tener un buen estado de carga
  }

  if (error || !projects) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center text-red-400 bg-black/40 p-4 rounded-md">
          {error ?? "No hay proyectos para mostrar"}
        </div>
      </div>
    );
  }
//manejo de estados: cargando, error, datos cargados
  
// map projects -> slides
  const slides: Slide[] = projects.map((p, i) => ({
    id: `${p.titulo}-${i}`,
    image: p.imagen,
    titulo: p.titulo,
    descripcion: p.descripcion,
    github: p.github,
    preview: p.preview,
    techs:p.techs
  }));//usamos i para asegurar id unico en caso de titulos repetidos
  //el map es ideal para transformar datos en componentes o estructuras necesarias
 //y se pone en una constante para evitar recalcular en cada render
 // y mantener el componente limpio asi que a la larga si projects cambia se recalcula slides
  const onSlideClick = (s: Slide) => {
    // when user clicks a slide, open modal with project details
    setSelected({
      titulo: s.titulo ?? s.title ?? "Proyecto",
      descripcion: s.descripcion ?? s.caption ?? "",
      imagen: s.image,
      github: s.github,
      preview: s.preview,
    });
  };

  return (
    <section className="max-w-5xl mx-auto p-6" id="projects">
      <header className="mb-6 text-center">
        <h2 className="text-3xl font-bold text-white">Proyectos</h2>
        <p className="text-sm text-white/70 mt-1"><span className="text-principal font-bold text-lg">Click</span> en cualquiera para ver detalles — responsive y elegante.</p>
      </header>

      <div className="bg-gradient-to-br from-slate-900/90 via-black/75 to-slate-900/95 p-6 rounded-2xl border border-white/5 shadow-xl">
        <Carousel
          ref={carouselRef}
          slides={slides}
          autoplay={true}
          interval={4500}
          showDots={false}
          onSlideClick={onSlideClick}
        />

        {/* thumbnails */}
        <div className="mt-4 flex gap-3 items-center justify-center flex-wrap">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => carouselRef.current?.goTo(i)}
              className="w-20 h-12 rounded-md overflow-hidden border border-white/6 shadow-sm transform hover:scale-105 transition"
              title={s.titulo}
            >
              <img
                src={s.image}
                alt={s.titulo}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
        
      </div>

      {/* modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          />
          <div className="relative max-w-3xl w-full bg-gradient-to-br from-slate-900/95 to-black rounded-2xl p-6 border border-white/5 shadow-2xl">
            <button
              onClick={() => setSelected(null)}
              className="z-40 bg-principal rounded-2xl px-1.5
              font-extrabold absolute right-4 top-4 text-white hover:text-white  "
              aria-label="Cerrar modal"
            >
              ✕
            </button>

            <div className="md:flex gap-6">
              <div className="md:w-1/2 w-full rounded-lg overflow-hidden">
                <img
                  src={selected.imagen}
                  alt={selected.titulo}
                  className="w-full h-56 md:h-full object-cover rounded-lg drop-shadow-[0_10px_40px_rgba(34,197,94,0.12)]"
                />
              </div>

              <div className="md:w-1/2 w-full mt-4 md:mt-0">
                <h3 className="text-2xl font-bold text-white">{selected.titulo}</h3>
                <p className="mt-3 text-white/80">{selected.descripcion}</p>

                <div className="mt-6 flex gap-3">
                  {selected.preview && (
                    <a
                      href={selected.preview}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-md bg-principal text-white font-medium shadow hover:scale-105 transition"
                    >
                      Ver Demo
                    </a>
                  )}
                  {selected.github && (
                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-md bg-white/6 border border-white/8 text-white font-medium hover:bg-white/10 transition"
                    >
                      Ver código
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsCarousel;
