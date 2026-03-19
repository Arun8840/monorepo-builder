"use client";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Form,
  FormField,
} from "@repo/ui";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterInput, registerSchema } from "@repo/validation";

export default function RegisterForm() {
  const form = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit: SubmitHandler<RegisterInput> = (data) => {
    console.log(data);
  };
  return (
    <Form methods={form}>
      <form
        className="w-full max-w-md"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <Card>
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>Register to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <FormField name="name" label="Name" type="text" />
            <FormField name="email" label="Email" type="email" />
            <FormField name="password" label="Password" type="password" />
            <FormField
              name="confirmPassword"
              label="Confirm Password"
              type="password"
            />
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit">
              Register
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
