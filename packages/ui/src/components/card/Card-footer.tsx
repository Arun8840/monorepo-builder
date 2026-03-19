import React from "react";
import { CardFooterProps } from "./Card.type";

export const CardFooter: React.FC<CardFooterProps> = ({ children }) => {
  return <div>{children}</div>;
};
