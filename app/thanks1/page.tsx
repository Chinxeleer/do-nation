"use client";

import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from 'react';

function CircleCheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    )
  }

export default function Component() {
  const router = useRouter();

  const handleSignOutClick = () => {
    router.push('/');
  };

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <CircleCheckIcon className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Thank you!</h1>
        <p className="mt-4 text-muted-foreground">
          You have successfully made a donation. Hope you have a lovely day.
        </p>
        <div className="mt-6">
          <Button onClick={handleSignOutClick} className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
            See you later
          </Button>
        </div>
      </div>
    </div>
  )
}
