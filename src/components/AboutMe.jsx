import Carousel from "./Carousel"

export const AboutMe = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] pt-[5rem] pb-[1rem]" id="about">
            <div className="relative lg:ml-[4rem] px-[1rem] lg:px-0">
                <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-[3rem]"> About <span className="text-primary">Me</span></h1>
                <p className="flex justify-center">
                    I'm a 2nd-year Computer Science student at UBC, passionate about Full-Stack Development and Machine Learning.
                    I enjoy building applications that combine thoughtful design, solid engineering, and intelligent systems.
                    Through my projects, I'm always looking for ways to turn ideas into real, interactive products while continuously
                    learning new technologies and improving myselfself as a developer.
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
    )
}