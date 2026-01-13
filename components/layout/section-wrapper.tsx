import { cn } from "@/lib/utils";
import React from "react";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    id?: string;
    className?: string;
    hasBackground?: boolean;
}

export function SectionWrapper({
    children,
    id,
    className,
    hasBackground = false,
    ...props
}: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={cn(
                "py-16 md:py-24 relative overflow-hidden",
                hasBackground && "bg-secondary/20",
                className
            )}
            {...props}
        >
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {children}
            </div>
        </section>
    );
}
