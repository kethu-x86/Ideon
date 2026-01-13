import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

const fullSchedule = [
    {
        date: "Friday, Jan 3, 2024",
        day: "Day 1",
        events: [
            { time: "5:00 PM", title: "Registration", desc: "Check-in and kit distribution." },
            { time: "6:00 PM", title: "Opening Ceremony", desc: "Welcome address and keynote." },
            { time: "7:30 PM", title: "Ice Breaking", desc: "Team formation and networking dinner." },
            { time: "8:30 PM", title: "Problem Statement Release", desc: "Teams pick their challenges." },
        ]
    },
    {
        date: "Saturday, Jan 4, 2024",
        day: "Day 2",
        events: [
            { time: "9:00 AM", title: "Design Thinking Workshop", desc: "Empathy mapping and ideation." },
            { time: "11:15 AM", title: "Prototyping Session", desc: "Hands-on building with tools." },
            { time: "2:00 PM", title: "Mentorship Round 1", desc: "Feedback from industry experts." },
            { time: "7:00 PM", title: "Hack Night Begins", desc: "All-night coding/building session." },
        ]
    },
    {
        date: "Sunday, Jan 5, 2024",
        day: "Day 3",
        events: [
            { time: "9:00 AM", title: "Pitch Polish", desc: "Refining presentations." },
            { time: "2:00 PM", title: "Grand Finale", desc: "Teams present to the jury." },
            { time: "4:00 PM", title: "Awards Ceremony", desc: "Winners announced." },
            { time: "5:00 PM", title: "Closing Note", desc: "See you next year!" },
        ]
    },
];

export default function SchedulePage() {
    return (
        <div className="min-h-screen bg-surface-alt">
            <SectionWrapper className="pt-32 md:pt-48">
                <div className="text-center space-y-6 mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading text-foreground">
                        Event <span className="text-primary">Schedule</span>
                    </h1>
                    <p className="text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
                        A packed 3-day agenda designed for maximum impact.
                    </p>
                </div>

                <div className="space-y-16 max-w-4xl mx-auto">
                    {fullSchedule.map((day, index) => (
                        <div key={index} className="space-y-8 relative">
                            {/* Date Header */}
                            <div className="flex flex-col md:flex-row md:items-center gap-4 border-b border-border-subtle pb-4">
                                <span className="inline-flex px-4 py-1.5 rounded-full bg-primary-soft text-primary font-bold text-sm uppercase tracking-wider w-fit">
                                    {day.day}
                                </span>
                                <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground">{day.date}</h2>
                            </div>

                            <div className="grid gap-4">
                                {day.events.map((event, eventIndex) => (
                                    <div key={eventIndex} className="group flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-surface border border-border-subtle hover:border-primary/30 hover:shadow-md transition-all duration-300">
                                        <div className="min-w-[120px] pt-1">
                                            <div className="inline-flex items-center gap-2 font-mono font-bold text-primary bg-primary-soft px-3 py-1 rounded-lg text-sm">
                                                <Clock size={14} />
                                                {event.time}
                                            </div>
                                        </div>
                                        <div className="flex-1 space-y-1">
                                            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{event.title}</h3>
                                            <p className="text-secondary text-base leading-relaxed">{event.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
}
