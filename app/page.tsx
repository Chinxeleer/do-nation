import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-full flex justify-center bg-pink-100">
      <div className="flex flex-col min-w-6xl  justify-center space-y-20 p-4">
        <div className="flex flex-col justify-center items-center space-y-10">
          <h1 className="text-2xl md:text-5xl font-extrabold text-center">
            Make a Difference with Your Donation
          </h1>
          <Link href={""}>
            <Button>Donate</Button>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-justify md:w-[600px] text-xl">
            Your contribution can help us provide essential aid and support to
            those in need. Join us in making a positive impact in our community.
          </p>
        </div>
      </div>
    </main>
  );
}
