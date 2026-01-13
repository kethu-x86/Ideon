"use client";

import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Wrench, Award, Mic, Users, Zap } from "lucide-react";

const highlights = [
    {
        icon: Wrench,
        title: "Hands-on Workshops",
        description: "Master Design Thinking frameworks and prototyping tools with expert-led sessions.",
    },
    {
        icon: Users,
        title: "Team Collaboration",
        description: "Form interdisciplinary teams and brainstorm solutions for real-world problems.",
    },
    {
        icon: Mic,
        title: "Expert Mentorship",
        description: "Get one-on-one guidance from industry leaders and startup founders.",
    },
    {
        icon: Award,
        title: "Pitching & Awards",
        description: "Showcase your prototype to a panel of judges and win exciting prizes.",
    },
    {
        icon: Zap,
        title: "Rapid Prototyping",
        description: "Turn ideas into mockups and functional prototypes within hours.",
    },
];

export function Highlights() {
    return (
        <SectionWrapper id="highlights">
            <div className="text-center mb-20 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground">
                    Event <span className="text-primary">Highlights</span>
                </h2>
                <p className="text-secondary text-lg max-w-2xl mx-auto">
                    Experience a 2-day journey from ideation to implementation.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {highlights.map((item, index) => (
                    <Card key={index} className="border-border-subtle bg-surface hover:-translate-y-1">
                        <CardHeader>
                            <div className="h-14 w-14 rounded-2xl bg-primary-soft flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <item.icon size={28} />
                            </div>
                            <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-secondary leading-relaxed">
                                {item.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </SectionWrapper>
    );
}
