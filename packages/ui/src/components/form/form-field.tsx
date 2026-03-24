"use client";

import { useFormContext } from "react-hook-form";
import { Label } from "../Label";
import { Input } from "../Input";

export const FormField = ({
  name,
  label,
  ...props
}: {
  name: string;
  label: string;
  [key: string]: any;
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors[name]?.message as string | undefined;

  return (
    <div className="flex flex-col gap-1">
      <Label aria-invalid={!!error}>{label}</Label>
      <Input {...register(name)} aria-invalid={!!error} {...props} />
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};
