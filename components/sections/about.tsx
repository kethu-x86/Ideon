"use client";

import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Card } from "@/components/ui/card";
import { Lightbulb, Rocket, Target, Users } from "lucide-react";

export function About() {
    return (
        <SectionWrapper id="about" className="bg-secondary/5 relative">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium">
                        <Rocket size={16} />
                        <span>Why IDEON?</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading leading-tight">
                        Where Innovation Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Execution</span>.
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        IDEON 1.0 is not just an event; it&apos;s a movement. Designed by IEDC CETkr,
                        this flagship bootcamp bridges the gap between abstract ideas and tangible impact.
                        We bring together engineering minds, designers, and problem-solvers for 2 days of
                        intense collaboration.
                    </p>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <Target className="text-accent mb-2" size={24} />
                            <h4 className="font-bold text-foreground">Design Thinking</h4>
                            <p className="text-sm text-muted-foreground">Empathy-driven solutions.</p>
                        </div>
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <Users className="text-primary mb-2" size={24} />
                            <h4 className="font-bold text-foreground">Collaboration</h4>
                            <p className="text-sm text-muted-foreground">Cross-disciplinary teams.</p>
                        </div>
                    </div>
                </div>

                {/* Abstract Visual / Image Placeholder */}
                <div className="relative">
                    <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-secondary to-background border border-border/50 relative group">
                        {/* Simulated UI Elements or Abstract Art */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-3/4 h-3/4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center p-8 transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                                <div className="text-center space-y-4">
                                    <Lightbulb className="w-16 h-16 text-yellow-400 mx-auto animate-pulse" />
                                    <div className="h-2 w-24 bg-white/10 rounded-full mx-auto" />
                                    <div className="h-2 w-16 bg-white/10 rounded-full mx-auto" />
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl" />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
