import React from "react";
import AuthLayout from "../../layouts/auth-layout";

export default function layout({ children }: { children: React.ReactNode }) {
  return <AuthLayout>{children}</AuthLayout>;
}
