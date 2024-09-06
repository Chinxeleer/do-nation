import { SignInForm } from "@/components/authentication-form";
import { createAdminClient } from "@/lib/appwrite.config";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

function Login() {
  async function createSession(formData: FormData) {
    "use server";
    const data = Object.fromEntries(formData);
    const { email, password } = data;
    const { account } = await createAdminClient();
    const session = await account.createEmailPasswordSession(
      `${email}`,
      `${password}`,
    );
    cookies().set("session", session.secret, {
      httpOnly: true,
      sameSite: "strict",
      secure: true,
      expires: new Date(session.expire),
      path: "/donee",
    });

    redirect("/donee");
  }
  return (
    <div className="flex justify-center items-center min-h-full">
      <SignInForm action={createSession} />
    </div>
  );
}

export default Login;
