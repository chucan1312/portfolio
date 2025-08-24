import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react"

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    <span className="text-primary">Contact</span> Information
                </h2>

                <p className="text-center text-foreground mb-12 max-w-2xl mx-auto">
                    I'm always open to new opportunities, collaborations, or simply a chat about tech.
                    Feel free to reach out to me, I'd love to connect! 
                </p>

                <div className="flex space-y-8 justify-center gap-5">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Mail /> {" "}
                            </div>
                            <div> 
                                <h4 className="flex"> Email</h4>
                                <a href="mailto:trchan@student.ubc.ca" className="text-foreground hover:text-primary transition-colors">
                                    trchan@student.ubc.ca
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Phone /> {" "}
                            </div>
                            <div> 
                                <h4 className="flex"> Phone Number</h4>
                                <a href="tel:+14377769452" className="text-foreground hover:text-primary transition-colors">
                                    +1 (437) 776-9452
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <MapPin /> {" "}
                            </div>
                            <div> 
                                <h4 className="flex"> Location</h4>
                                <a className="text-foreground hover:text-primary transition-colors">
                                    Vancouver, BC, Canada
                                </a>
                            </div>
                        </div>

                </div>
                <div className="pt-8"> 
                    <h4 className="font-medium mb-4">Connect With Me</h4>
                    <div className="flex space-x-4 justify-center">
                        <a href="https://www.linkedin.com/in/chuc-an-trinh-891462332/" target="_blank">
                            <Linkedin />
                        </a>
                        <a href="https://www.instagram.com/trch.an/" target="_blank">
                            <Instagram />
                        </a>
                        <a href="https://www.facebook.com/cchucann/" target="_blank">
                            <Facebook />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}