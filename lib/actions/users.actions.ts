import { createSessionClient, createUserClient } from "../appwrite.config";
import { cookies } from "next/headers";

const { DO_NATION_DB, DONOR_COLLECTION_ID } = process.env;

export async function getUser() {
  const sessionCookie = cookies().get("session");

  if (!sessionCookie) {
    console.log("No session cookie found");
    return { error: "Session cookie is missing" };
  }

  try {
    const { databases } = await createSessionClient(sessionCookie);
    const donee = await databases.listDocuments(
      DO_NATION_DB!,
      DONOR_COLLECTION_ID!,
    );
    console.log(donee);

    return { donee };
  } catch (error) {
    console.log(error);
    return { error: "failed to return session" };
  }
}
interface UserData {
  name: string;
  phone: string;
  password: string;
  email: string;
}
export async function createUser(formdata: UserData) {
  const user = await createUserClient(formdata);
  if (user) {
    return true;
  } else {
    return false;
  }
}
