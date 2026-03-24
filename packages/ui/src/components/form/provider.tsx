"use client";

import {
  FormProvider as RHFProvider,
  UseFormReturn,
  FieldValues,
} from "react-hook-form";

interface FormProps<T extends FieldValues> {
  children: React.ReactNode;
  methods: UseFormReturn<T>;
}

export const Form = <T extends FieldValues>({
  children,
  methods,
}: FormProps<T>) => {
  return <RHFProvider {...methods}>{children}</RHFProvider>;
};
