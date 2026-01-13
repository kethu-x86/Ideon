"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Calendar, MapPin, Users, CreditCard, Sparkles, Clock } from "lucide-react";
import Link from "next/link";

const benefits = [
    { icon: CheckCircle2, text: "Access to all workshops & sessions" },
    { icon: CheckCircle2, text: "Mentorship from industry experts" },
    { icon: CheckCircle2, text: "Food, Swag Kit & Certification" },
    { icon: CheckCircle2, text: "Chance to win prizes worth ₹50K+" },
];

const details = [
    { icon: Calendar, label: "Event Date", value: "Jan 16-18, 2025" },
    { icon: MapPin, label: "Venue", value: "College of Engineering Trikaripur" },
    { icon: Users, label: "Team Size", value: "3-5 members" },
    { icon: CreditCard, label: "Registration Fee", value: "₹200 per team" },
];

export default function RegisterPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-surface via-white to-surface-alt">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-primary/10 to-accent/5 rounded-full blur-[150px] -translate-y-1/3 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-tertiary/10 to-primary/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3" />
            </div>

            <section className="relative min-h-screen flex items-center py-32 md:py-40">
                <div className="container px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Left Side - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div>
                                <span className="text-sm font-bold tracking-[0.3em] text-tertiary uppercase mb-4 block">
                                    Registration
                                </span>
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-foreground leading-[0.95] mb-6">
                                    SECURE YOUR{" "}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-tertiary">
                                        SPOT
                                    </span>
                                </h1>
                                <p className="text-xl text-secondary leading-relaxed max-w-lg">
                                    Join innovators at IDEON 1.0. Limited seats available for this
                                    exclusive 3-day bootcamp experience.
                                </p>
                            </div>

                            {/* Benefits List */}
                            <div className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        className="flex items-center gap-3 group"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-accent-soft flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <benefit.icon className="text-accent h-5 w-5" />
                                        </div>
                                        <span className="text-lg text-foreground font-medium">{benefit.text}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="pt-4"
                            >
                                <Button
                                    size="lg"
                                    className="w-full md:w-auto text-lg h-16 px-10 rounded-xl bg-gradient-to-r from-primary to-tertiary text-white shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-300 group"
                                    asChild
                                >
                                    <Link href="https://forms.google.com" target="_blank">
                                        <Sparkles className="mr-2 h-5 w-5" />
                                        Register via Google Forms
                                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                                <p className="mt-4 text-sm text-secondary font-medium flex items-center gap-2">
                                    <Clock size={14} />
                                    Registration closes soon. Limited seats!
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Right Side - Details Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="relative">
                                {/* Glow effect behind card */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-tertiary/20 rounded-3xl blur-2xl scale-105" />

                                <div className="relative bg-surface border border-border-subtle rounded-3xl p-8 md:p-10 shadow-2xl">
                                    {/* Card Header */}
                                    <div className="mb-8">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-1.5 h-10 bg-gradient-to-b from-primary to-accent rounded-full" />
                                            <div>
                                                <h3 className="text-2xl font-bold font-heading text-foreground">Registration Details</h3>
                                                <p className="text-sm text-secondary">Everything you need to know</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Details Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                        {details.map((detail, index) => {
                                            const Icon = detail.icon;
                                            return (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.4 + index * 0.1 }}
                                                    className="p-5 rounded-2xl bg-surface-alt border border-border-subtle hover:border-primary/20 hover:shadow-lg transition-all duration-300 group"
                                                >
                                                    <div className="flex items-start gap-3">
                                                        <div className="w-10 h-10 rounded-xl bg-primary-soft flex items-center justify-center group-hover:scale-110 transition-transform">
                                                            <Icon className="text-primary" size={20} />
                                                        </div>
                                                        <div>
                                                            <p className="text-xs text-secondary uppercase tracking-widest font-bold mb-1">
                                                                {detail.label}
                                                            </p>
                                                            <p className="font-bold text-foreground">
                                                                {detail.value}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                    </div>

                                    {/* Payment Note */}
                                    <div className="p-4 rounded-xl bg-tertiary-soft border border-tertiary/20">
                                        <p className="text-sm text-tertiary font-medium flex items-start gap-2">
                                            <CreditCard size={18} className="shrink-0 mt-0.5" />
                                            <span>Please keep your payment screenshot ready before registering. Payment details will be shared in the form.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
