import { ThemeToggle } from "@/components/ThemeToggle"
import { Blob } from "@/components/Blob"
import { Navbar } from "@/components/Navbar"
import { HomeSection } from "@/components/HomeSection"
import { SkillsSection } from "@/components/SkillsSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"
import { Gallery } from "@/components/Gallery" 
import { DrawSection } from "@/components/DrawSection"
export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Theme Toggle */}
        <ThemeToggle />
        
        {/* Background Effects */}
        <Blob top="10%" left="20%" rgba1="rgba(63, 206, 250, 0.4)" rgba2="rgba(1, 95, 176, 0.5)" />
        <Blob top="50%" left="70%" rgba1="rgba(180, 82, 255, 0.4)" rgba2="rgba(69, 27, 237, 0.5)" />
        <Blob top="80%" left = "45%" rgba1="rgba(255, 128, 209, 0.4)" rgba2="rgba(255, 23, 170, 0.5)" />
        
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
            <HomeSection />
            <Gallery />
            <SkillsSection />
            <ProjectsSection />
            <DrawSection />
            <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

    </div>
}