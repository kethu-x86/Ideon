"use client";

import { m, LazyMotion, domAnimation, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, memo } from "react";
import { Clock, Sun, Moon, Trophy, Sparkles } from "lucide-react";
import { SectionWrapper } from "@/components/layout/section-wrapper";

// -----------------------------------------------------------------------------
// Static Data & Constants (Moved outside component to prevent recreation)
// -----------------------------------------------------------------------------

const TIMELINE_PATH = "M100 50 C 30 150, 170 250, 100 350 C 30 450, 170 550, 100 650 C 30 750, 100 850, 100 850";

const fullSchedule = [
    {
        date: "Friday, Jan 16",
        day: "Day 1",
        subtitle: "Kickoff & Foundation",
        icon: Sun,
        color: "primary",
        events: [
            { time: "5:00 PM", title: "Registration" },
            { time: "6:00 PM", title: "Opening Ceremony" },
            { time: "7:30 PM", title: "Ice Breaking" },
            { time: "8:30 PM", title: "Problem Statement" },
        ]
    },
    {
        date: "Saturday, Jan 17",
        day: "Day 2",
        subtitle: "Build & Iterate",
        icon: Moon,
        color: "accent",
        events: [
            { time: "9:00 AM", title: "Design Thinking" },
            { time: "11:15 AM", title: "Prototyping" },
            { time: "2:00 PM", title: "Mentorship" },
            { time: "7:00 PM", title: "Hack Night" },
        ]
    },
    {
        date: "Sunday, Jan 18",
        day: "Day 3",
        subtitle: "Pitch & Win",
        icon: Trophy,
        color: "tertiary",
        events: [
            { time: "9:00 AM", title: "Pitch Polish" },
            { time: "2:00 PM", title: "Grand Finale" },
            { time: "4:00 PM", title: "Awards" },
            { time: "5:00 PM", title: "Closing" },
        ]
    },
] as const;

const colorMap = {
    primary: {
        badge: "bg-primary text-white",
        border: "border-primary/30",
        glow: "shadow-primary/20",
        iconBg: "bg-primary-soft",
        iconColor: "text-primary",
        dot: "bg-primary",
    },
    accent: {
        badge: "bg-accent text-white",
        border: "border-accent/30",
        glow: "shadow-accent/20",
        iconBg: "bg-accent-soft",
        iconColor: "text-accent",
        dot: "bg-accent",
    },
    tertiary: {
        badge: "bg-tertiary text-white",
        border: "border-tertiary/30",
        glow: "shadow-tertiary/20",
        iconBg: "bg-tertiary-soft",
        iconColor: "text-tertiary",
        dot: "bg-tertiary",
    },
} as const;

// -----------------------------------------------------------------------------
// Sub-Components
// -----------------------------------------------------------------------------

