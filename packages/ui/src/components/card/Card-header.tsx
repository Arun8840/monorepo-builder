import React from "react";
import { CardHeaderProps } from "./Card.type";

export const CardHeader: React.FC<CardHeaderProps> = ({ children }) => {
  return <div>{children}</div>;
};
