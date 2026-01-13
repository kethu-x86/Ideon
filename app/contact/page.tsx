import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen">
            <SectionWrapper className="pt-32 md:pt-48">
                <div className="text-center space-y-6 mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading">
                        Get In <span className="text-primary">Touch</span>
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Have questions? We&apos;re here to help.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Email Us</h3>
                                <p className="text-muted-foreground">iedc@cet.ac.in</p>
                                <p className="text-muted-foreground">contact@ideon.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Call Us</h3>
                                <p className="text-muted-foreground">+91 88482 19106 (Main Coordinator)</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Visit Us</h3>
                                <p className="text-muted-foreground max-w-xs">
                                    IEDC Cell, College of Engineering Trikaripur
                                    Cheemeni P.O, Kasaragod - 671313
                                </p>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-6 bg-secondary/5 p-8 rounded-2xl border border-white/5">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium" htmlFor="name">Name</label>
                                <input id="name" className="w-full h-10 rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium" htmlFor="email">Email</label>
                                <input id="email" type="email" className="w-full h-10 rounded-md border border-input bg-background/50 px-3 py-2 text-sm" placeholder="john@example.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium" htmlFor="subject">Subject</label>
                            <input id="subject" className="w-full h-10 rounded-md border border-input bg-background/50 px-3 py-2 text-sm" placeholder="Inquiry about sponsorship" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium" htmlFor="message">Message</label>
                            <textarea id="message" className="w-full min-h-[120px] rounded-md border border-input bg-background/50 px-3 py-2 text-sm" placeholder="How can we help you?" />
                        </div>
                        <Button className="w-full" variant="secondary">Send Message</Button>
                    </form>
                </div>
            </SectionWrapper>
        </div>
    );
}
