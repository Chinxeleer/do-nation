const {
  PROJECT_ID,
  API_KEY,
  DO_NATION_DB,
  DONEE_COLLECTION_ID,
  DONOR_COLLECTION_ID,
} = process.env;

import { Client, Databases, Account } from "appwrite";

const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject(PROJECT_ID!);

export const account = new Account(client);
export const databases = new Databases(client);
