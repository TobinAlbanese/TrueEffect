import Link from "next/link";
import { LockKeyhole, Mail } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FieldLabel, Input } from "@/components/ui/form-controls";

export function AuthCard({
  mode,
}: {
  mode: "sign-in" | "sign-up" | "forgot-password";
}) {
  const isSignIn = mode === "sign-in";
  const isSignUp = mode === "sign-up";
  const title = isSignIn ? "Welcome back" : isSignUp ? "Create your mock account" : "Reset your password";
  const text = isSignIn
    ? "Sign in to the frontend-only prototype."
    : isSignUp
      ? "Start the mock onboarding flow for Sacramento."
      : "Enter your email to see the mock reset state.";
  const cta = isSignIn ? "Go to Today" : isSignUp ? "Continue to onboarding" : "Send reset link";
  const href = isSignIn ? "/app/today" : isSignUp ? "/onboarding/location" : "/sign-in";

  return (
    <Card className="w-full max-w-md p-6">
      <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
      <p className="mt-3 text-textSecondary">{text}</p>
      <div className="mt-6 grid gap-4">
        <div>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <div className="relative mt-2">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-textSecondary" />
            <Input className="pl-10" id="email" placeholder="alex@example.com" type="email" />
          </div>
        </div>
        {mode !== "forgot-password" ? (
          <div>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <div className="relative mt-2">
              <LockKeyhole className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-textSecondary" />
              <Input className="pl-10" id="password" placeholder="Mock password" type="password" />
            </div>
          </div>
        ) : null}
        <ButtonLink className="w-full" href={href}>
          {cta}
        </ButtonLink>
      </div>
      <p className="mt-5 rounded-lg bg-secondary p-3 text-sm text-textSecondary">
        Privacy note: this screen does not authenticate, store, or send any data.
      </p>
      <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold text-mainPrimary">
        {!isSignIn ? <Link href="/sign-in">Sign in</Link> : null}
        {!isSignUp ? <Link href="/sign-up">Create account</Link> : null}
        {mode !== "forgot-password" ? <Link href="/forgot-password">Forgot password</Link> : null}
      </div>
    </Card>
  );
}
