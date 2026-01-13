"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white/50">
            {/* Abstract Background Effects - Light & Energetic */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-accent/20 blur-[100px] rounded-full mix-blend-multiply opacity-70" />
                <div className="absolute top-40 -left-32 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full mix-blend-multiply opacity-70" />
            </div>

            <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8 max-w-4xl"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-tertiary/20 shadow-sm text-sm text-secondary font-medium hover:shadow-md transition-shadow cursor-default group">
                        <span className="flex h-2.5 w-2.5 rounded-full bg-tertiary animate-pulse shadow-[0_0_8px_rgba(79,70,229,0.5)]"></span>
                        <span className="group-hover:text-tertiary transition-colors">Jan 3-5, 2024 • IEDC CETkr</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold font-heading tracking-tight text-foreground leading-[1.1]">
                        IDEON <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-tertiary relative inline-block">
                            1.0
                            {/* Sparkle decoration */}
                            <svg className="absolute -top-6 -right-8 w-10 h-10 text-tertiary opacity-100 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                            </svg>
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-secondary max-w-2xl mx-auto leading-relaxed font-medium">
                        Where <span className="text-primary font-bold">Ideas</span> Turn Into{" "}
                        <span className="text-tertiary font-bold">Impact</span>.
                        <br className="hidden md:block" />
                        Join the flagship innovation summit.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                        <Button size="lg" variant="tertiary" className="text-lg px-8 h-14 rounded-full shadow-lg hover:shadow-tertiary/30" asChild>
                            <Link href="/register">
                                Register Now
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg px-8 h-14 rounded-full border-border-subtle hover:bg-surface-alt bg-surface" asChild>
                            <Link href="/schedule">
                                <Calendar className="mr-2 h-5 w-5 text-primary" />
                                View Schedule
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-50"
            >
                <div className="w-6 h-10 border-2 border-primary/20 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1.5 h-1.5 bg-primary rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
