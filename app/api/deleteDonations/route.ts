import { createAdminClient } from "../../../lib/appwrite.config";
import { NextResponse } from 'next/server';

const { DO_NATION_DB, DONOR_COLLECTION_ID } = process.env;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { doc_id } = body;

    const { databases } = await createAdminClient();

    // Fetch documents from the database
    const deleteDonations = await databases.deleteDocument(
      DO_NATION_DB!,
      DONOR_COLLECTION_ID!,
      doc_id
    );

    // Return the result as a proper HTTP response
    return NextResponse.json({ deleteDonations });
  } catch (error) {
    console.error("Error deleting document:", error);
    // Return a 500 status code with the error message
    return NextResponse.json({ status: 500 });
  }
}



