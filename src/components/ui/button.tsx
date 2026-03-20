import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap font-display font-bold transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 tracking-wider uppercase",
    {
        variants: {
            variant: {
                default:
                    "bg-[#2563EB] text-white hover:bg-[#1d4ed8] shadow-lg shadow-blue-900/20",
                outline:
                    "border border-[#2563EB] text-[#2563EB] bg-transparent hover:bg-[#2563EB] hover:text-white",
                ghost:
                    "text-white hover:bg-white/10",
                secondary:
                    "bg-slate-800 text-white hover:bg-slate-700 border border-slate-600",
            },
            size: {
                default: "h-12 px-6 py-2 text-sm",
                sm: "h-9 px-4 text-xs",
                lg: "h-16 px-10 text-base",
                icon: "h-10 w-10",
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
    VariantProps<typeof buttonVariants> { }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }