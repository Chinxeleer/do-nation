import { createAdminClient } from "../../../lib/appwrite.config";
import { NextResponse } from 'next/server';
import { ID } from 'appwrite';

const { DO_NATION_DB, DONOR_COLLECTION_ID } = process.env;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { databases } = await createAdminClient();
    const { name, surname, email, student_num, phone_num, items, location } = body;

    // Fetch documents from the database
    const insert = await databases.createDocument(
      DO_NATION_DB!,
      DONOR_COLLECTION_ID!,
      ID.unique(), // documentId
      {
        name: name,
        surname: surname,
        email: email,
        student_num: student_num,
        phone_num: phone_num,
        items: items,
        location: location
      }, // data
    );

    // Return the result as a proper HTTP response
    return NextResponse.json({ insert });
  } catch (error) {
    console.error("Error inserting documents:", error);
    // Return a 500 status code with the error message
    // return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ status: 500 });
  }
}
