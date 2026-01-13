import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
    return (
        <div className="min-h-screen flex items-center bg-surface-alt">
            <SectionWrapper className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h1 className="text-4xl md:text-6xl font-bold font-heading text-foreground">
                            Secure Your <br />
                            <span className="text-primary">Spot Now</span>
                        </h1>
                        <p className="text-xl text-secondary leading-relaxed">
                            Join 100+ innovators at IDEON 1.0. Limited seats available for this exclusive bootcamp experience.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="text-accent h-6 w-6" />
                                <span className="text-lg text-foreground">Access to all workshops & sessions</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="text-accent h-6 w-6" />
                                <span className="text-lg text-foreground">Mentorship from industry experts</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="text-accent h-6 w-6" />
                                <span className="text-lg text-foreground">Food, Swag Kit & Certification</span>
                            </div>
                        </div>

                        <div className="pt-8">
                            <Button size="lg" variant="default" className="w-full md:w-auto text-lg h-14 px-8 rounded-full shadow-lg" asChild>
                                <Link href="https://forms.google.com" target="_blank">
                                    Register via Google Forms <ArrowRight className="ml-2" />
                                </Link>
                            </Button>
                            <p className="mt-4 text-sm text-secondary font-medium">
                                *Registration fee: ₹499 per person. (Team of 3-5 recommended)
                            </p>
                        </div>
                    </div>

                    <div className="bg-surface border border-border-subtle rounded-3xl p-8 md:p-10 shadow-lg">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-2 text-foreground">Registration Details</h3>
                                <p className="text-secondary text-sm">Please keep your payment screenshot ready before registering.</p>
                            </div>

                            <div className="space-y-4">
                                <div className="p-5 rounded-2xl bg-surface-alt border border-border-subtle">
                                    <p className="text-xs text-secondary uppercase tracking-widest font-bold opacity-70 mb-1">Event Date</p>
                                    <p className="font-bold text-lg text-foreground">Jan 3-5, 2024</p>
                                </div>
                                <div className="p-5 rounded-2xl bg-surface-alt border border-border-subtle">
                                    <p className="text-xs text-secondary uppercase tracking-widest font-bold opacity-70 mb-1">Venue</p>
                                    <p className="font-bold text-lg text-foreground">College of Engineering Trikaripur</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
}
