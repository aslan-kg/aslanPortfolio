export const About = () => {

    const frontendSkills = ["React", "Typescript", "Html", "CSS"];
    const backendSkills = ["NodeJS", "SQL", "MongoDB", "JSON"];

    return <section id="about" className="min-h-screen flex items-center justify-center py-20 ">
        <div className="max-width-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-cyan-400  bg-clip-text text-transparent text-center"> About Me </h2>
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6"> I am a high school graduate that is going into Software Engineering.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6  hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Front End</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>;
}