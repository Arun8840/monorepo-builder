import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "./button.variants";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export type { ButtonProps };
