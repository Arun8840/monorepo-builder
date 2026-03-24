import React from "react";
import { InputProps } from "./input.type";
import { cn } from "../../lib/utils";

const baseClasses =
  "block w-full outline-none rounded-md border border-secondary p-2 focus:border-primary focus:ring-primary sm:text-sm aria-invalid:border-red-500 aria-invalid:ring-red-500";
export const Input: React.FC<InputProps> = ({
  label,
  description,
  error,
  className,
  ...props
}) => {
  return <input {...props} className={cn(baseClasses, className)} />;
};
