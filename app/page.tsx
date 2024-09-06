import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('/hero-bg.jpg')] bg-cover bg-center">
          <div className="container px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Make a Difference with Your Donation
              </h1>
              <p className="text-xl text-muted-foreground">
                Your contribution can help us provide essential aid and support
                to those in need. Join us in making a positive impact on our
                community.
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  href="/login"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Donate Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
