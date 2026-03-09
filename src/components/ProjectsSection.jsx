import { Github, ExternalLink, ArrowRight } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "LEGO Vision (nwHacks 2026)",
        description: "A computer vision project that detects and classifies lego pieces from unsorted pile to suggest small LEGO building ideas",
        tags: ["YOLO", "Roboflow", "Python (FastAPI)", "React"],
        githubUrl: "https://github.com/chucan1312/lego-vision",
        image: "/projects/project8.png",
        link: "https://devpost.com/software/lego-vision?_gl=1*15w3kun*_gcl_au*MzIyNTkyMjU2LjE3NjEyNzE2MTU.*_ga*NTA5MDk2MzQ3LjE3NjEyNzE2MTY.*_ga_0YHJK3Y10M*czE3Njg3NzY5MTUkbzMzJGcxJHQxNzY4Nzc4MDA3JGo2MCRsMCRoMA.."
    },
    {
        id: 2,
        title: "Carades (cmd-f 2026)",
        description: "A multiplayer coding charades game where players take turn and code out a programming concept for others to guess and earn points",
        tags: ["Firebase", "React", "Tailwind"],
        githubUrl: "https://github.com/Fradedaniela0305/Carades",
        image: "/projects/project9.png",
        link: "https://carades.vercel.app/"
    },
    {
        id: 3,
        title: "First Love Memory Manipulator",
        description: "A cozy, idle game inspired by the Kdrama Twinkling Watermelon, where you collect watermelons and decorate the band's club room",
        tags: ["Spring Boot", "React"],
        githubUrl: "https://github.com/chucan1312/twinkling-watermelon",
        image: "/projects/project7.png"
    }, {
        id: 4,
        title: "Flux",
        description: "A full-stack study together app that includes focus rooms, multiplayer flashcards, and collaborative note sharings",
        tags: ["React", "TypeScript", "Tailwind", "Supabase"],
        githubUrl: "https://github.com/chucan1312/flux.git",
        image: "/projects/project4.png",
        link: "https://flux-green.vercel.app/"
    },
    {
        id: 5,
        title: "MiniMe (HackCamp 2025)",
        description: "MiniMe is your gentle companion that helps you take care of yourself, making self-care feel more like something enjoyable and sustainable",
        tags: ["React", "HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/iSqlqmi/mini_me",
        image: "/projects/project5.png",
        link: "https://mini-me-gilt.vercel.app/"
    },
    {
        id: 6,
        title: "Sales Management Application",
        description: "A Java GUI app that allow users to keep track of store's sales and inventory, with JSON-based data persistence",
        tags: ["Java"],
        githubUrl: "https://github.com/chucan1312/cpsc-210-term-project",
        image: "/projects/project3.png"
    }
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
                    <span className="text-primary"> Projects</span> Gallery
                </h2>

                <p className="text-center text-foreground mb-12 max-w-2xl mx-auto">
                    Here's some of my recent work on display — more stuff lives on my Github
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center max-w-6xl mx-auto gap-50 gap-y-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover w-90">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>

                                <p className="text-foreground text-sm mb-4">{project.description}</p>

                                <div className="flex gap-3 items-center">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <ExternalLink />
                                    </a>

                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <Github />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center mt-12">
                <a
                    className="custom-button w-fit flex items-center mx-auto gap-2"
                    target="_blank"
                    href="https://github.com/chucan1312"
                >
                    View My Github <ArrowRight size={16} />
                </a>
            </div>

        </section>
    )
}