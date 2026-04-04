import React from "react";
import { CardContentProps } from "./Card.type";

export const CardContent: React.FC<CardContentProps> = ({ children }) => {
  return <div>{children}</div>;
};
