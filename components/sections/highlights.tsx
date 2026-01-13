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
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold font-heading">
                    Event <span className="text-primary">Highlights</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Experience a 2-day journey from ideation to implementation.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {highlights.map((item, index) => (
                    <Card key={index} className="border-white/5 bg-white/[0.02]">
                        <CardHeader>
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                <item.icon size={24} />
                            </div>
                            <CardTitle className="text-xl">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </SectionWrapper>
    );
}
