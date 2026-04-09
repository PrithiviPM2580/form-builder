"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertTriangleIcon, HomeIcon, RotateCcwIcon } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error("Error in builder page:", error);
  }, [error]);

  return (
    <div className="relative w-full overflow-hidden px-4 py-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_60%_at_20%_10%,hsl(var(--destructive)/0.12),transparent_55%),radial-gradient(90%_60%_at_80%_90%,hsl(var(--primary)/0.12),transparent_55%)]" />

      <Card className="relative mx-auto w-full max-w-lg border border-border/60 bg-background/95 backdrop-blur">
        <CardHeader className="space-y-2 text-center">
          <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
            <AlertTriangleIcon className="h-6 w-6" />
          </div>
          <CardTitle className="text-2xl">Something went wrong</CardTitle>
          <CardDescription>
            We could not load this builder page right now. Try again, or return
            to the dashboard.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="rounded-2xl border border-border/60 bg-muted/40 p-3 text-xs text-muted-foreground">
            Error details: {error.message || "Unexpected error"}
          </div>
        </CardContent>

        <CardFooter className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <Button variant="outline" onClick={reset} className="w-full">
            <RotateCcwIcon className="mr-2 h-4 w-4" />
            Try again
          </Button>
          <Button asChild className="w-full">
            <Link href="/">
              <HomeIcon className="mr-2 h-4 w-4" />
              Go back home
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ErrorPage;
