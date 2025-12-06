import { ThemeToggle } from "@/components/ThemeToggle"
import { Blob } from "@/components/Blob"
import { Navbar } from "@/components/Navbar"
import { HomeSection } from "@/components/HomeSection"
import { SkillsSection } from "@/components/SkillsSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"
import { DrawSection } from "@/components/DrawSection"
import Carousel from '@/components/Carousel'
export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Background Effects */}
        <Blob top="10%" left="20%" rgba1="rgba(63, 206, 250, 0.4)" rgba2="rgba(1, 95, 176, 0.5)" />
        <Blob top="50%" left="70%" rgba1="rgba(180, 82, 255, 0.4)" rgba2="rgba(69, 27, 237, 0.5)" />
        <Blob top="80%" left="45%" rgba1="rgba(255, 128, 209, 0.4)" rgba2="rgba(255, 23, 170, 0.5)" />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
            <HomeSection />
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] pt-[5rem] pb-[1rem]" id="about">
                <div className="relative lg:ml-[4rem] px-[1rem] lg:px-0">
                    <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-[3rem]"> About <span className="text-primary">Me</span></h1>

                    <p className="flex justify-center">My coding journey started at UBC where I first took the infamous CPSC 110. 
                        I came in not knowing anything about Computer Science back then, 
                        and sure enough I struggled to trust the natural recursion (iykyk).</p>
                    <br />
                    <p className="flex justify-center">
                        I went on taking other CS courses offered at UBC and started learning web development during summer in between
                        first and second year. That's when I built my first ever personal project 
                        (that may or may not be very ugly). Since then, I’ve picked up more languages and tools, built more projects, and learned more than ever
                        from the amazing people around me.
                    </p>
                    <br />
                    <p className="flex justify-center">
                        Creativity has always been a big part of my life and what I do - whether it's choreographing dances, directing art shows, or screenwriting for musicals. 
                        Programming has grown on me as something just as creative and exciting. It's one of the many reasons for my interest in Full-Stack Development -
                        I'm able to create something from scratch and watch it come to life, just like so many of the things I've done before.
                    </p>
                </div>
                <div className="flex justify-center">
                <Carousel
                    baseWidth={500}
                    autoplay={true}
                    autoplayDelay={5000}
                    pauseOnHover={true}
                    loop={true}
                    round={false}
                />
                </div>
                
            </div>
            <SkillsSection />
            <ProjectsSection />
            <DrawSection />
            <ContactSection />

        </main>

        {/* Footer */}
        <Footer />

    </div>
}