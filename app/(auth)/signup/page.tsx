"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { FiArrowRight, FiLock, FiMail, } from "react-icons/fi";
import AuthProviders from "../auth-proivders";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function Page() {
  return (
    <div className="space-y-8 w-64">
    <div className="flex flex-col space-y-2">
      <span className="font-semibold text-4xl">Sign up</span>
      <span className="text-sm text-muted-foreground">
        Create an account using email or a proivder below.
      </span>
    </div>
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-2">
                <div className="relative flex items-center text-muted-foreground focus-within:text-foreground">
                  <FiMail className="absolute left-2" />
                  <Input
                    placeholder="E-mail"
                    type="email"
                    autoComplete="email"
                    className="pl-8"
                  />
                </div>
                <div className="relative flex items-center text-muted-foreground focus-within:text-foreground">
                  <FiLock className="absolute left-2" />
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="current-password"
                    className="pl-8"
                  />
                </div>
                <div className="relative flex items-center text-muted-foreground focus-within:text-foreground">
                  <FiLock className="absolute left-2" />
                  <Input
                    placeholder="Repeat Password"
                    type="password"
                    autoComplete="current-password"
                    className="pl-8"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms_check"/>
                <Label htmlFor="terms_check" className="text-muted-foreground">I have read and accept the<br/> <Link href={'/terms'} className="text-foreground underline">terms and conditions</Link></Label>
              </div>
              <Button disabled>Coming soon...</Button>
              <div className="relative flex items-center justify-center">
                <span className="absolute bg-background px-2 text-xs text-muted-foreground uppercase">
                  or continue with
                </span>
                <Separator />
              </div>
              <AuthProviders />
              <div className="flex space-x-1 text-sm">
                <span className="text-muted-foreground">
                Already have an account?
                </span>
              <Link href={'/login'} className="underline">
                Log in here
              </Link>
              </div>
            </div>
          </div>
  );
}
