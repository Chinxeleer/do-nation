import { createAdminClient } from "../appwrite.config";
const { DO_NATION_DB, DONOR_COLLECTION_ID, DONEE_COLLECTION_ID } = process.env;

export async function getDonorDocument() {
  const { databases } = await createAdminClient();
  const donee = await databases.listDocuments(
    DO_NATION_DB!,
    DONOR_COLLECTION_ID!,
  );
  console.log(donee);

  return { donee };
}

export async function getDoneeDocument() {
  const { databases } = await createAdminClient();
  const donee = await databases.listDocuments(
    DO_NATION_DB!,
    DONEE_COLLECTION_ID!,
  );

  return { donee };
}
