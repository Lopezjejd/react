import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

export type Slide = {
  id: string;
  image: string;
  alt?: string;
  title?: string;
  caption?: string;
  titulo?: string;
  descripcion?: string;
  github?: string;
  preview?: string;
  techs?:string[];
};

export interface CarouselHandle {
  goTo: (i: number) => void;
  next: () => void;
  prev: () => void;
  getIndex: () => number;
}

interface CarouselProps {
  slides: Slide[];
  autoplay?: boolean;
  interval?: number;
  showDots?: boolean;
  onSlideClick?: (slide: Slide, index: number) => void;
}

const Carousel = forwardRef<CarouselHandle, CarouselProps>(
  (
    {
      slides,
      autoplay = false,
      interval = 4000,
      showDots = true,
      onSlideClick,
    },
    ref
  ) => {
    const max = slides.length || 1;
    const [index, setIndex] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(autoplay);
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    // Autoplay
    useEffect(() => {
      if (!isPlaying || max <= 1) return;
      const id = window.setInterval(() => setIndex((i) => (i + 1) % max), interval);
      return () => window.clearInterval(id);
    }, [isPlaying, interval, max]);

    // Keyboard
    useEffect(() => {
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [max]);

    function prev() {
      setIndex((i) => (i - 1 + max) % max);
      setIsPlaying(false);
    }
    function next() {
      setIndex((i) => (i + 1) % max);
      setIsPlaying(false);
    }
    function goTo(i: number) {
      setIndex(Math.max(0, Math.min(max - 1, i)));
      setIsPlaying(false);
    }

    useImperativeHandle(
      ref,
      () => ({
        goTo,
        next,
        prev,
        getIndex: () => index,
      }),
      [index, max]
    );

    // Touch handlers
    function onTouchStart(e: React.TouchEvent) {
      touchStartX.current = e.touches[0].clientX;
    }
    function onTouchMove(e: React.TouchEvent) {
      touchEndX.current = e.touches[0].clientX;
    }
    function onTouchEnd() {
      if (touchStartX.current == null || touchEndX.current == null) return;
      const dx = touchStartX.current - touchEndX.current;
      const threshold = 50;
      if (dx > threshold) next();
      else if (dx < -threshold) prev();
      touchStartX.current = null;
      touchEndX.current = null;
    }

    return (
      <section className="relative w-full" role="region" aria-roledescription="carousel">
        <div
          className="overflow-hidden relative rounded-lg"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(autoplay)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* IMPORTANT FIX: no width here, use translateX(-index * 100%) */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * 100}%)`,
              width: `${100 * max}%` // optional, but ok to keep; children will be set to 100% viewport
            }}
          >
            {slides.map((s, i) => (
<article
  key={s.id}
  className="flex-shrink-0 w-full min-w-[100%] relative"
  aria-hidden={i !== index}
  role="group"
>
  <div
    className="w-full md:h-96 h-64 rounded-xl overflow-hidden relative shadow-2xl"
    onClick={() => onSlideClick?.(s, i)}
    style={{ cursor: onSlideClick ? "pointer" : "auto" }}
  >
    <img
      src={s.image}
      alt={s.alt ?? s.title ?? s.titulo ?? `slide-${i}`}
      className="absolute inset-0 w-[25%] h-full object-cover rounded-xl transform hover:scale-105 transition-transform duration-300"
      loading="lazy"
    />

    {/* semi-overlay to improve text contrast */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent
     to-black/10 pointer-events-none" />

    <div className="absolute left-4 bottom-6 bg-black/50
     text-white p-3 rounded-md backdrop-blur-sm max-w-[250px] sm:max-w-xl ">
      <h3 className="font-semibold text-sm md:text-base">{s.title ?? s.titulo}</h3>
      {s.caption ?? s.descripcion ? (
        <p className="text-xs md:text-sm opacity-90 ">{s.caption ?? s.descripcion}</p>
       
      ) : null}

       <div className="mt-2 flex flex-wrap gap-1">
        {s.techs &&(
          s.techs.map((tech,index) =>(
            <span key={index} className="bg-principal rounded-sm text-sm px-1 odd:bg-acento">{tech}</span>
          ))
        ) }
       </div>

    </div>
  </div>
</article>

            ))}
          </div>
        </div>

        {/* controls */}
        <button
          onClick={prev}
          aria-label="Anterior"
          className="absolute left-3 top-1/4 sm:top-1/2 -translate-y-1/2 transition-all h-1/4 sm:w-1/20 w-1/10

           rounded-full bg-principal/95 text-white p-2 hover:bg-black/60 focus:outline-none"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Siguiente"
          className="absolute right-3 top-1/4 sm:top-1/2 -translate-y-1/2 h-1/4 sm:w-1/20 w-1/10 
           rounded-full bg-principal/95 text-white p-2 hover:bg-black/60 focus:outline-none"
        >
          ›
        </button>

        {/* dots */}
        {showDots && (
          <div className="flex gap-2 justify-center mt-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Ir al slide ${i + 1}`}
                className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-white/40"}`}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
);

export default Carousel;
