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
import { LoginInput, LoginSchema } from "@repo/validation";

export default function LoginForm() {
  const form = useForm<LoginInput>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit: SubmitHandler<LoginInput> = (data) => {
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
            <CardTitle>Login</CardTitle>
            <CardDescription>Login to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <FormField name="email" label="Email" type="email" />
            <FormField name="password" label="Password" type="password" />
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit">
              Login
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
