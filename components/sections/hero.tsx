"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calendar, Users, Clock } from "lucide-react";

// --- Optimized Brain Lobe (Glints Removed) ---
const BrainLobe = ({
    className,
    delay = 0,
    pulseColor = "rgba(0, 200, 255, 0.5)"
}: {
    className?: string;
    delay?: number;
    pulseColor?: string;
}) => (
    <motion.div
        // Removed backdrop-blur-sm for more seamless integration
        className={`absolute overflow-hidden ${className}`}
        // HINT: will-change helps browser anticipate the border-radius morph
        style={{
            willChange: "border-radius, transform",
            background: `
                radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 25%),
                radial-gradient(circle at 80% 80%, rgba(255,255,255,0.05) 0%, transparent 20%),
                repeating-radial-gradient(
                    circle at 50% 50%, 
                    transparent 0px,
                    rgba(0, 150, 255, 0.05) 2px, 
                    transparent 4px, 
                    transparent 12px
                ),
                linear-gradient(135deg, rgba(0,85,255,0.8) 0%, rgba(0,40,120,0.9) 50%, rgba(79,70,229,0.85) 100%)
            `,
            // Slightly reduced shadow opacity for seamlessness
            boxShadow: `
                inset 0 0 30px rgba(0,200,255,0.3),
                inset 0 0 60px rgba(0,100,255,0.15),
                0 0 20px rgba(0,100,255,0.2),
                0 0 40px rgba(0,100,255,0.1)
            `
        }}
        animate={{
            borderRadius: [
                "60% 40% 30% 70% / 60% 30% 70% 40%",
                "40% 60% 60% 40% / 40% 50% 50% 60%",
                "50% 50% 40% 60% / 55% 45% 55% 45%",
                "60% 40% 30% 70% / 60% 30% 70% 40%",
            ],
        }}
        transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
        }}
    >
        {/* REMOVED: Synapse flashes (glint animation) */}

        {/* Pulsing inner glow - Changed from animating boxShadow (Paint) to opacity (Composite) */}
        <motion.div
            className="absolute inset-0 rounded-[inherit]" // Inherits the morphing border radius
            style={{
                boxShadow: `inset 0 0 40px ${pulseColor}`,
                willChange: "opacity"
            }}
            animate={{ opacity: [0.3, 0.8, 0.3] }} // Slightly reduced intensity
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
    </motion.div>
);

// --- Neural Connection Line ---
const NeuralConnection = ({
    from,
    to,
    delay = 0
}: {
    from: { x: number; y: number };
    to: { x: number; y: number };
    delay?: number;
}) => (
    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
        <defs>
            <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0,216,255,0.6)" />
                <stop offset="50%" stopColor="rgba(0,85,255,0.7)" />
                <stop offset="100%" stopColor="rgba(79,70,229,0.6)" />
            </linearGradient>
        </defs>
        <motion.line
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke="url(#neural-gradient)"
            strokeWidth="1.5" // Slightly thinner
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.5, 0.5, 0] }} // Reduced opacity
            transition={{ duration: 3, repeat: Infinity, delay, ease: "easeInOut" }}
        />
    </svg>
);

// --- Floating Thought Particle ---
const ThoughtParticle = ({
    className,
    size = 4,
    color = "bg-accent",
    duration = 2,
    delay = 0,
    direction = { x: 0, y: -30 }
}: {
    className?: string;
    size?: number;
    color?: string;
    duration?: number;
    delay?: number;
    direction?: { x: number; y: number };
}) => (
    <motion.div
        className={`absolute ${color} rounded-full ${className} blur-[1px]`} // Added slight blur
        style={{ width: size, height: size, willChange: "transform, opacity" }}
        animate={{
            x: [0, direction.x],
            y: [0, direction.y],
            opacity: [0, 0.8, 0.8, 0], // Reduced opacity
            scale: [0.5, 1.2, 1, 0.3],
        }}
        transition={{
            duration,
            repeat: Infinity,
            delay,
            ease: "easeOut",
        }}
    />
);

