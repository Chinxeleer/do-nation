import { SignupForm } from "@/components/signup-form";
import { createUser } from "@/lib/actions/users.actions";
import { redirect } from "next/navigation";
import React from "react";
interface UserData {
  name: string;
  phone: string;
  password: string;
  email: string;
}
function SignUp() {
  async function handlePost(formData: FormData) {
    "use server";
    const data = Object.fromEntries(formData);
    console.log("This is the signup-form", data);
    const typeData = data as unknown as UserData;
    console.log(typeData);
    if (await createUser(typeData)) {
      console.log("User created");
      redirect("/login");
    } else {
      console.log("Could not create user");
    }
  }

  return (
    <div className="max-w-lg mx-auto">
      <SignupForm action={handlePost} />
    </div>
  );
}

export default SignUp;
