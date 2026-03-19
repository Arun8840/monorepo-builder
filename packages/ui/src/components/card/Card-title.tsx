import React from "react";
import { CardTitleProps } from "./Card.type";

export const CardTitle: React.FC<CardTitleProps> = ({ children }) => {
  return <div>{children}</div>;
};
