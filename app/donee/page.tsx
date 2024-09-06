"use client";

import Link from "next/link"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { JSX, SVGProps, useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation';

function Package2Icon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
    <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
    <path d="M12 3v6" />
    </svg>
)
}
  
// Define an interface for donor items
interface DonorItem {
  name: string;
  surname: string;
  email: string;
  student_num: string ;
  phone_num: string;
  location: string;
  items: string;
}
  

function Donee() {
  const router = useRouter();

  const handleSignOutClick = () => {
    router.push('/');
  };

  // Set the type for the state to be an array of DonorItem
  const [donorsItems, setDonorsItems] = useState<DonorItem[]>([]);

  useEffect(() => {
    fetch(`/api/fetchDonors`)
      .then((response) => response.json())
      .then((data) => {
        if (data.donor && Array.isArray(data.donor.documents)) {
          // Ensure data is an array of DonorItem
          setDonorsItems(data.donor.documents as DonorItem[]);
        } else {
          console.error('Expected an array, but received:', data);
          setDonorsItems([]); 
        }
      })
      .catch((e) => {
        console.error("No data to be fetched", e);
      });
  }, []);

  return (
    <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
    <div className="hidden border-r bg-muted/40 lg:block">
      <div className="flex flex-col gap-2">
        <div className="flex h-[60px] items-center px-6">
          <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
            <Package2Icon className="h-6 w-6" />
            <span className="">Do-Nation Inc</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary  transition-all hover:text-primary"
              prefetch={false}
            >
              Donations
            </Link>
            
          </nav>
        </div>
      </div>
    </div>
    <div className="flex flex-col">
      <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-muted/40 px-6">
        <div className="flex-1">
          <h1 className="font-semibold text-lg">Recent Donations</h1>
        </div>
        
        <div className="relative">
            <Button onClick={handleSignOutClick} className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Sign out
            </Button>
        </div>
       
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="border shadow-sm rounded-lg p-2">
            <Table>
                <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Surname</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Student number</TableHead>
                    <TableHead>Phone number</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Item</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                </TableRow>
                </TableHeader>
                <TableBody>
                {donorsItems.length > 0 ? (
                    donorsItems.map((item, i) => (
                    <TableRow key={i}>
                        <TableCell className="font-medium">{item.name}</TableCell>
                        <TableCell className="font-medium">{item.surname}</TableCell>
                        <TableCell className="font-medium">{item.email}</TableCell>
                        <TableCell className="font-medium">{item.student_num}</TableCell>
                        <TableCell className="font-medium">{item.phone_num}</TableCell>
                        <TableCell className="font-medium">{item.location}</TableCell>
                        <TableCell className="font-medium">{item.items}</TableCell>
                        <TableCell className="text-right">
                        <Button className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                            Request
                        </Button>
                        </TableCell>
                    </TableRow>
                    ))
                ) : (
                    <TableRow>
                    <td colSpan={7} className="text-center py-3">
                        No donors found.
                    </td>
                    </TableRow>
                )}
                </TableBody>
            </Table>
        </div>
      </main>
    </div>
  </div>         
  );
}

export default Donee;


