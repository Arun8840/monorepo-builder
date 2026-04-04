"use client"
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  DefaultSpinner,
  Form,
  FormField,
} from "@repo/ui"
import React from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginInput, LoginSchema } from "@repo/validation"
import Link from "next/link"
import { authClient } from "@repo/better-auth"

export default function LoginForm() {
  const form = useForm<LoginInput>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const isSubmitting = form.formState.isSubmitting
  const handleSubmit: SubmitHandler<LoginInput> = async (data) => {
    await authClient.signIn.email({
      email: data?.email,
      password: data?.password,
      callbackURL: "/",
    })
  }
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
          <CardFooter className="flex flex-col gap-2">
            <Button className="w-full" type="submit">
              {isSubmitting ? <DefaultSpinner /> : "Login"}
            </Button>
            <div className="flex items-center  gap-2 justify-between text-sm">
              <p>Don't have an account?</p>
              <Link href="/auth/sign-up" className="text-primary underline">
                Sign-up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </form>
    </Form>
  )
}
