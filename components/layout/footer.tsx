import Link from "next/link";
import { Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export function Footer() {
    return (
        <footer className="border-t border-border-subtle bg-surface-alt py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-3 mb-4 group">
                            <div className="w-10 h-10 group-hover:scale-105 transition-transform duration-300">
                                <Logo />
                            </div>
                            <span className="text-xl font-bold font-heading tracking-tight text-foreground">IDEON 1.0</span>
                        </Link>
                        <p className="text-muted-foreground max-w-sm">
                            The flagship innovation & entrepreneurship event by IEDC CETkr.
                            Where Ideas Turn Into Impact.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
                            <li><Link href="/schedule" className="text-muted-foreground hover:text-primary transition-colors">Schedule</Link></li>
                            <li><Link href="/speakers" className="text-muted-foreground hover:text-primary transition-colors">Speakers</Link></li>
                            <li><Link href="/register" className="text-muted-foreground hover:text-primary transition-colors">Register</Link></li>
                        </ul>
                    </div>

                    <div>
                        <p className="mt-4 text-sm text-muted-foreground">
                            &copy; {new Date().getFullYear()} IEDC CETkr.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
