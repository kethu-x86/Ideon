import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-gradient-to-r from-primary to-accent text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.02] border-0",
                destructive:
                    "bg-red-500 text-white hover:bg-red-600 shadow-sm",
                outline:
                    "border border-primary text-primary bg-transparent hover:bg-primary-soft hover:text-primary",
                secondary:
                    "bg-primary-soft text-primary hover:bg-primary/10 shadow-sm",
                ghost: "hover:bg-primary-soft hover:text-primary",
                link: "text-primary underline-offset-4 hover:underline",
                premium: "bg-gradient-to-r from-primary via-[#4F46E5] to-accent text-white hover:opacity-90 shadow-lg shadow-primary/25 border-0 hover:scale-[1.03]",
                tertiary: "bg-tertiary text-white shadow-md hover:bg-tertiary/90 hover:shadow-lg hover:scale-[1.02] border-0"
            },
            size: {
                default: "h-11 px-6 py-2 rounded-xl",
                sm: "h-9 rounded-lg px-4",
                lg: "h-14 rounded-2xl px-8 text-lg",
                icon: "h-11 w-11 rounded-xl",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
