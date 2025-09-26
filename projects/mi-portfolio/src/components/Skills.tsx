
import { useState,useEffect } from "react"
export function Skills() {
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
     <section className="mt-30">
       
        <h2 className="text-3xl text-white font-bold  text-center mb-20 ">Skills</h2>
        {skills.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-15 mb-20">
                {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center ">
                        <img src={skill.url} alt={skill.name} className="w-15 animate-size 
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