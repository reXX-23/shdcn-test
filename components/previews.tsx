"use client";

import React, { useState } from "react";
import { Button } from "@/registry/web/components/button/button";
import { Input } from "@/registry/web/components/input/input";
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/registry/web/components/card/card";

interface PreviewProps {
  name: string;
}

export function Preview({ name }: PreviewProps) {
  const [inputValue, setInputValue] = useState("");

  switch (name) {
    case "button":
      return (
        <div className="flex flex-wrap items-center gap-4">
          <Button onClick={() => alert("Clicked!")}>Click me</Button>
          <Button variant="outline" size="sm">
            Small outline
          </Button>
          <Button size="lg">Large button</Button>
          <Button disabled>Disabled</Button>
        </div>
      );

    case "input":
      return (
        <div className="w-full max-w-sm space-y-4">
          <Input
            label="Email"
            placeholder="you@example.com"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter password"
            error="Password must be at least 8 characters"
          />
        </div>
      );

    case "card":
      return (
        <Card className="max-w-sm">
          <CardTitle>Welcome back</CardTitle>
          <CardDescription>Sign in to continue to your account.</CardDescription>
          <CardContent>
            <div className="space-y-3">
              <Input placeholder="Email" />
              <Button className="w-full">Sign in</Button>
            </div>
          </CardContent>
        </Card>
      );

    default:
      return (
        <div className="text-center">
          <p className="text-neutral-600 dark:text-neutral-400">
            Preview for <strong>{name}</strong> component
          </p>
        </div>
      );
  }
}
