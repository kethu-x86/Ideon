import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Lightbulb, UserCheck, Trophy } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            <SectionWrapper className="pt-32 pb-16 md:pt-48 md:pb-32 bg-surface-alt">
                <div className="text-center space-y-6 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading text-foreground">
                        About <span className="text-primary">IDEON 1.0</span>
                    </h1>
                    <p className="text-xl text-secondary leading-relaxed max-w-2xl mx-auto">
                        A flagship initiative by IEDC CETkr to foster innovation, design thinking, and entrepreneurship among students.
                    </p>
                </div>
            </SectionWrapper>

            <SectionWrapper className="bg-surface relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-soft rounded-full blur-3xl opacity-60 pointer-events-none translate-x-1/2 -translate-y-1/2" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start relative z-10">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">Our Vision</h2>
                        <div className="prose prose-lg text-secondary">
                            <p className="leading-relaxed">
                                To create a community of problem solvers who look beyond textbooks and classrooms.
                                IDEON aims to be the catalyst that transforms students into innovators and innovators into entrepreneurs.
                            </p>
                            <p className="leading-relaxed mt-4">
                                By integrating Design Thinking methodologies with hands-on prototyping, we empower participants
                                to tackle real-world challenges with empathy and creativity.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="p-8 md:p-10 rounded-3xl bg-surface-alt border border-border-subtle shadow-lg">
                            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
                                <span className="w-1 h-8 bg-accent rounded-full" /> Why Join?
                            </h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="h-10 w-10 rounded-xl bg-primary-soft flex items-center justify-center text-primary shrink-0">
                                        <Lightbulb size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground">Learn from Experts</h4>
                                        <p className="text-secondary text-sm">Gain insights from industry leaders and experienced mentors.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="h-10 w-10 rounded-xl bg-primary-soft flex items-center justify-center text-primary shrink-0">
                                        <UserCheck size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground">Network & Collaborate</h4>
                                        <p className="text-secondary text-sm">Connect with like-minded peers and potential co-founders.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="h-10 w-10 rounded-xl bg-primary-soft flex items-center justify-center text-primary shrink-0">
                                        <Trophy size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground">Win & Shine</h4>
                                        <p className="text-secondary text-sm">Win exciting prizes and gain recognition for your ideas.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper className="bg-surface-alt border-t border-border-subtle">
                <div className="text-center max-w-2xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">Ready to start your journey?</h2>
                    <p className="text-secondary text-lg">
                        Don&apos;t miss this opportunity to transform your ideas into reality.
                    </p>
                    <Button size="lg" variant="default" className="rounded-full px-10 h-14 text-lg shadow-xl shadow-primary/20" asChild>
                        <Link href="/register">Register Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
                    </Button>
                </div>
            </SectionWrapper>
        </div>
    );
}
