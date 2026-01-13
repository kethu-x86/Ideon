import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { User, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const speakers = [
    {
        name: "Dr. Sarah Mitchell",
        role: "Innovation Strategist",
        company: "FutureLabs",
        bio: "Leading expert in Design Thinking and product innovation with 15+ years of experience."
    },
    {
        name: "Alex Chen",
        role: "Founder & CEO",
        company: "StartUp Flow",
        bio: "Serial entrepreneur who has scaled 3 startups from zero to acquisition."
    },
    {
        name: "Priya Patel",
        role: "Head of Product",
        company: "TechGiant India",
        bio: "Passionate about building user-centric products and mentoring young innovators."
    },
    {
        name: "James Wilson",
        role: "VC Analyst",
        company: "Venture Partners",
        bio: "Focused on early-stage investments in deep tech and sustainability."
    }
];

export default function SpeakersPage() {
    return (
        <div className="min-h-screen bg-surface-alt">
            <SectionWrapper className="pt-32 md:pt-48">
                <div className="text-center space-y-6 mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading text-foreground">
                        Meet The <span className="text-primary">Experts</span>
                    </h1>
                    <p className="text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
                        Learn from the best minds in the industry, including founders, investors, and product leaders.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {speakers.map((speaker, index) => (
                        <Card key={index} className="overflow-hidden group border-border-subtle bg-surface hover:shadow-lg transition-all duration-300">
                            <div className="aspect-square bg-gradient-to-br from-primary-soft to-accent-soft relative flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                {/* Placeholder Avatar */}
                                <div className="w-32 h-32 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center text-primary border-4 border-white shadow-sm">
                                    <User size={64} className="opacity-80" />
                                </div>
                            </div>
                            <CardContent className="p-6 text-center">
                                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors text-foreground">{speaker.name}</h3>
                                <p className="text-sm font-semibold text-accent mb-2">{speaker.role}</p>
                                <p className="text-xs text-secondary uppercase tracking-widest mb-4 font-bold opacity-80">{speaker.company}</p>
                                <p className="text-sm text-secondary mb-6 line-clamp-3 leading-relaxed">
                                    {speaker.bio}
                                </p>
                                <div className="flex gap-3 justify-center">
                                    <Link href="#" className="p-2.5 rounded-full bg-surface-alt text-secondary hover:bg-primary hover:text-white transition-all shadow-sm border border-border-subtle">
                                        <Linkedin size={18} />
                                    </Link>
                                    <Link href="#" className="p-2.5 rounded-full bg-surface-alt text-secondary hover:bg-primary hover:text-white transition-all shadow-sm border border-border-subtle">
                                        <Twitter size={18} />
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
}
