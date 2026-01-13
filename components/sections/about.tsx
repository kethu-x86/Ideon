"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Lightbulb, Rocket, Target, Users, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const pillars = [
    {
        icon: Target,
        title: "Design Thinking",
        description: "Empathy-driven solutions that address real user needs.",
        color: "primary",
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Cross-disciplinary teams working together intensively.",
        color: "accent",
    },
    {
        icon: Zap,
        title: "Rapid Execution",
        description: "From idea to prototype in just 72 hours.",
        color: "tertiary",
    },
    {
        icon: Rocket,
        title: "Real Impact",
        description: "Solutions that can make a real difference.",
        color: "primary",
    },
];

const colorMap = {
    primary: "bg-primary-soft text-primary border-primary/20",
    accent: "bg-accent-soft text-accent border-accent/20",
    tertiary: "bg-tertiary-soft text-tertiary border-tertiary/20",
};

export function About() {
    return (
        <SectionWrapper id="about" hasBackground className="relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-tertiary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
                {/* Section Header - Obscura style */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
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
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left - Description */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
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
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                                    <Lightbulb className="w-10 h-10 text-white" />
                                </div>
                                <div>
                                    <div className="text-4xl font-bold font-heading text-foreground">72</div>
                                    <div className="text-secondary">Hours of Innovation</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Pillars Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {pillars.map((pillar, index) => {
                            const Icon = pillar.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group"
                                >
                                    <div className={`
                                        p-6 rounded-2xl bg-surface border border-border-subtle
                                        hover:shadow-lg hover:-translate-y-1
                                        transition-all duration-300
                                    `}>
                                        <div className={`
                                            w-12 h-12 rounded-xl ${colorMap[pillar.color as keyof typeof colorMap]}
                                            flex items-center justify-center mb-4
                                            group-hover:scale-110 transition-transform duration-300
                                        `}>
                                            <Icon size={24} />
                                        </div>
                                        <h4 className="text-lg font-bold font-heading text-foreground mb-2">
                                            {pillar.title}
                                        </h4>
                                        <p className="text-sm text-secondary leading-relaxed">
                                            {pillar.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
}
