"use client";

import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

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
        <SectionWrapper id="timeline" hasBackground>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft text-sm text-accent font-bold tracking-wide uppercase">
                        <Calendar size={16} />
                        <span>The Schedule</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground">
                        3 Days of <span className="text-primary">Impact</span>
                    </h2>
                    <p className="text-secondary text-lg max-w-xl leading-relaxed">
                        Three days of intensive learning, building, and pitching. From idea to prototype in 72 hours.
                    </p>
                </div>
                <Button variant="outline" asChild className="hidden md:inline-flex rounded-full border-primary text-primary hover:bg-primary-soft">
                    <Link href="/schedule">
                        View Full Schedule <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>

            <div className="relative border-l-2 border-primary/20 ml-4 md:ml-6 space-y-12">
                {schedulePreview.map((item, index) => (
                    <div key={index} className="relative pl-8 md:pl-16 group">
                        {/* Timeline Dot */}
                        <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-surface border-4 border-primary group-hover:scale-125 transition-transform duration-300" />

                        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start bg-surface p-6 rounded-2xl border border-border-subtle shadow-sm hover:shadow-md transition-all">
                            <div className="min-w-[120px] text-center md:text-left">
                                <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-1">
                                    {item.day}
                                </span>
                                <span className="text-2xl font-bold font-heading block text-primary">
                                    {item.date}
                                </span>
                            </div>

                            <div className="space-y-4 flex-1">
                                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                                    {item.title}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {item.events.map((event, eventIndex) => (
                                        <div
                                            key={eventIndex}
                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-surface-alt text-secondary border border-border-subtle group-hover:border-primary/20 transition-colors"
                                        >
                                            <Clock size={12} className="text-primary" />
                                            {event}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 md:hidden text-center">
                <Button variant="outline" asChild className="w-full rounded-full border-primary text-primary">
                    <Link href="/schedule">
                        View Full Schedule <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </SectionWrapper>
    );
}
