"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import AuthProviders from "../auth-proivders";
import { Lock, Mail } from "lucide-react";

export default function Page() {
  return (
        <div className="space-y-8 w-64">
          <div className="flex flex-col space-y-2">
            <span className="font-semibold text-2xl">Welcome back 👋</span>
            <span className="text-sm text-muted-foreground">
              Log in using email, choose a provider or create a new account.
            </span>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-6">
              <form className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-2">
                <div className="relative flex items-center text-muted-foreground focus-within:text-foreground">
                  <Mail className="absolute left-2" size={16} />
                  <Input
                    placeholder="E-mail"
                    type="email"
                    autoComplete="email"
                    className="pl-8"
                  />
                </div>
                <div className="relative flex items-center text-muted-foreground focus-within:text-foreground">
                  <Lock className="absolute left-2" size={16} />
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="current-password"
                    className="pl-8"
                  />
                </div>
              </div>
              <Button>Log in</Button>
              </form>
              <div className="relative flex items-center justify-center">
                <span className="absolute bg-background px-2 text-xs text-muted-foreground uppercase">
                  or continue with
                </span>
                <Separator />
              </div>
              <AuthProviders />
              <div className="flex space-x-1 text-sm">
                <span className="text-muted-foreground">
                Don&quot;t have an account?
                </span>
              <Link href={'/signup'} className="underline">
                Sign up here
              </Link>
              </div>
            </div>
          </div>
        </div>
  );
}