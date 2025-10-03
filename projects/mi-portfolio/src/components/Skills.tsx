import React, { useEffect, useState } from "react";

type SkillCard = {
    id: string;
    image: string;
    title: string;
    description: string;
};

const Skills: React.FC = () => {
    const [skills, setSkills] = useState<SkillCard[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/skills-cards.json")
            .then((res) => res.json())
            .then((data) => {
                setSkills(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-principal"></div>
        </div>
    );

    return (
        <section className="min-h-screen px-4 py-16 max-w-7xl mx-auto" id="skills">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                My <span className="text-principal">Skills</span>
            </h2>
            <p className="text-center mb-10">Skills pasivas que me ayudan a ser un mejor desarrollador dia tras dia</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
                {skills.map((skill) => (
                    <div
                        key={skill.id}
                        className="bg-zinc-800/50 backdrop-blur-sm w-full max-w-sm rounded-xl p-6 
                        flex flex-col items-center transition-all duration-300 
                        hover:scale-105 hover:shadow-xl hover:shadow-principal/20
                        border border-zinc-700/50"
                    >
                        <div className="relative w-full  mb-6">
                            <img
                                src={skill.image}
                                alt={skill.title}
                                className="w-full h-full object-contain 
                                transition-transform duration-300 hover:rotate-6"
                            />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-center bg-gradient-to-r 
                        from-principal to-white bg-clip-text text-transparent">
                            {skill.title}
                        </h3>
                        <p className="text-center text-gray-300 text-sm leading-relaxed">
                            {skill.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;