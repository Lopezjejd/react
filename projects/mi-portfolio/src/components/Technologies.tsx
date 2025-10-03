
import { useState,useEffect } from "react"
import { useOnScreenElement } from "../hooks/useOnScreen";
export function Technologies() {

  // opcional: indica HTMLDivElement para mayor autocompletado, pero NO rompe tipos
  const { setRef, visible } = useOnScreenElement<HTMLDivElement>({
    rootMargin: "-10% 0px",
    threshold: 0.12,
    triggerOnce: true,
  });

 type Skill = {
    name: string;
    url: string;
}

    const [skills, setSkills] = useState<Skill[]>([]);
    useEffect(() => {
        fetch('/skills.json')
            .then(response => response.json())
            .then(data => setSkills(data))
            .catch(error => console.error('Error fetching skills:', error));
 
        } , []);
// 1. Define las clases de delay de Tailwind que vas a usar.
// Multiplica por 200ms para un buen efecto secuencial.
// Define las clases de delay, AHORA CON !important

const sequentialDelay = 150; 
// ... en tu componente React
      // tipado claro: HTMLDivElement | null

    return(
     <section className=" relative overflow-hidden bg-fondo bg-cover bg-center " id="technologies">
       
        <h2 className="text-3xl text-white font-bold  text-center mb-10 ">Technologies</h2>
        <p className="text-sm text-center text-white/70 mt-1 mb-10">Tecnologias Front-End por las que me destaco</p>

{skills.length > 0 ? (
    <div
    ref={setRef}
     className={`flex flex-wrap justify-center relative
    mx-auto w-fit gap-15 mb-20 lg:border-2 border-principal p-10 rounded-lg
           ${visible ? "animate-appear" : "opacity-0" }    `}>
        {skills.map((skill, index) => {
    
    // 💡 Calcula el retraso total para este elemento
    const delayAmount = index * sequentialDelay; 




    return (
        <div key={index} className="flex flex-col items-center">
            <img 
                src={skill.url} 
                alt={skill.name} 
                className={`
                    w-10 
                    animate-size 
                    drop-shadow-[0_0_10px_#0A74DA]
                `} 
                // 🚀 SOLUCIÓN: Usar la propiedad 'animationDelay'
                // Sintaxis correcta: el número y la unidad (ms) deben ir juntos, sin espacio.
                style={{ 
                    animationDelay: `${delayAmount}ms` 
                }}
            />
        </div>
    );
})}
    </div>
) : null}
     </section>



    )
}