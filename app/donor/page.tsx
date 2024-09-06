"use client";

/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation';


function Donor() {
  // Functionalities here
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [student_num, setStudent_num] = useState("");
  const [phone_num, setPhone_num] = useState("");
  const [items, setItems] = useState("");
  const [location, setLocation] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevent page reload

    try {
      const response = await fetch('/api/insertDonors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          surname: surname,
          email: email,
          student_num: student_num,
          phone_num: phone_num,
          items: items,
          location: location,
        }),
      });

      if (response.ok) {
        const data = await response.json();

        router.push('/thanks1');
        console.log('Document created:', data);
        // Reset form after successful submission
        setName('');
        setSurname('');
        setEmail('');
        setStudent_num('');
        setPhone_num('');
        setItems('');
        setLocation('');
      } else {
        console.error('Failed to create document:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
    
  return (
    <div className="flex items-center justify-center min-h-screen">
     <Card className="w-full max-w-md mx-auto">
       <CardHeader>
         <CardTitle>Donate</CardTitle>
         <CardDescription>Fill out the form below and help us make the world a better place.</CardDescription>
       </CardHeader>
       <CardContent className="space-y-4">
         <div className="space-y-2">
           <Label htmlFor="name">Name</Label>
           <Input id="name" placeholder="Enter your name" 
              value={name}
              onChange={(e) => setName(e.target.value)} required/>
        </div>
        <div className="space-y-2">
          <Label htmlFor="surname">Surname</Label>
          <Input id="surname" placeholder="Enter your surname" 
              value={surname}
              onChange={(e) => setSurname(e.target.value)} required/>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div className="space-y-2">
          <Label htmlFor="student_num">Student number</Label>
          <Input id="student_num" type="number" placeholder="Enter your student number" 
              value={student_num}
              onChange={(e) => setStudent_num(e.target.value)} required/>
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone_num">Phone number</Label>
          <Input id="phone_num" type="number" placeholder="Enter your phone number" 
              value={phone_num}
              onChange={(e) => setPhone_num(e.target.value)} required/>
        </div>
        <div className="space-y-2">
          <Label htmlFor="item">Item</Label>
          <Input id="item" placeholder="Enter your item" 
              value={items}
              onChange={(e) => setItems(e.target.value)} required/>
          {/* <Textarea id="message" placeholder="Enter your message" className="min-h-[100px]" /> */}
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input id="location" placeholder="Enter your location" 
              value={location}
              onChange={(e) => setLocation(e.target.value)} required/>
        </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" onClick={handleSubmit}>
            Submit
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Donor;
