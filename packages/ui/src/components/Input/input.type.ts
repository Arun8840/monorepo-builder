import { ComponentProps } from "react";

export interface InputProps extends ComponentProps<"input"> {
  label?: string;
  description?: string;
  error?: string;
}
