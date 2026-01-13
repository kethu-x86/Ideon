"use client";

import { SectionWrapper } from "@/components/layout/section-wrapper";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users } from "lucide-react";

export function Partners() {
    return (
        <SectionWrapper id="partners" className="bg-surface border-t border-border-subtle">
            <div className="text-center space-y-16">
                <div>
                    <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-8 flex items-center justify-center gap-2">
                        <Building2 size={16} /> Organized By
                    </h2>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">

                        <div className="group flex flex-col items-center gap-3">
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-3xl shadow-lg group-hover:scale-105 transition-transform">
                                I
                            </div>
                            <span className="text-xl font-bold font-heading text-foreground">IEDC CETkr</span>
                        </div>

                        <div className="h-12 w-px bg-border-subtle hidden md:block" />

                        <div className="group flex flex-col items-center gap-3">
                            <div className="w-20 h-20 rounded-2xl bg-surface-alt border border-border-subtle flex items-center justify-center text-foreground font-bold text-3xl shadow-sm group-hover:scale-105 transition-transform">
                                C
                            </div>
                            <span className="text-xl font-bold font-heading text-foreground">GEC Trikaripur</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-8 flex items-center justify-center gap-2">
                        <Users size={16} /> In Association With
                    </h2>
                    <div className="flex justify-center">
                        <div className="px-8 py-4 bg-surface-alt rounded-2xl border border-border-subtle shadow-sm hover:shadow-md transition-all">
                            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                                Out Of The Box
                            </span>
                        </div>
                    </div>
                </div>

                <div className="pt-8">
                    <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-primary to-accent text-white text-center space-y-8 shadow-xl shadow-primary/25 max-w-4xl mx-auto overflow-hidden relative">
                        {/* Decorative Circles */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                        <div className="relative z-10 space-y-6">
                            <h2 className="text-3xl md:text-5xl font-bold font-heading">Ready to Innovate?</h2>
                            <p className="text-white/90 text-lg md:text-xl max-w-xl mx-auto leading-relaxed font-medium">
                                Join 100+ innovators, mentors, and industry leaders for the most exciting bootcamp of the year.
                            </p>
                            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 border-0 h-14 px-8 text-lg rounded-full shadow-lg" asChild>
                                <Link href="/register">Get Your Ticket <ArrowRight className="ml-2 w-5 h-5" /></Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