// Memoized to prevent unnecessary re-renders when parent scroll changes
const TimelineItem = memo(({ day, index }: { day: typeof fullSchedule[number]; index: number }) => {
    const colors = colorMap[day.color as keyof typeof colorMap];
    const Icon = day.icon;
    const isEven = index % 2 === 0;

    return (
        <m.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`flex items-center gap-8 md:gap-16 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
        >
            {/* Day Card */}
            <div className={`flex-1 ${isEven ? 'text-right' : 'text-left'}`}>
                <m.div
                    className={`
                        inline-block p-6 md:p-8 rounded-2xl
                        bg-surface border ${colors.border}
                        shadow-xl ${colors.glow}
                        hover:scale-[1.02] transition-transform duration-300
                    `}
                    whileHover={{ y: -5 }}
                >
                    {/* Day Header */}
                    <div className={`flex items-center gap-3 mb-4 ${isEven ? 'justify-end' : 'justify-start'}`}>
                        <div className={`w-12 h-12 rounded-xl ${colors.iconBg} flex items-center justify-center ${colors.iconColor} ${isEven ? 'order-2' : ''}`}>
                            <Icon size={24} />
                        </div>
                        <div className={isEven ? 'text-right' : 'text-left'}>
                            <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold ${colors.badge} mb-1`}>
                                {day.day}
                            </span>
                            <h3 className="text-xl md:text-2xl font-bold font-heading text-foreground">
                                {day.date}
                            </h3>
                        </div>
                    </div>

                    {/* Subtitle */}
                    <p className="text-sm text-secondary mb-4 flex items-center gap-2 justify-end">
                        {isEven && <Sparkles size={14} className={colors.iconColor} />}
                        <span>{day.subtitle}</span>
                        {!isEven && <Sparkles size={14} className={colors.iconColor} />}
                    </p>

                    {/* Events */}
                    <div className="space-y-2">
                        {day.events.map((event, eventIndex) => (
                            <div // Changed from m.div to div for lighter DOM if animation is not critical, or keep m.div if stagger is needed. Keeping simple fade-in.
                                key={eventIndex}
                                className={`flex items-center gap-3 text-sm ${isEven ? 'justify-end' : 'justify-start'}`}
                            >
                                {isEven && <span className="text-foreground font-medium">{event.title}</span>}
                                <span className={`font-mono text-xs ${colors.iconColor} ${colors.iconBg} px-2 py-0.5 rounded flex items-center gap-1`}>
                                    <Clock size={10} />
                                    {event.time}
                                </span>
                                {!isEven && <span className="text-foreground font-medium">{event.title}</span>}
                            </div>
                        ))}
                    </div>
                </m.div>
            </div>

            {/* Center Dot on the Path */}
            <div className="flex-shrink-0 relative">
                <m.div
                    className={`w-6 h-6 rounded-full ${colors.dot} shadow-lg ring-4 ring-surface`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                />
                {/* Pulse effect */}
                <div
                    className={`absolute inset-0 rounded-full ${colors.dot} animate-pulse-slow`}
                    style={{ opacity: 0.4 }}
                />
            </div>

            {/* Empty space on the other side */}
            <div className="flex-1" />
        </m.div>
    );
});
TimelineItem.displayName = "TimelineItem";

// -----------------------------------------------------------------------------
// Main Component
// -----------------------------------------------------------------------------

export function TimelinePreview() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const isInView = useInView(containerRef, { margin: "100px", once: true });

    // Animate the path drawing
    const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

    return (
        <LazyMotion features={domAnimation}>
            <SectionWrapper id="schedule" className="relative overflow-hidden py-20">
                {/* Background - Using will-change to hint browser for optimization */}
                <div className="absolute inset-0 pointer-events-none" style={{ willChange: "transform" }}>
                    <div className="absolute top-20 left-[10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
                    <div className="absolute top-[40%] right-[10%] w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px]" />
                    <div className="absolute bottom-20 left-[20%] w-[350px] h-[350px] bg-tertiary/5 rounded-full blur-[100px]" />
                </div>

                {/* Header */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <span className="text-sm font-bold tracking-[0.3em] text-tertiary uppercase mb-4 block">
                        Timeline
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold font-heading text-foreground mb-4">
                        THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-tertiary">JOURNEY</span>
                    </h2>
                    <p className="text-lg text-secondary max-w-xl mx-auto">
                        Follow the path from ideation to innovation
                    </p>
                </m.div>

                {/* Timeline Container */}
                <div ref={containerRef} className="relative max-w-5xl mx-auto px-4">
                    {/* The Wavy/Curvy Path SVG */}
                    <svg
                        className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-40 md:w-80"
                        viewBox="0 0 200 900"
                        fill="none"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        {/* Background path (faded) */}
                        <path
                            d={TIMELINE_PATH}
                            stroke="rgba(0,85,255,0.08)"
                            strokeWidth="3"
                            strokeLinecap="round"
                            fill="none"
                        />
                        {/* Animated path */}
                        <m.path
                            d={TIMELINE_PATH}
                            stroke="url(#gradient)"
                            strokeWidth="3"
                            strokeLinecap="round"
                            fill="none"
                            style={{ pathLength }}
                        />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#0055FF" />
                                <stop offset="50%" stopColor="#00D8FF" />
                                <stop offset="100%" stopColor="#4F46E5" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Timeline Content */}
                    <div className="relative z-10 space-y-24 md:space-y-32">
                        {fullSchedule.map((day, index) => (
                            <TimelineItem key={index} day={day} index={index} />
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </LazyMotion>
    );
}