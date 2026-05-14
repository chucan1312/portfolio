import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
        // Frontend
        { name: "React", level: 90, category: "frontend" },
        { name: "Next.js", level: 75, category: "frontend" },
        { name: "JavaScript", level: 85, category: "frontend" },
        { name: "HTML/CSS", level: 90, category: "frontend" },
        { name: "Tailwind CSS", level: 90, category: "frontend" },
      
        // Backend
        { name: "Express.js", level: 65, category: "backend" },
        { name: "Java", level: 75, category: "backend" },
        { name: "Spring Boot", level: 40, category: "backend" },
        { name: "C++", level: 35, category: "backend" },
      
        // AI / Data
        { name: "Python", level: 80, category: "AI/Data" },
        { name: "RAG", level: 70, category: "AI/Data" },
        { name: "pgvector", level: 70, category: "AI/Data" },
        { name: "Qdrant", level: 60, category: "AI/Data" },
        { name: "R", level: 80, category: "AI/Data" },
      
        // Databases
        { name: "PostgreSQL", level: 70, category: "database" },
        { name: "MongoDB", level: 65, category: "database" },
        { name: "SQL", level: 70, category: "database" },
      
        // Tools
        { name: "Git/GitHub", level: 85, category: "tools" },
        { name: "Supabase", level: 60, category: "tools" },
        { name: "n8n", level: 55, category: "tools" },
        { name: "Jupyter Notebook", level: 60, category: "tools" },
];

const categories = ["all", "frontend", "backend", "AI/Data", "database", "tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category.includes(activeCategory)
    );

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5-xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-9 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                        key={key} 
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                            "px-5 py-2 rounded-full border-primary border-2 transition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground" 
                            : "bg-secondary/70 text-foreground hover:bg-secondary"
                        )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4 flex justify-between items-center">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                                <span className="text-sm text-foreground">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                    style={{ width: skill.level + "%" }}
                                />
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </section>
    )
}