import Link from "next/link";
import { Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-border-subtle bg-surface-alt py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-3 mb-4 group">
                            <span className="text-xl font-bold font-heading tracking-tight text-foreground">IDEON 1.0</span>
                        </Link>
                        <p className="text-muted-foreground max-w-sm">
                            The flagship innovation & entrepreneurship event by IEDC CETkr.
                            Where Ideas Turn Into Impact.
                            <br /> <br />
                            &copy; {new Date().getFullYear()} IEDC CETkr.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
