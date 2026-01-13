import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

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
        <div className="min-h-screen">
            <SectionWrapper className="pt-32 md:pt-48">
                <div className="text-center space-y-6 mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading">
                        Event <span className="text-primary">Schedule</span>
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        A packed 3-day agenda designed for maximum impact.
                    </p>
                </div>

                <div className="space-y-12 max-w-4xl mx-auto">
                    {fullSchedule.map((day, index) => (
                        <div key={index} className="space-y-6">
                            <div className="flex items-center gap-4">
                                <span className="px-3 py-1 rounded-full bg-accent/10 text-accent font-bold text-sm uppercase tracking-wider">
                                    {day.day}
                                </span>
                                <h2 className="text-2xl font-bold">{day.date}</h2>
                            </div>

                            <div className="grid gap-4">
                                {day.events.map((event, eventIndex) => (
                                    <Card key={eventIndex} className="bg-white/[0.02] border-white/5 hover:bg-white/[0.04] transition-colors">
                                        <CardContent className="flex flex-col md:flex-row gap-4 p-6 items-start md:items-center">
                                            <div className="min-w-[100px] text-primary font-mono font-bold">
                                                {event.time}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold mb-1">{event.title}</h3>
                                                <p className="text-muted-foreground text-sm">{event.desc}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
}
