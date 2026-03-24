type PositionTypes =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "topcenter"
  | "bottomcenter"
  | "leftcenter"
  | "rightcenter";

type ValueTypes = {
  title: string;
  description: string;
  position?: PositionTypes;
  type?: "success" | "error" | "warning" | "info";
};

export type SoonerInitailState = {
  value: ValueTypes | null;
  clear: () => void;
  success: (arg: ValueTypes) => void;
  error: (arg: ValueTypes) => void;
  warning: (arg: ValueTypes) => void;
  info: (arg: ValueTypes) => void;
};