// --- Orbiting Dot ---
const OrbitingDot = ({
    radius = 100,
    duration = 8,
    delay = 0,
    size = 6,
    color = "bg-primary"
}: {
    radius?: number;
    duration?: number;
    delay?: number;
    size?: number;
    color?: string;
}) => (
    <motion.div
        className="absolute top-1/2 left-1/2"
        style={{ willChange: "transform" }}
        animate={{ rotate: 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear", delay }}
    >
        <motion.div
            className={`${color} rounded-full shadow-lg blur-[1px]`} // Added slight blur
            style={{
                width: size,
                height: size,
                marginLeft: radius, // Using margin to offset from center, rotation handles the orbit
                boxShadow: `0 0 ${size * 2}px currentColor`,
                willChange: "transform",
                opacity: 0.8
            }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
        />
    </motion.div>
);

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-surface via-white to-surface-alt">
            {/* Background Effects - Slightly reduced opacity for better blending */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
                <motion.div
                    className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-gradient-to-br from-accent/20 to-primary/10 blur-[120px] rounded-full"
                    style={{ willChange: "transform, opacity", opacity: 0.5, transform: "translateZ(0)" }}
                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.6, 0.5] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute top-1/2 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-tertiary/15 to-accent/10 blur-[120px] rounded-full"
                    style={{ willChange: "transform, opacity", opacity: 0.4, transform: "translateZ(0)" }}
                    animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.5, 0.4] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />

                {/* Grid Pattern - Static CSS for better performance */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                />
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">

                    {/* Left Side - Enhanced Brain Animation */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="flex items-center justify-center relative h-[400px] lg:h-[500px] order-first lg:order-none pointer-events-none" // Added pointer-events-none to container
                    >
                        <div className="relative w-[450px] h-[400px] scale-[0.65] sm:scale-[0.8] md:scale-100 origin-center">

                            {/* REMOVED: Outer glow ring (the circle around it) */}

                            {/* Neural connections */}
                            <NeuralConnection from={{ x: 200, y: 140 }} to={{ x: 120, y: 180 }} delay={0} />
                            <NeuralConnection from={{ x: 280, y: 200 }} to={{ x: 350, y: 300 }} delay={1.5} />
                            <NeuralConnection from={{ x: 140, y: 250 }} to={{ x: 320, y: 320 }} delay={3} />

                            {/* Orbiting dots */}
                            <OrbitingDot radius={180} duration={15} size={8} color="bg-accent" />
                            <OrbitingDot radius={140} duration={12} delay={2} size={6} color="bg-primary" />
                            <OrbitingDot radius={200} duration={20} delay={5} size={4} color="bg-tertiary" />

                            {/* 1. Main Cortex */}
                            <BrainLobe
                                className="w-[340px] h-[260px] top-[10px] right-[20px] z-10"
                                delay={0}
                                pulseColor="rgba(0, 216, 255, 0.3)"
                            />

                            {/* 2. Frontal Lobe */}
                            <BrainLobe
                                className="w-[260px] h-[200px] top-[90px] left-[10px] z-20"
                                delay={0.5}
                                pulseColor="rgba(0, 85, 255, 0.4)"
                            />

                            {/* 3. Cerebellum */}
                            <BrainLobe
                                className="w-[130px] h-[110px] bottom-[30px] right-[50px] z-0"
                                delay={1}
                                pulseColor="rgba(79, 70, 229, 0.3)"
                            />

                            {/* Brain stem glow - Optimized and softened */}
                            <motion.div
                                className="absolute bottom-0 right-[110px] w-16 h-28 rounded-full blur-3xl -z-10"
                                style={{
                                    background: "linear-gradient(to top, transparent, rgba(0,85,255,0.2))",
                                    willChange: "opacity"
                                }}
                                animate={{ opacity: [0.2, 0.5, 0.2] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />

                            {/* Floating thought particles */}
                            <ThoughtParticle className="-top-5 right-24" color="bg-accent" size={12} duration={2.5} direction={{ x: 10, y: -40 }} />
                            <ThoughtParticle className="top-10 -right-5" color="bg-primary" size={8} duration={3} delay={0.5} direction={{ x: 20, y: -30 }} />
                            <ThoughtParticle className="top-1/3 -left-8" color="bg-tertiary" size={10} duration={2.8} delay={1} direction={{ x: -25, y: -20 }} />
                            <ThoughtParticle className="bottom-20 left-10" color="bg-accent" size={6} duration={2.2} delay={1.5} direction={{ x: -15, y: -35 }} />
                            <ThoughtParticle className="-top-10 left-1/3" color="bg-primary" size={5} duration={3.5} delay={2} direction={{ x: 5, y: -50 }} />
                            <ThoughtParticle className="top-1/2 right-0" color="bg-tertiary" size={7} duration={2} delay={0.8} direction={{ x: 30, y: -15 }} />

                        </div>
                    </motion.div>

                    {/* Right Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        {/* Category Label */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <span className="text-sm md:text-base font-bold tracking-[0.3em] text-tertiary uppercase">
                                Bootcamp
                            </span>
                        </motion.div>

                        {/* Main Title */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold font-heading tracking-tight text-foreground leading-[0.9]">
                                IDEON
                            </h1>
                            <div className="flex items-baseline gap-4 mt-2">
                                <motion.span
                                    className="text-6xl md:text-7xl lg:text-8xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-tertiary"
                                    animate={{
                                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                                    }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                    style={{ backgroundSize: "200% 200%", willChange: "background-position" }}
                                >
                                    1.0
                                </motion.span>
                                <motion.div
                                    className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full origin-left"
                                    animate={{ scaleX: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </div>
                        </motion.div>

                        {/* Date */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="space-y-4"
                        >
                            <div className="flex items-baseline gap-3">
                                <span className="text-3xl md:text-4xl font-bold font-heading text-foreground">2025</span>
                                <motion.span
                                    className="text-3xl md:text-4xl font-bold font-heading text-primary"
                                    animate={{ opacity: [1, 0.7, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    JAN 16-18
                                </motion.span>
                            </div>
                        </motion.div>

                        {/* Tagline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="text-lg md:text-xl text-secondary max-w-lg leading-relaxed"
                        >
                            Where <span className="text-primary font-semibold">Ideas</span> Turn Into{" "}
                            <span className="text-tertiary font-semibold">Impact</span>.
                            Join the flagship innovation bootcamp by IEDC CETkr.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                            className="flex flex-wrap items-center gap-4 pt-4"
                        >
                            <Button
                                size="lg"
                                className="text-lg px-8 h-14 rounded-xl bg-gradient-to-r from-primary to-tertiary text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-300 group"
                                asChild
                            >
                                <Link href="https://forms.google.com" target="_blank">
                                    Register Now
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </motion.div>

                        {/* Quick Stats */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.1 }}
                            className="flex items-center gap-8 pt-6 border-t border-border-subtle"
                        >
                            <div className="flex items-center gap-2">
                                <Users size={18} className="text-primary" />
                                <span className="text-sm text-secondary">
                                    <strong className="text-foreground">Hands On</strong> Learning
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={18} className="text-accent" />
                                <span className="text-sm text-secondary">
                                    <strong className="text-foreground">72</strong> Hours
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}