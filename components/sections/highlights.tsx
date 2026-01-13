"use client";

import { m, LazyMotion, domAnimation, useInView } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import Image from "next/image";
import { useRef } from "react";

// Import images for Next.js optimization
import sabarinathImg from "@/assets/speakers/sabarinath.jpeg";
import arjunImg from "@/assets/speakers/arjun.jpeg";
import adilImg from "@/assets/speakers/adil.jpeg";
import reejaImg from "@/assets/speakers/reeja.jpg";

const speakers = [
    {
        name: "Sabarinath K",
        role: "Design Thinker | Innovation Facilitator",
        company: "Co-Founder - Out Of The Box (OFB) & De' Lead International",
        image: sabarinathImg,
        color: "primary",
    },
    {
        name: "Arjun C P",
        role: "Designer & Maker | Innovation Coach",
        company: "Co-Founder - Out Of The Box (OFB) & De' Lead International",
        image: arjunImg,
        color: "accent",
    },
    {
        name: "Adil Nasser",
        role: "Nodal Officer",
        company: "IEDC CETkr",
        image: adilImg,
        color: "tertiary",
    },
    {
        name: "Reeja Ajo",
        role: "Nodal Officer",
        company: "IEDC CETkr",
        image: reejaImg,
        color: "primary",
    }
];

const colorMap = {
    primary: {
        gradient: "from-primary to-accent",
        ring: "ring-primary/30",
        glow: "shadow-primary/20",
        badge: "bg-primary-soft text-primary",
    },
    accent: {
        gradient: "from-accent to-tertiary",
        ring: "ring-accent/30",
        glow: "shadow-accent/20",
        badge: "bg-accent-soft text-accent",
    },
    tertiary: {
        gradient: "from-tertiary to-primary",
        ring: "ring-tertiary/30",
        glow: "shadow-tertiary/20",
        badge: "bg-tertiary-soft text-tertiary",
    },
};

export function Highlights() {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "100px", once: true });

    return (
        <LazyMotion features={domAnimation}>
            <SectionWrapper id="speakers" className="relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tertiary/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

                <div ref={ref} className="relative z-10">
                    {/* Section Header */}
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm font-bold tracking-[0.3em] text-tertiary uppercase mb-4 block">
                            Mentors & Facilitators
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold font-heading text-foreground mb-4">
                            MEET THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-tertiary">EXPERTS</span>
                        </h2>
                        <p className="text-lg text-secondary max-w-xl mx-auto">
                            Learn from industry leaders and innovation facilitators who will guide your bootcamp journey.
                        </p>
                    </m.div>

                    {/* Speakers Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {speakers.map((speaker, index) => {
                            const colors = colorMap[speaker.color as keyof typeof colorMap];

                            return (
                                <m.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="group"
                                >
                                    <div className={`
                                    relative h-full rounded-2xl bg-surface border border-border-subtle 
                                    hover:border-transparent hover:shadow-xl ${colors.glow}
                                    transition-all duration-300 overflow-hidden
                                    hover:-translate-y-2
                                `}>
                                        {/* Gradient border on hover */}
                                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm scale-[1.02]`} />

                                        <div className="relative bg-surface rounded-2xl p-6 h-full">
                                            {/* Number badge */}
                                            <div className="absolute top-3 right-3 text-4xl font-bold text-foreground/5 font-heading">
                                                0{index + 1}
                                            </div>

                                            <div className="flex flex-col items-center text-center space-y-4">
                                                {/* Profile Image */}
                                                <m.div
                                                    className={`relative w-24 h-24 rounded-full overflow-hidden ring-4 ${colors.ring} shadow-lg ${colors.glow} group-hover:ring-offset-2 group-hover:ring-offset-surface transition-all duration-300`}
                                                    whileHover={{ scale: 1.05 }}
                                                >
                                                    <Image
                                                        src={speaker.image}
                                                        alt={speaker.name}
                                                        fill
                                                        placeholder="blur"
                                                        className="object-cover"
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                                    />
                                                </m.div>

                                                {/* Info */}
                                                <div className="space-y-2">
                                                    <h3 className="text-lg font-bold font-heading text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300">
                                                        {speaker.name}
                                                    </h3>

                                                    <p className={`text-xs font-semibold ${colors.badge} inline-block px-2 py-0.5 rounded-full`}>
                                                        {speaker.role}
                                                    </p>

                                                    <p className="text-xs text-secondary leading-relaxed">
                                                        {speaker.company}
                                                    </p>
                                                </div>

                                                {/* Decorative line */}
                                                <div className={`w-12 h-0.5 rounded-full bg-gradient-to-r ${colors.gradient} opacity-30 group-hover:w-16 group-hover:opacity-100 transition-all duration-300`} />
                                            </div>
                                        </div>
                                    </div>
                                </m.div>
                            );
                        })}
                    </div>
                </div>
            </SectionWrapper>
        </LazyMotion>
    );
}
