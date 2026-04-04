import { ComponentProps } from "react";

export interface LabelProps extends ComponentProps<"label"> {
  description?: string;
  error?: string;
}
