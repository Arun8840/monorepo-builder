import React from "react";
import { CardDescriptionProps } from "./Card.type";

export const CardDescription: React.FC<CardDescriptionProps> = ({
  children,
}) => {
  return <div>{children}</div>;
};
