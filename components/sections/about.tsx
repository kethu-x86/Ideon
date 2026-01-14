"use client";

import { m, LazyMotion, domAnimation, useInView } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const pillars = [
    {
        title: "Design Thinking",
        description: "Empathy-driven solutions that address real user needs.",
        color: "primary",
    },
    {
        title: "Collaboration",
        description: "Cross-disciplinary teams working together intensively.",
        color: "accent",
    },
    {
        title: "Rapid Execution",
        description: "From idea to prototype in just 72 hours.",
        color: "tertiary",
    },
    {
        title: "Real Impact",
        description: "Solutions that can make a real difference.",
        color: "primary",
    },
];

const colorMap = {
    primary: "bg-primary",
    accent: "bg-accent",
    tertiary: "bg-tertiary",
};

export function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "100px", once: true }); // optimize: only animate once

    return (
        <LazyMotion features={domAnimation}>
            <SectionWrapper id="about" hasBackground className="relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-tertiary/5 rounded-full blur-3xl pointer-events-none" />

                <div ref={ref} className="relative z-10 hidden-when-not-viewed">
                    {/* Section Header - Obscura style */}
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="mb-16"
                    >
                        <span className="text-sm font-bold tracking-[0.3em] text-accent uppercase mb-4 block">
                            About
                        </span>
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                            <h2 className="text-4xl md:text-6xl font-bold font-heading text-foreground max-w-2xl">
                                WHY <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">IDEON</span>?
                            </h2>
                            <Button variant="outline" size="lg" className="rounded-xl w-fit" asChild>
                                <Link href="/about">
                                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </m.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        {/* Left - Description */}
                        <m.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <p className="text-lg md:text-xl text-secondary leading-relaxed">
                                IDEON 1.0 is not just an event; it&apos;s a <strong className="text-foreground">movement</strong>.
                                Designed by IEDC CETkr, this flagship bootcamp bridges the gap between
                                abstract ideas and tangible impact through intensive collaboration and
                                expert mentorship.
                            </p>

                            <p className="text-secondary leading-relaxed">
                                We bring together engineering minds, designers, and problem-solvers
                                for 3 days of intense collaboration, learning, and building.
                                From ideation to prototype, experience the full innovation lifecycle.
                            </p>

                            {/* Visual element */}
                            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-primary-soft via-white to-accent-soft border border-border-subtle shadow-lg">
                                <div className="flex items-center gap-6">
                                    <div>
                                        <div className="text-4xl font-bold font-heading text-foreground">72</div>
                                        <div className="text-secondary">Hours of Innovation</div>
                                    </div>
                                </div>
                            </div>
                        </m.div>

                        {/* Right - Pillars Grid */}
                        <m.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                            {pillars.map((pillar, index) => {
                                return (
                                    <m.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.5 + (index * 0.1) }}
                                        className="group"
                                    >
                                        <div className="
                                            h-full p-8 rounded-2xl bg-surface border border-border-subtle
                                            hover:shadow-xl hover:-translate-y-1
                                            transition-all duration-300 relative overflow-hidden
                                        ">
                                            <div className={`
                                                absolute top-0 left-0 w-1.5 h-full 
                                                ${colorMap[pillar.color as keyof typeof colorMap]}
                                                opacity-60 group-hover:opacity-100 transition-opacity duration-300
                                            `} />
                                            <h4 className="text-xl font-bold font-heading text-foreground mb-3 relative z-10">
                                                {pillar.title}
                                            </h4>
                                            <p className="text-secondary leading-relaxed relative z-10">
                                                {pillar.description}
                                            </p>
                                        </div>
                                    </m.div>
                                );
                            })}
                        </m.div>
                    </div>
                </div>
            </SectionWrapper>
        </LazyMotion>
    );
}