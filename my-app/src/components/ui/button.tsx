import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 ease-in-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-indigo-800 via-purple-500 to-pink-500 text-white shadow-md hover:scale-105 hover:shadow-lg",
        destructive:
          "bg-red-600 text-white shadow-md hover:bg-red-700 hover:scale-105 focus-visible:ring-red-300 dark:focus-visible:ring-red-600",
        outline:
          "border border-border bg-transparent text-foreground hover:border-primary hover:text-primary hover:scale-[1.03] focus-visible:ring-primary/40",
        secondary:
          "backdrop-blur-md bg-white/10 text-white border border-white/10 hover:bg-white/20 hover:scale-[1.02] dark:bg-black/20 dark:border-white/20",
        ghost:
          "text-muted-foreground hover:bg-muted/20 hover:text-foreground dark:hover:bg-muted/10",
        link: "text-primary underline-offset-4 hover:underline font-medium",
      },
      size: {
        default: "h-10 px-5 py-2.5",
        sm: "h-8 px-3 text-sm",
        lg: "h-12 px-6 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
