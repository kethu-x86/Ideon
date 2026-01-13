import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            <SectionWrapper className="pt-32 pb-16 md:pt-48 md:pb-32">
                <div className="text-center space-y-6 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading">
                        About <span className="text-primary">IDEON 1.0</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        A flagship initiative by IEDC CETkr to foster innovation, design thinking, and entrepreneurship among students.
                    </p>
                </div>
            </SectionWrapper>

            <SectionWrapper className="bg-secondary/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            To create a community of problem solvers who look beyond textbooks and classrooms.
                            IDEON aims to be the catalyst that transforms students into innovators and innovators into entrepreneurs.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            By integrating Design Thinking methodologies with hands-on prototyping, we empower participants
                            to tackle real-world challenges with empathy and creativity.
                        </p>
                    </div>
                    <div>
                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                            <h3 className="text-xl font-bold mb-4 text-accent">Why Join?</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">1</span>
                                    <span className="text-muted-foreground">Learn from industry experts and mentors.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">2</span>
                                    <span className="text-muted-foreground">Network with like-minded peers and potential co-founders.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">3</span>
                                    <span className="text-muted-foreground">Win exciting prizes and gain recognition.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper>
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-8">Ready to start your journey?</h2>
                    <Button size="lg" variant="premium" asChild>
                        <Link href="/register">Register Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </div>
            </SectionWrapper>
        </div>
    );
}
