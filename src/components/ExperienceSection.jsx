const exps = [
    {
        "position": "Programmer Analyst Co-op",
        "date": "August 2026 - Present",
        "company": "UBC Faculty of Medicine",
        "location": "Vancouver, BC",
        "description": "•	Maintained and enhanced a production teaching-tracking and payment system serving the Faculty of Medicine’s 5,000+ learners and 13,500+ faculty. \n•	Resolved application defects and extended functionality by modifying Java backend services, REST APIs, React/TypeScript components, and relational database workflows. \n•	Supported reliable software delivery by maintaining Atlassian Bamboo CI/CD pipelines and Docker-based environments, troubleshooting build and deployment issues and supporting releases through development, testing, and production.",
        "url": "",
    },
    {
        "position": "AI Engineer Intern",
        "date": "May 2026 - June 2026",
        "company": "Viettel",
        "location": "Hanoi, Vietnam",
        "description": "•	Developed and deployed a production AI customer support agent using n8n, LLM APIs, SQL databases, and Qdrant vector search to automate enterprise customer service workflows. \n•	Designed hybrid retrieval pipelines combining structured database queries, semantic search, and web-based knowledge retrieval to provide accurate responses across diverse support scenarios. \n•	Collaborated with customer support teams to evaluate production performance and implemented human handoff workflows for cases requiring agent intervention.",
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
                        <div key={key} className="grid grid-cols-[1fr_auto_1fr] gap-6">

                            {/* LEFT */}
                            <div className="text-right">
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

                                <p className="whitespace-pre-line">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

