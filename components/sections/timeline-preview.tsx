"use client";

import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const schedulePreview = [
    {
        day: "Day 1",
        date: "Jan 3",
        title: "Bootcamp Kickoff",
        events: ["Ice Breaking", "Design Thinking Workshop", "Team Formation"],
    },
    {
        day: "Day 2",
        date: "Jan 4",
        title: "Prototyping & Hacking",
        events: ["User Empathy Mapping", "Rapid Prototyping", "Mentorship Rounds"],
    },
    {
        day: "Day 3",
        date: "Jan 5",
        title: "The Final Pitch",
        events: ["Pitching Competition", "Jury Evaluation", "Awards Ceremony"],
    },
];

export function TimelinePreview() {
    return (
        <SectionWrapper id="timeline">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading">
                        Schedule <span className="text-primary">At A Glance</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-xl">
                        Three days of intensive learning, building, and pitching.
                    </p>
                </div>
                <Button variant="outline" asChild className="hidden md:inline-flex">
                    <Link href="/schedule">
                        View Full Schedule <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>

            <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12">
                {schedulePreview.map((item, index) => (
                    <div key={index} className="relative pl-8 md:pl-12">
                        {/* Timeline Dot */}
                        <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />

                        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                            <div className="min-w-[100px]">
                                <span className="text-sm font-bold text-accent uppercase tracking-wider block mb-1">
                                    {item.day}
                                </span>
                                <span className="text-2xl font-bold font-heading block">
                                    {item.date}
                                </span>
                            </div>

                            <div className="space-y-4 flex-1">
                                <h3 className="text-xl font-bold">{item.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {item.events.map((event, eventIndex) => (
                                        <span
                                            key={eventIndex}
                                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-white/5"
                                        >
                                            {event}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 md:hidden">
                <Button variant="outline" asChild className="w-full">
                    <Link href="/schedule">
                        View Full Schedule <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </SectionWrapper>
    );
}
