import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn("relative flex items-center justify-center", className)}>
            <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
            >
                {/* Background Circle - Soft Light */}
                <circle cx="50" cy="50" r="50" className="fill-surface" />

                {/* Organic "Nanobanana" Shapes */}

                {/* Shape 1: Electric Blue Swoosh (The Core) */}
                <path
                    d="M50 20C66.5685 20 80 33.4315 80 50C80 66.5685 66.5685 80 50 80C33.4315 80 20 66.5685 20 50C20 33.4315 33.4315 20 50 20Z"
                    className="stroke-primary/20"
                    strokeWidth="4"
                />

                {/* Shape 2: Professional Indigo Crescent (The Energy) */}
                <path
                    d="M50 15C30.67 15 15 30.67 15 50C15 69.33 30.67 85 50 85"
                    className="stroke-tertiary"
                    strokeWidth="8"
                    strokeLinecap="round"
                />

                {/* Shape 3: Cyan "Nano" Curve (The Tech) */}
                <path
                    d="M85 50C85 30.67 69.33 15 50 15"
                    className="stroke-accent"
                    strokeWidth="8"
                    strokeLinecap="round"
                />

                {/* Shape 4: Inner Primary Intersect (The Innovation) */}
                <path
                    d="M50 85C69.33 85 85 69.33 85 50"
                    className="stroke-primary"
                    strokeWidth="8"
                    strokeLinecap="round"
                />

                {/* Central "Nano" Dot */}
                <circle cx="50" cy="50" r="12" className="fill-transparent stroke-foreground" strokeWidth="0" />
                <circle cx="50" cy="50" r="8" className="fill-primary" />
                <circle cx="50" cy="50" r="4" className="fill-white" />
            </svg>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full -z-10" />
        </div>
    );
};
