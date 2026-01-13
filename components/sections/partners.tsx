"use client";

import { SectionWrapper } from "@/components/layout/section-wrapper";
import Link from "next/link";

export function Partners() {
    return (
        <SectionWrapper id="partners" className="border-t border-white/5">
            <div className="text-center space-y-8">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                    Organized By
                </p>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-80">
                    {/* Placeholder for Logos - Replacing with text for now as no images available */}
                    <div className="text-2xl font-bold font-heading text-foreground/80 hover:text-foreground transition-colors cursor-default">
                        IEDC CETkr
                    </div>

                    <div className="h-8 w-px bg-white/10 hidden md:block" />

                    <div className="text-2xl font-bold font-heading text-foreground/80 hover:text-foreground transition-colors cursor-default">
                        College of Engineering Trikaripur
                    </div>
                </div>

                <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest pt-8">
                    In Association With
                </p>

                <div className="flex flex-wrap justify-center items-center gap-12 text-center">
                    <div className="text-xl font-semibold text-foreground/60 hover:text-accent transition-colors">
                        Out Of The Box (OFB)
                    </div>
                </div>

                <div className="pt-16">
                    <div className="p-8 rounded-2xl bg-gradient-to-b from-secondary/20 to-secondary/5 border border-white/5 text-center max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4">Ready to Innovate?</h3>
                        <p className="text-muted-foreground mb-6">
                            Join us for the most exciting innovation bootcamp of the year.
                        </p>
                        <Link
                            href="/register"
                            className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        >
                            Register Now
                        </Link>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
