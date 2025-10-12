export const HomeSection = () => {
    return (
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> An</span>
                        <span className="text-gradient opacity-0 animate-fade-in-delay-2"> Trinh</span>
                    </h1>
                    <p className="md:text-lg text-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I'm a 2nd-year Computer Science student at UBC, passionate about Full-Stack Development and Machine Learning.
                        Self-directed learning has been a major part of my growth, and I'm currently seeking opportunities to contribute
                        my skills through internships and clubs involvement.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="custom-button">
                            View My Work
                        </a>
                        <a className="pl-3"></a>
                        <a
                            href="./An Trinh Resume.pdf"
                            download
                            className="custom-button bg-transparent glow-border border-primary text-foreground"
                        >
                            Download CV
                        </a>

                    </div>
                </div>
            </div>
        </section>
    )
}