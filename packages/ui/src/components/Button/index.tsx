import { cn } from "../../lib/utils";
import { buttonVariants } from "./button.variants";
import { ButtonProps } from "./button.type";

export function Button({
  children,
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
}
