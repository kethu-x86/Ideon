"use client";

import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Card } from "@/components/ui/card";
import { Lightbulb, Rocket, Target, Users } from "lucide-react";

export function About() {
    return (
        <SectionWrapper id="about" hasBackground className="relative">
            {/* Background Visuals */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-soft rounded-full blur-3xl opacity-50 pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft text-sm text-accent font-bold tracking-wide uppercase">
                        <Rocket size={16} />
                        <span>Why IDEON?</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading leading-tight text-foreground">
                        Where Innovation Meets <span className="text-primary">Execution</span>.
                    </h2>
                    <p className="text-secondary text-lg leading-relaxed">
                        IDEON 1.0 is not just an event; it&apos;s a movement. Designed by IEDC CETkr,
                        this flagship bootcamp bridges the gap between abstract ideas and tangible impact.
                        We bring together engineering minds, designers, and problem-solvers for 2 days of
                        intense collaboration.
                    </p>
                    <div className="grid grid-cols-2 gap-6 pt-4">
                        <div className="p-6 rounded-2xl bg-surface border border-border-subtle shadow-sm hover:shadow-md transition-shadow">
                            <Target className="text-primary mb-3" size={28} />
                            <h4 className="font-bold text-foreground text-lg mb-1">Design Thinking</h4>
                            <p className="text-sm text-secondary">Empathy-driven solutions.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-surface border border-border-subtle shadow-sm hover:shadow-md transition-shadow">
                            <Users className="text-accent mb-3" size={28} />
                            <h4 className="font-bold text-foreground text-lg mb-1">Collaboration</h4>
                            <p className="text-sm text-secondary">Cross-disciplinary teams.</p>
                        </div>
                    </div>
                </div>

                {/* Abstract Visual - Light Theme */}
                <div className="relative">
                    <div className="aspect-square rounded-3xl overflow-hidden bg-surface-alt border border-border-subtle relative group shadow-lg">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-soft/50 to-accent-soft/50" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-3/4 h-3/4 rounded-2xl bg-white shadow-xl flex items-center justify-center p-8 transform -rotate-2 group-hover:rotate-0 transition-transform duration-500 border border-border-subtle">
                                <div className="text-center space-y-6">
                                    <div className="p-4 bg-primary-soft rounded-full inline-block">
                                        <Lightbulb className="w-12 h-12 text-primary mx-auto" />
                                    </div>
                                    <div className="space-y-3">
                                        <div className="h-3 w-32 bg-secondary/10 rounded-full mx-auto" />
                                        <div className="h-3 w-20 bg-secondary/10 rounded-full mx-auto" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
