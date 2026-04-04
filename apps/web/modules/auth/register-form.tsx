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
import { RegisterInput, registerSchema } from "@repo/validation"
import { authClient } from "@repo/better-auth"
import { useRouter } from "next/navigation"
import Link from "next/link"
export default function RegisterForm() {
  const navigation = useRouter()
  const form = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
    },
  })

  const isSubmiting = form.formState.isSubmitting
  const handleSubmit: SubmitHandler<RegisterInput> = async (data) => {
    const res = await authClient.signUp.email({
      email: data.email,
      password: data.password,
      name: data.name,
      callbackURL: "/auth/login",
    })

    if (res?.data?.user) {
      navigation.push("/auth/login")
    }
  }
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
          <CardFooter className="flex flex-col gap-2">
            <Button className="w-full" type="submit" disabled={isSubmiting}>
              {isSubmiting ? <DefaultSpinner /> : "Submit"}
            </Button>
            <div className="flex items-center  gap-2 justify-between text-sm">
              <p>Already have an account?</p>
              <Link href="/auth/login" className="text-primary underline">
                Login
              </Link>
            </div>
          </CardFooter>
        </Card>
      </form>
    </Form>
  )
}
