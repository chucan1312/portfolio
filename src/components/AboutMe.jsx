import Carousel from "./Carousel"

export const AboutMe = () => {
    return (
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
    )
}