import { createAdminClient } from "../../../lib/appwrite.config";
import { NextResponse } from 'next/server';

const { DO_NATION_DB, DONOR_COLLECTION_ID } = process.env;

export async function GET() {
  try {
    // Check if environment variables are available
    // if (!DO_NATION_DB || !DONOR_COLLECTION_ID) {
    //   throw new Error("Missing environment variables");
    // }

    const { databases } = await createAdminClient();

    // Fetch documents from the database
    const donor = await databases.listDocuments(
      DO_NATION_DB!,
      DONOR_COLLECTION_ID!,
    );

    // Return the result as a proper HTTP response
    return NextResponse.json({ donor });
  } catch (error) {
    console.error("Error fetching documents:", error);
    // Return a 500 status code with the error message
    return NextResponse.json({ status: 500 });
  }
}
