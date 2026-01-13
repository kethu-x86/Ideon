import Link from "next/link";
import { Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-background py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                                I
                            </div>
                            <span className="text-xl font-bold font-heading tracking-tight">IDEON 1.0</span>
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
                        <h3 className="font-semibold mb-4 text-foreground">Connect</h3>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                                <Instagram size={20} />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                                <Twitter size={20} />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                                <Linkedin size={20} />
                            </Link>
                            <Link href="mailto:contact@ideon.com" className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                                <Mail size={20} />
                            </Link>
                        </div>
                        <p className="mt-4 text-sm text-muted-foreground">
                            &copy; {new Date().getFullYear()} IEDC CETkr.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
