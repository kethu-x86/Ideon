import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
    return (
        <div className="min-h-screen flex items-center">
            <SectionWrapper className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h1 className="text-4xl md:text-6xl font-bold font-heading">
                            Secure Your <br />
                            <span className="text-primary">Spot Now</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Join 100+ innovators at IDEON 1.0. Limited seats available for this exclusive bootcamp experience.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="text-accent h-6 w-6" />
                                <span className="text-lg">Access to all workshops & sessions</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="text-accent h-6 w-6" />
                                <span className="text-lg">Mentorship from industry experts</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="text-accent h-6 w-6" />
                                <span className="text-lg">Food, Swag Kit & Certification</span>
                            </div>
                        </div>

                        <div className="pt-8">
                            <Button size="lg" variant="premium" className="w-full md:w-auto text-lg h-14 px-8">
                                Register via Google Forms <ArrowRight className="ml-2" />
                            </Button>
                            <p className="mt-4 text-sm text-muted-foreground">
                                *Registration fee: ₹499 per person. (Team of 3-5 recommended)
                            </p>
                        </div>
                    </div>

                    <div className="bg-secondary/10 border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold mb-2">Registration Details</h3>
                                <p className="text-muted-foreground text-sm">Please keep your payment screenshot ready before registering.</p>
                            </div>

                            <div className="space-y-4">
                                <div className="p-4 rounded-lg bg-background/50 border border-white/5">
                                    <p className="text-xs text-muted-foreground uppercase opacity-70">Event Date</p>
                                    <p className="font-bold">Jan 3-5, 2024</p>
                                </div>
                                <div className="p-4 rounded-lg bg-background/50 border border-white/5">
                                    <p className="text-xs text-muted-foreground uppercase opacity-70">Venue</p>
                                    <p className="font-bold">College of Engineering Trikaripur</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
}
