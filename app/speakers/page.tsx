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
        <div className="min-h-screen">
            <SectionWrapper className="pt-32 md:pt-48">
                <div className="text-center space-y-6 mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading">
                        Meet The <span className="text-primary">Experts</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Learn from the best minds in the industry, including founders, investors, and product leaders.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {speakers.map((speaker, index) => (
                        <Card key={index} className="overflow-hidden group border-white/5 bg-white/[0.02]">
                            <div className="aspect-square bg-gradient-to-br from-secondary to-background relative flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                <User size={64} className="text-muted-foreground/50" />
                            </div>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{speaker.name}</h3>
                                <p className="text-sm font-semibold text-accent mb-2">{speaker.role}</p>
                                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">{speaker.company}</p>
                                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                                    {speaker.bio}
                                </p>
                                <div className="flex gap-3">
                                    <Link href="#" className="p-2 rounded-full bg-secondary/50 hover:bg-primary hover:text-white transition-colors">
                                        <Linkedin size={16} />
                                    </Link>
                                    <Link href="#" className="p-2 rounded-full bg-secondary/50 hover:bg-primary hover:text-white transition-colors">
                                        <Twitter size={16} />
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
