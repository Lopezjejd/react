
import { useState,useEffect } from "react"
export function Technologies() {
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


    return(
     <section className=" bg-fondo bg-cover bg-center py-20" id="skills">
       
        <h2 className="text-3xl text-white font-bold  text-center mb-10 ">Technologies</h2>
        <p className="text-sm text-center text-white/70 mt-1 mb-10">Tecnologias Front-End por las que me destaco</p>
        {skills.length > 0 ? (
            <div className="flex flex-wrap justify-center mx-auto w-fit gap-15 mb-20 lg:border-2 border-principal p-10 rounded-lg">
                {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center ">
                        <img src={skill.url} alt={skill.name} className="w-10 animate-size 
                        drop-shadow-[0_0_10px_#0A74DA] " />
                      
                        
                    </div>
                ))}
            </div>
        ) : (
            <p className="text-white text-center">Loading skills...</p>
        )}
     </section>



    )
}