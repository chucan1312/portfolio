const exps = [
    {
        "position": "Programmer Analyst Co-op",
        "date": "Incoming",
        "company": "UBC Faculty of Medicine",
        "location": "Vancouver, BC",
        "description": "",
        "url": "",
    },
    {
        "position": "AI Engineer Intern",
        "date": "May 2026-Present",
        "company": "Viettel",
        "location": "Hanoi, Vietnam",
        "description": "",
        "url": "",
    }
]

export const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5-xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-9 text-center">
                    My <span className="text-primary">Experience</span>
                </h2>
                <div className="text-center w-full">
                    {exps.map((exp, key) => (
                        <div key={key} className="flex gap-6">

                            {/* LEFT */}
                            <div className="w-1/2 text-right">
                                <p className="text-2xl md:text-3xl font-semibold">
                                    {exp.position}
                                </p>

                                <p className="md:text-xl italic text-muted-foreground">
                                    {exp.date}
                                </p>
                            </div>

                            {/* MIDDLE TIMELINE */}
                            <div className="flex flex-col items-center">
                                {/* dot */}
                                <div className="w-4 h-4 rounded-full bg-primary mt-3" />

                                {/* line */}
                                {key !== exps.length - 1 && (
                                    <div className="w-[2px] flex-1 bg-foreground/30 mt-3" />
                                )}
                            </div>

                            {/* RIGHT */}
                            <div className="pb-12 text-left">
                                <p className="text-2xl md:text-3xl font-semibold">
                                    {exp.company}
                                </p>

                                <p className="md:text-xl text-muted-foreground">
                                    {exp.location}
                                </p>

                                <p>{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

