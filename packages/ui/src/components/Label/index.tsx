import React from "react";
import { LabelProps } from "./label.type";
import { cn } from "../../lib/utils";

const baseClasses = "block text-sm font-medium mb-2 aria-invalid:text-red-500";
export const Label: React.FC<LabelProps> = ({
  children,
  className,
  description,
  error,
  ...props
}) => {
  return (
    <label {...props} className={cn(baseClasses, className)}>
      {children}
    </label>
  );
};
