"use client";

import Link from "next/link";
import { Twitter, Instagram, Linkedin, Mail, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
    product: [
        { label: "Home", href: "/" },
        { label: "About", href: "/#about" },
        { label: "Speakers", href: "/#speakers" },
        { label: "Timeline", href: "/#schedule" },
    ],
    legal: [
        { label: "Code of Conduct", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
    ],
    social: [
        { icon: Instagram, href: "https://instagram.com/iedc_cet", label: "Instagram" },
        { icon: Linkedin, href: "https://linkedin.com/company/iedc-cet", label: "LinkedIn" },
        { icon: Twitter, href: "https://twitter.com/iedccet", label: "Twitter" },
    ]
};

export function Footer() {
    return (
        <footer className="border-t border-border-subtle bg-surface-alt pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block group">
                            <span className="text-2xl font-bold font-heading tracking-tight text-foreground group-hover:text-primary transition-colors">
                                IDEON <span className="text-primary">1.0</span>
                            </span>
                        </Link>
                        <p className="text-secondary leading-relaxed max-w-xs">
                            The flagship innovation & entrepreneurship bootcamp by IEDC CETkr.
                            Where ideas turn into impact.
                        </p>
                        <div className="flex items-center gap-4">
                            {footerLinks.social.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <Link
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-surface border border-border-subtle flex items-center justify-center text-secondary hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                                        aria-label={social.label}
                                    >
                                        <Icon size={18} />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-start-4">
                        <h4 className="font-heading font-bold text-foreground mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {footerLinks.product.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-secondary hover:text-primary transition-colors inline-flex items-center group"
                                    >
                                        {link.label}
                                        <ArrowRight className="w-0 h-4 opacity-0 -ml-2 group-hover:w-4 group-hover:ml-1 group-hover:opacity-100 transition-all duration-300" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary text-center md:text-left">
                    <p>
                        &copy; {new Date().getFullYear()} IEDC CETkr. All rights reserved.
                    </p>
                    <p className="flex items-center gap-1.5">
                        Made with <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" /> by{" "}
                        IEDC CETkr IPR Team
                    </p>
                </div>
            </div>
        </footer>
    );
}
